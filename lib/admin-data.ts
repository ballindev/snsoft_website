import type { AdminUser, Faq, Inquiry, InquiryStatus, ScreenSlide } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { ConsultationPayload } from "@/lib/consultation";
import { prisma } from "@/lib/db";
import { listNavMenuEntries } from "@/lib/nav-menu";

export type { InquiryStatus };

export type AdminInquiry = {
  id: string;
  createdAt: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  industry: string;
  deployment: string;
  interests: string[];
  message: string;
  attachmentName: string;
  status: InquiryStatus;
};

export type AdminFaq = {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
  published: boolean;
};

export type AdminScreenSlide = {
  id: string;
  pageKey: string;
  title: string;
  description: string;
  imageUrl: string | null;
  sortOrder: number;
  published: boolean;
};

export type AdminAccount = {
  id: string;
  username: string;
  name: string;
  lastLoginAt: string | null;
};

export type AdminNavMenuItem = {
  href: string;
  label: string;
  section: string;
  visible: boolean;
};

export const inquiryStatusLabel: Record<InquiryStatus, string> = {
  received: "접수",
  contacting: "연락중",
  done: "완료",
};

export const deploymentLabel: Record<string, string> = {
  standard: "표준 패키지",
  custom: "1:1 맞춤",
  consult: "컨설턴트 진단",
};

export function formatAdminDate(value: string | null) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function toInquiry(row: Inquiry): AdminInquiry {
  return {
    id: row.id,
    createdAt: row.createdAt.toISOString(),
    company: row.company,
    name: row.name,
    phone: row.phone,
    email: row.email,
    industry: row.industry,
    deployment: row.deployment,
    interests: row.interests,
    message: row.message,
    attachmentName: row.attachmentName,
    status: row.status,
  };
}

function toFaq(row: Faq): AdminFaq {
  return {
    id: row.id,
    question: row.question,
    answer: row.answer,
    sortOrder: row.sortOrder,
    published: row.published,
  };
}

function toSlide(row: ScreenSlide): AdminScreenSlide {
  return {
    id: row.id,
    pageKey: row.pageKey,
    title: row.title,
    description: row.description,
    imageUrl: row.imageUrl,
    sortOrder: row.sortOrder,
    published: row.published,
  };
}

function toAccount(row: AdminUser): AdminAccount {
  return {
    id: row.id,
    username: row.username,
    name: row.name,
    lastLoginAt: row.lastLoginAt?.toISOString() ?? null,
  };
}

export async function listInquiries() {
  const rows = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(toInquiry);
}

export async function getInquiry(id: string) {
  const row = await prisma.inquiry.findUnique({ where: { id } });
  return row ? toInquiry(row) : null;
}

export async function createInquiry(payload: ConsultationPayload) {
  const row = await prisma.inquiry.create({
    data: {
      company: payload.company.trim(),
      name: payload.name.trim(),
      phone: payload.phone.trim(),
      email: payload.email.trim(),
      industry: payload.industry,
      deployment: payload.deployment,
      interests: payload.interests,
      message: payload.message.trim(),
      attachmentName: payload.attachmentName.trim(),
      status: "received",
    },
  });
  return toInquiry(row);
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  const row = await prisma.inquiry.update({ where: { id }, data: { status } });
  return toInquiry(row);
}

export async function listFaqs() {
  const rows = await prisma.faq.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }] });
  return rows.map(toFaq);
}

export async function listPublishedFaqs() {
  const rows = await prisma.faq.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });
  return rows.map((row) => ({ question: row.question, answer: row.answer }));
}

export async function createFaq(input: { question: string; answer: string; published: boolean }) {
  const max = await prisma.faq.aggregate({ _max: { sortOrder: true } });
  const row = await prisma.faq.create({
    data: {
      question: input.question.trim(),
      answer: input.answer.trim(),
      published: input.published,
      sortOrder: (max._max.sortOrder ?? 0) + 1,
    },
  });
  return toFaq(row);
}

export async function updateFaq(id: string, input: { question: string; answer: string; published: boolean }) {
  const row = await prisma.faq.update({
    where: { id },
    data: {
      question: input.question.trim(),
      answer: input.answer.trim(),
      published: input.published,
    },
  });
  return toFaq(row);
}

export async function deleteFaq(id: string) {
  await prisma.faq.delete({ where: { id } });
}

export async function reorderFaqs(orderedIds: string[]) {
  await prisma.$transaction(
    orderedIds.map((id, index) => prisma.faq.update({ where: { id }, data: { sortOrder: index + 1 } })),
  );
  return listFaqs();
}

export async function listScreenSlides() {
  const rows = await prisma.screenSlide.findMany({
    orderBy: [{ pageKey: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }],
  });
  return rows.map(toSlide);
}

export async function listPublishedScreensByPageKey(pageKey: string) {
  const rows = await prisma.screenSlide.findMany({
    where: { pageKey, published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    imageUrl: row.imageUrl,
    sortOrder: row.sortOrder,
  }));
}

