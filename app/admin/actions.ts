"use server";

import { revalidatePath } from "next/cache";
import type { InquiryStatus } from "@prisma/client";
import {
  createAccount,
  createFaq,
  createScreenSlide,
  deleteAccount,
  deleteFaq,
  deleteScreenSlide,
  listFaqs,
  listScreenSlides,
  reorderFaqs,
  reorderScreenSlides,
  updateAccount,
  updateFaq,
  updateInquiryStatus,
  updateScreenSlide,
} from "@/lib/admin-data";

function revalidateAdmin() {
  revalidatePath("/admin");
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin/faqs");
  revalidatePath("/admin/screens");
  revalidatePath("/admin/accounts");
  revalidatePath("/support/faq");
  revalidatePath("/products/inventory");
}

export async function setInquiryStatusAction(id: string, status: InquiryStatus) {
  const item = await updateInquiryStatus(id, status);
  revalidateAdmin();
  return item;
}

export async function saveFaqAction(input: {
  id?: string;
  question: string;
  answer: string;
  published: boolean;
}) {
  const item = input.id ? await updateFaq(input.id, input) : await createFaq(input);
  revalidateAdmin();
  return item;
}

export async function removeFaqAction(id: string) {
  await deleteFaq(id);
  revalidateAdmin();
}

export async function reorderFaqsAction(orderedIds: string[]) {
  const items = await reorderFaqs(orderedIds);
  revalidateAdmin();
  return items;
}

export async function saveScreenSlideAction(input: {
  id?: string;
  pageKey: string;
  title: string;
  description: string;
  imageUrl: string | null;
}) {
  const item = input.id ? await updateScreenSlide(input.id, input) : await createScreenSlide(input);
  revalidateAdmin();
  return item;
}

export async function removeScreenSlideAction(id: string) {
  await deleteScreenSlide(id);
  revalidateAdmin();
}

export async function reorderScreenSlidesAction(pageKey: string, orderedIds: string[]) {
  const items = await reorderScreenSlides(pageKey, orderedIds);
  revalidateAdmin();
  return items;
}

export async function saveAccountAction(input: {
  id?: string;
  username: string;
  name: string;
  password?: string;
}) {
  if (!input.id && !input.password) {
    throw new Error("password required");
  }
  const item = input.id
    ? await updateAccount(input.id, {
        username: input.username,
        name: input.name,
        password: input.password,
      })
    : await createAccount({
        username: input.username,
        name: input.name,
        password: input.password!,
      });
  revalidateAdmin();
  return item;
}

export async function removeAccountAction(id: string) {
  await deleteAccount(id);
  revalidateAdmin();
}

export async function refreshFaqsAction() {
  return listFaqs();
}

export async function refreshScreensAction() {
  return listScreenSlides();
}
