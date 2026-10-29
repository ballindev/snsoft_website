import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import inventoryScreens from "../data/product-screens/inventory.json";

const prisma = new PrismaClient();

const faqs = [
  {
    question: "도입은 어떤 순서로 진행되나요?",
    answer:
      "온라인 상담을 접수한 뒤 전문 컨설턴트가 업무를 진단하고, 표준 또는 맞춤 범위를 정해 환경을 세팅합니다. 실무자 교육이 끝나면 서비스를 오픈합니다.",
    sortOrder: 1,
    published: true,
  },
  {
    question: "표준 패키지와 맞춤 개발은 어떻게 고르나요?",
    answer:
      "회계, 재고, 주문처럼 검증된 업무는 표준 패키지로 시작합니다. 고유한 제조 BOM, 유통 단가, 특수 양식이 있을 때 그 부분만 1:1로 확장합니다. 범위가 애매하면 컨설턴트 진단을 선택하면 됩니다.",
    sortOrder: 2,
    published: true,
  },
  {
    question: "지금 쓰는 엑셀과 양식을 어떻게 넘기나요?",
    answer:
      "상담 신청에 사용 중인 엑셀이나 양식을 첨부할 수 있습니다. 표준 화면으로 담기는 범위와 맞춤 개발이 필요한 범위를 나눠 안내합니다.",
    sortOrder: 3,
    published: true,
  },
  {
    question: "요금은 어디서 확인하나요?",
    answer:
      "표준 패키지는 월 구독, 맞춤 개발은 범위가 확정된 뒤 별도 견적입니다. 금액은 사용자 수와 업무 범위를 확인한 상담에서 안내합니다.",
    sortOrder: 4,
    published: true,
  },
  {
    question: "이미 PlusERP를 쓰고 있습니다.",
    answer:
      "구버전 매뉴얼과 출력물 안내는 PlusERP 전용관에서 확인합니다. 신규 화면과 재구축은 BizMore ERP 도입 상담으로 이어집니다.",
    sortOrder: 5,
    published: true,
  },
  {
    question: "모바일에서도 사용할 수 있나요?",
    answer:
      "브라우저로 접속하는 웹 ERP라 스마트폰·태블릿에서도 확인할 수 있습니다. 현장 입력 범위는 도입 상담에서 안내합니다.",
    sortOrder: 6,
    published: false,
  },
];

const sampleInquiries = [
  {
    company: "한빛식품",
    name: "김민수",
    phone: "010-1234-5678",
    email: "minsu@hanbitfood.example",
    industry: "육가공/식자재",
    deployment: "standard",
    interests: ["판매재고", "주문관리", "세금계산서"],
    message: "매장 3곳과 본사 재고를 같이 보고 싶습니다. 데모 일정 문의드립니다.",
    attachmentName: "현재고_엑셀.xlsx",
    status: "received" as const,
    createdAt: new Date("2026-10-27T09:20:00+09:00"),
  },
  {
    company: "서울메디칼",
    name: "이서연",
    phone: "010-2345-6789",
    email: "seoyeon@seoulmed.example",
    industry: "의료/치과",
    deployment: "custom",
    interests: ["판매재고", "CRM"],
    message: "병원·대리점 단가표가 복잡해서 맞춤 범위 상담이 필요합니다.",
    attachmentName: "",
    status: "contacting" as const,
    createdAt: new Date("2026-10-26T14:05:00+09:00"),
  },
  {
    company: "푸른유통",
    name: "박준호",
    phone: "02-858-1000",
    email: "junho@pureun.example",
    industry: "유통/도소매",
    deployment: "consult",
    interests: ["회계", "통합금융", "발주관리"],
    message: "표준과 맞춤 중 어떤지 잘 모르겠습니다. 진단 부탁드립니다.",
    attachmentName: "업무흐름.pdf",
    status: "done" as const,
    createdAt: new Date("2026-10-24T11:40:00+09:00"),
  },
];

async function main() {
  const username = process.env.SEED_ADMIN_USERNAME?.trim() || "admin";
  const password = process.env.SEED_ADMIN_PASSWORD?.trim() || "admin123";
  const name = process.env.SEED_ADMIN_NAME?.trim() || "사이트 관리자";
  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.adminUser.upsert({
    where: { username },
    update: { name, passwordHash },
    create: {
      username,
      name,
      passwordHash,
      lastLoginAt: new Date("2026-10-28T10:00:00+09:00"),
    },
  });

  await prisma.adminUser.upsert({
    where: { username: "consult" },
    update: { name: "상담 담당" },
    create: {
      username: "consult",
      name: "상담 담당",
      passwordHash: await bcrypt.hash("consult123", 10),
    },
  });

  if ((await prisma.faq.count()) === 0) {
    await prisma.faq.createMany({ data: faqs });
  }

  if ((await prisma.screenSlide.count({ where: { pageKey: "products/inventory" } })) === 0) {
    await prisma.screenSlide.createMany({
      data: inventoryScreens.map((screen) => ({
        pageKey: "products/inventory",
        title: screen.title,
        description: screen.description,
        imageUrl: screen.imageUrl,
        sortOrder: screen.sortOrder,
        published: true,
      })),
    });
  }

  if ((await prisma.inquiry.count()) === 0) {
    await prisma.inquiry.createMany({ data: sampleInquiries });
  }

  console.log("Seed complete.");
  console.log(`Admin login: ${username} / ${password}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
