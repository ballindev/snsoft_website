export const INDUSTRY_OPTIONS = [
  "제조",
  "유통/도소매",
  "의료/치과",
  "육가공/식자재",
  "빌딩/차량",
  "기타",
] as const;

export const DEPLOYMENT_OPTIONS = [
  {
    value: "standard",
    label: "표준 패키지 도입 문의",
    hint: "회계·재고·주문처럼 검증된 업무를 월 구독으로 시작합니다.",
  },
  {
    value: "custom",
    label: "1:1 맞춤 커스터마이징 문의",
    hint: "특수 공정, 유통 단가, 전용 양식을 표준 위에 확장합니다.",
  },
  {
    value: "consult",
    label: "잘 모르겠음 · 컨설턴트 진단 희망",
    hint: "업무를 들은 뒤 표준과 맞춤 범위를 나눠 드립니다.",
  },
] as const;

export const INTEREST_OPTIONS = [
  "회계",
  "판매재고",
  "주문관리",
  "생산/BOM",
  "세금계산서",
  "통합금융",
  "CRM",
  "A/S",
] as const;

export type DeploymentValue = (typeof DEPLOYMENT_OPTIONS)[number]["value"];

export type ConsultationPayload = {
  company: string;
  name: string;
  phone: string;
  email: string;
  industry: string;
  deployment: string;
  interests: string[];
  message: string;
  attachmentName: string;
};

export type ConsultationErrors = Partial<Record<keyof ConsultationPayload, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateConsultation(input: ConsultationPayload): ConsultationErrors {
  const errors: ConsultationErrors = {};
  const company = input.company.trim();
  const name = input.name.trim();
  const phone = input.phone.trim();
  const email = input.email.trim();
  const digits = phone.replace(/\D/g, "");

  if (!company) errors.company = "회사명을 입력해 주세요.";
  else if (company.length > 80) errors.company = "회사명은 80자 안으로 입력해 주세요.";

  if (!name) errors.name = "담당자 성함을 입력해 주세요.";
  else if (name.length > 40) errors.name = "담당자 성함은 40자 안으로 입력해 주세요.";

  if (!phone) errors.phone = "연락처를 입력해 주세요.";
  else if (digits.length < 8 || digits.length > 15) errors.phone = "연락처 숫자를 다시 확인해 주세요.";

  if (!email) errors.email = "이메일을 입력해 주세요.";
  else if (!EMAIL_PATTERN.test(email) || email.length > 120) errors.email = "이메일 형식을 확인해 주세요.";

  if (!INDUSTRY_OPTIONS.includes(input.industry as (typeof INDUSTRY_OPTIONS)[number])) {
    errors.industry = "업종을 선택해 주세요.";
  }

  if (!DEPLOYMENT_OPTIONS.some((option) => option.value === input.deployment)) {
    errors.deployment = "희망 도입 형태를 선택해 주세요.";
  }

  if (!Array.isArray(input.interests) || input.interests.some((item) => !INTEREST_OPTIONS.includes(item as (typeof INTEREST_OPTIONS)[number]))) {
    errors.interests = "관심 기능을 다시 선택해 주세요.";
  }

  if (input.message.length > 2000) errors.message = "문의 내용은 2,000자 안으로 입력해 주세요.";
  if (input.attachmentName.length > 180) errors.attachmentName = "파일명이 너무 깁니다.";

  return errors;
}

export function parseConsultationPayload(body: unknown): ConsultationPayload | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  const textFields = ["company", "name", "phone", "email", "industry", "deployment", "message", "attachmentName"] as const;

  for (const field of textFields) {
    if (typeof record[field] !== "string") return null;
  }

  if (!Array.isArray(record.interests) || record.interests.some((item) => typeof item !== "string")) {
    return null;
  }

  return {
    company: record.company as string,
    name: record.name as string,
    phone: record.phone as string,
    email: record.email as string,
    industry: record.industry as string,
    deployment: record.deployment as string,
    interests: record.interests as string[],
    message: record.message as string,
    attachmentName: record.attachmentName as string,
  };
}
