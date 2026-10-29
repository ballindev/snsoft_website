import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createSessionValue } from "@/lib/admin-auth";
import { authenticateAdmin } from "@/lib/admin-data";
import { isDatabaseConfigured } from "@/lib/db";

export async function POST(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { ok: false, message: "DATABASE_URL이 설정되지 않았습니다. .env.local을 확인해 주세요." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "요청 형식을 확인할 수 없습니다." }, { status: 400 });
  }

  const username =
    typeof body === "object" && body && "username" in body ? String((body as { username: unknown }).username ?? "") : "";
  const password =
    typeof body === "object" && body && "password" in body ? String((body as { password: unknown }).password ?? "") : "";

  try {
    const user = await authenticateAdmin(username, password);
    if (!user) {
      return NextResponse.json({ ok: false, message: "아이디 또는 비밀번호가 올바르지 않습니다." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: ADMIN_SESSION_COOKIE,
      value: createSessionValue(user.username),
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });
    return response;
  } catch (error) {
    console.error("[admin/login]", error);
    return NextResponse.json(
      { ok: false, message: "로그인 처리 중 오류가 발생했습니다. DB 연결을 확인해 주세요." },
      { status: 500 },
    );
  }
}
