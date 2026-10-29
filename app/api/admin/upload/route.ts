import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, readSessionUsername } from "@/lib/admin-auth";
import { getSupabaseAdmin, isStorageConfigured, SCREEN_IMAGE_BUCKET } from "@/lib/supabase-admin";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

function extensionFor(type: string) {
  switch (type) {
    case "image/jpeg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/gif":
      return "gif";
    default:
      return "bin";
  }
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const username = readSessionUsername(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
  if (!username) {
    return NextResponse.json({ ok: false, message: "로그인이 필요합니다." }, { status: 401 });
  }

  if (!isStorageConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "이미지 업로드 설정이 없습니다. .env.local에 SUPABASE_SERVICE_ROLE_KEY를 추가하고 Supabase Storage 버킷(screen-images)을 만들어 주세요.",
      },
      { status: 503 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: false, message: "Storage 클라이언트를 만들 수 없습니다." }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "업로드 형식을 확인할 수 없습니다." }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ ok: false, message: "이미지 파일이 필요합니다." }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ ok: false, message: "jpg, png, webp, gif만 올릴 수 있습니다." }, { status: 400 });
  }

  if (file.size <= 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, message: "이미지는 5MB 이하로 올려 주세요." }, { status: 400 });
  }

  const pageKeyRaw = typeof formData.get("pageKey") === "string" ? String(formData.get("pageKey")) : "misc";
  const pageKey = pageKeyRaw.replace(/[^a-zA-Z0-9/_-]/g, "_").replace(/^\/+|\/+$/g, "") || "misc";
  const objectPath = `${pageKey}/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${extensionFor(file.type)}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const { error: uploadError } = await supabase.storage.from(SCREEN_IMAGE_BUCKET).upload(objectPath, bytes, {
    contentType: file.type,
    upsert: false,
  });

  if (uploadError) {
    console.error("[admin/upload]", uploadError);
    const missingBucket = /bucket|not found|404/i.test(uploadError.message);
    return NextResponse.json(
      {
        ok: false,
        message: missingBucket
          ? `Storage 버킷 "${SCREEN_IMAGE_BUCKET}"이 없습니다. Supabase Dashboard → Storage에서 Public 버킷으로 만들어 주세요.`
          : `업로드에 실패했습니다. (${uploadError.message})`,
      },
      { status: 500 },
    );
  }

  const { data } = supabase.storage.from(SCREEN_IMAGE_BUCKET).getPublicUrl(objectPath);
  return NextResponse.json({ ok: true, url: data.publicUrl, path: objectPath });
}
