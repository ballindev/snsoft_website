import { NextResponse } from "next/server";
import { createInquiry } from "@/lib/admin-data";
import { parseConsultationPayload, validateConsultation } from "@/lib/consultation";
import { isDatabaseConfigured } from "@/lib/db";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "신청 형식을 확인할 수 없습니다." }, { status: 400 });
  }

  const payload = parseConsultationPayload(body);
  if (!payload) {
    return NextResponse.json({ ok: false, message: "신청 항목이 올바르지 않습니다." }, { status: 400 });
  }

  const errors = validateConsultation(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors, message: "입력 내용을 다시 확인해 주세요." }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { ok: false, message: "문의 저장소가 아직 준비되지 않았습니다. 잠시 후 다시 시도해 주세요." },
      { status: 503 },
    );
  }

  try {
    const inquiry = await createInquiry(payload);
    if (process.env.NODE_ENV === "development") {
      console.info("[consultation] saved", { id: inquiry.id, company: inquiry.company });
    }
    return NextResponse.json({ ok: true, delivered: true, id: inquiry.id });
  } catch (error) {
    console.error("[consultation]", error);
    return NextResponse.json(
      { ok: false, message: "문의 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