export async function createScreenSlide(input: {
  pageKey: string;
  title: string;
  description: string;
  imageUrl: string | null;
}) {
  const max = await prisma.screenSlide.aggregate({
    where: { pageKey: input.pageKey },
    _max: { sortOrder: true },
  });
  const row = await prisma.screenSlide.create({
    data: {
      pageKey: input.pageKey,
      title: input.title.trim(),
      description: input.description.trim(),
      imageUrl: input.imageUrl,
      sortOrder: (max._max.sortOrder ?? 0) + 1,
      published: true,
    },
  });
  return toSlide(row);
}

export async function updateScreenSlide(
  id: string,
  input: { title: string; description: string; imageUrl: string | null },
) {
  const row = await prisma.screenSlide.update({
    where: { id },
    data: {
      title: input.title.trim(),
      description: input.description.trim(),
      imageUrl: input.imageUrl,
    },
  });
  return toSlide(row);
}

export async function deleteScreenSlide(id: string) {
  await prisma.screenSlide.delete({ where: { id } });
}

export async function reorderScreenSlides(pageKey: string, orderedIds: string[]) {
  await prisma.$transaction(
    orderedIds.map((id, index) => prisma.screenSlide.update({ where: { id }, data: { sortOrder: index + 1 } })),
  );
  return listScreenSlides();
}

export async function countDashboard() {
  const [inquiries, faqs, screens, accounts, hiddenMenus] = await Promise.all([
    prisma.inquiry.count(),
    prisma.faq.count(),
    prisma.screenSlide.count(),
    prisma.adminUser.count(),
    prisma.navMenuVisibility.count({ where: { visible: false } }),
  ]);
  return { inquiries, faqs, screens, accounts, hiddenMenus };
}

export async function ensureNavMenuVisibilityRows() {
  const entries = listNavMenuEntries();
  const existing = await prisma.navMenuVisibility.findMany({
    where: { href: { in: entries.map((entry) => entry.href) } },
    select: { href: true, label: true, section: true },
  });
  const byHref = new Map(existing.map((row) => [row.href, row]));

  const toCreate = entries.filter((entry) => !byHref.has(entry.href));
  const toRelabel = entries.filter((entry) => {
    const row = byHref.get(entry.href);
    return row && (row.label !== entry.label || row.section !== entry.section);
  });

  if (toCreate.length === 0 && toRelabel.length === 0) return;

  await prisma.$transaction([
    ...(toCreate.length
      ? [
          prisma.navMenuVisibility.createMany({
            data: toCreate.map((entry) => ({
              href: entry.href,
              label: entry.label,
              section: entry.section,
              visible: true,
            })),
            skipDuplicates: true,
          }),
        ]
      : []),
    ...toRelabel.map((entry) =>
      prisma.navMenuVisibility.update({
        where: { href: entry.href },
        data: { label: entry.label, section: entry.section },
      }),
    ),
  ]);
}

export async function listNavMenuVisibility(): Promise<AdminNavMenuItem[]> {
  const entries = listNavMenuEntries();
  await ensureNavMenuVisibilityRows();
  const rows = await prisma.navMenuVisibility.findMany({
    where: { href: { in: entries.map((entry) => entry.href) } },
  });
  const byHref = new Map(rows.map((row) => [row.href, row]));

  return entries.map((entry) => {
    const row = byHref.get(entry.href);
    return {
      href: entry.href,
      label: entry.label,
      section: entry.section,
      visible: row?.visible ?? true,
    };
  });
}

export async function setNavMenuVisible(href: string, visible: boolean) {
  const entry = listNavMenuEntries().find((item) => item.href === href);
  if (!entry) throw new Error("unknown menu href");

  const row = await prisma.navMenuVisibility.upsert({
    where: { href },
    create: {
      href: entry.href,
      label: entry.label,
      section: entry.section,
      visible,
    },
    update: { visible },
  });

  return {
    href: row.href,
    label: row.label,
    section: row.section,
    visible: row.visible,
  } satisfies AdminNavMenuItem;
}

export async function getHiddenNavHrefs(): Promise<string[]> {
  const rows = await prisma.navMenuVisibility.findMany({
    where: { visible: false },
    select: { href: true },
  });
  return rows.map((row) => row.href);
}

export async function listAccounts() {
  const rows = await prisma.adminUser.findMany({ orderBy: { createdAt: "asc" } });
  return rows.map(toAccount);
}

export async function createAccount(input: { username: string; name: string; password: string }) {
  const passwordHash = await bcrypt.hash(input.password, 10);
  const row = await prisma.adminUser.create({
    data: {
      username: input.username.trim(),
      name: input.name.trim(),
      passwordHash,
    },
  });
  return toAccount(row);
}

export async function updateAccount(id: string, input: { username: string; name: string; password?: string }) {
  const data: { username: string; name: string; passwordHash?: string } = {
    username: input.username.trim(),
    name: input.name.trim(),
  };
  if (input.password) data.passwordHash = await bcrypt.hash(input.password, 10);
  const row = await prisma.adminUser.update({ where: { id }, data });
  return toAccount(row);
}

export async function deleteAccount(id: string) {
  await prisma.adminUser.delete({ where: { id } });
}

export async function authenticateAdmin(username: string, password: string) {
  const user = await prisma.adminUser.findUnique({ where: { username: username.trim() } });
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;
  const updated = await prisma.adminUser.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });
  return toAccount(updated);
}
