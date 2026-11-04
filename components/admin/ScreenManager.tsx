"use client";

import { Reorder, useDragControls, useReducedMotion } from "framer-motion";
import { Check, GripVertical, ImagePlus, Pencil, Plus, Trash2, X } from "lucide-react";
import { useMemo, useRef, useState, useTransition } from "react";
import {
  refreshScreensAction,
  removeScreenSlideAction,
  reorderScreenSlidesAction,
  saveScreenSlideAction,
} from "@/app/admin/actions";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { ScreenImageFrame } from "@/components/admin/ScreenImageFrame";
import type { AdminScreenSlide } from "@/lib/admin-data";
import type { ScreenPageOption } from "@/lib/admin-sample";

const NEW_ID = "__new__";
type DraftScreen = { title: string; description: string; imageUrl: string };
const emptyDraft: DraftScreen = { title: "", description: "", imageUrl: "" };

function mergePageOrder(all: AdminScreenSlide[], nextVisible: AdminScreenSlide[], pageKey: string) {
  const queue = [...nextVisible];
  return all.map((item) => (item.pageKey === pageKey ? queue.shift()! : item));
}

function ScreenListItem({
  item,
  order,
  pageKey,
  editing,
  draft,
  pending,
  onStartEdit,
  onCancelEdit,
  onDraftChange,
  onSave,
  onRemove,
  onMessage,
  onDragStart,
  onDragEnd,
}: {
  item: AdminScreenSlide;
  order: number;
  pageKey: string;
  editing: boolean;
  draft: DraftScreen;
  pending: boolean;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onDraftChange: (next: DraftScreen) => void;
  onSave: () => void;
  onRemove: () => void;
  onMessage: (message: string) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}) {
  const controls = useDragControls();
  const reduce = useReducedMotion();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const isNew = item.id === NEW_ID;
  const busy = pending || uploading;

  async function onFileChange(file: File | undefined) {
    if (!file) return;
    setUploading(true);
    onMessage("이미지 업로드 중…");
    try {
      const body = new FormData();
      body.set("file", file);
      body.set("pageKey", pageKey);
      const response = await fetch("/api/admin/upload", { method: "POST", body });
      const data = (await response.json()) as { ok?: boolean; url?: string; message?: string };
      if (!response.ok || !data.ok || !data.url) {
        onMessage(data.message || "이미지 업로드에 실패했습니다.");
        return;
      }
      onDraftChange({ ...draft, imageUrl: data.url });
      onMessage("이미지를 올렸습니다. 저장을 눌러 반영하세요.");
    } catch {
      onMessage("이미지 업로드 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      drag={!editing && !isNew}
      layout={reduce ? undefined : "position"}
      className={`rounded-3xl border bg-white p-5 shadow-sm ${editing ? "border-brand/40" : "border-slate-200"}`}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {editing ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 text-slate-200" aria-hidden>
              <GripVertical className="size-4" />
            </span>
            <p className="min-w-0 flex-1 text-xs font-semibold text-brand">{isNew ? "새 슬라이드" : String(order).padStart(2, "0")}</p>
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                aria-label="저장"
                disabled={busy}
                className="rounded-lg p-2 text-brand transition hover:bg-blue-50 disabled:opacity-50"
                onClick={onSave}
              >
                <Check className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="취소"
                disabled={busy}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-navy disabled:opacity-50"
                onClick={onCancelEdit}
              >
                <X className="size-4" aria-hidden />
              </button>
              {!isNew ? (
                <button
                  type="button"
                  aria-label={`${item.title} 삭제`}
                  disabled={busy}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
                  onClick={onRemove}
                >
                  <Trash2 className="size-4" aria-hidden />
                </button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="space-y-2 sm:w-40 sm:shrink-0">
              <ScreenImageFrame imageUrl={draft.imageUrl} emptyLabel={uploading ? "업로드 중…" : "이미지 없음"} />
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="sr-only"
                onChange={(event) => onFileChange(event.target.files?.[0])}
              />
              <button
                type="button"
                disabled={busy}
                onClick={() => fileRef.current?.click()}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-navy transition hover:border-slate-300 disabled:opacity-50"
              >
                <ImagePlus className="size-3.5" aria-hidden />
                {uploading ? "올리는 중…" : draft.imageUrl ? "이미지 바꾸기" : "이미지 올리기"}
              </button>
              {draft.imageUrl ? (
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => onDraftChange({ ...draft, imageUrl: "" })}
                  className="w-full text-xs font-medium text-slate-500 hover:text-rose-600 disabled:opacity-50"
                >
                  이미지 제거
                </button>
              ) : null}
            </div>
            <div className="min-w-0 flex-1 space-y-3">
              <label className="block text-sm">
                <span className="font-medium text-navy">제목</span>
                <input
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2"
                  value={draft.title}
                  autoFocus
                  onChange={(event) => onDraftChange({ ...draft, title: event.target.value })}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-navy">설명</span>
                <textarea
                  className="mt-1.5 min-h-24 w-full rounded-xl border border-slate-200 px-3 py-2"
                  value={draft.description}
                  onChange={(event) => onDraftChange({ ...draft, description: event.target.value })}
                />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <button
            type="button"
            aria-label={`${item.title} 순서 변경`}
            className="self-start touch-none rounded-lg p-1.5 text-slate-400 cursor-grab active:cursor-grabbing"
            onPointerDown={(event) => controls.start(event)}
          >
            <GripVertical className="size-4" aria-hidden />
          </button>
          <ScreenImageFrame imageUrl={item.imageUrl} />
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-brand">{String(order).padStart(2, "0")}</p>
                <h2 className="mt-1 text-base font-semibold text-navy">{item.title}</h2>
              </div>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label={`${item.title} 수정`}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-brand"
                  onClick={onStartEdit}
                >
                  <Pencil className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label={`${item.title} 삭제`}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                  onClick={onRemove}
                >
                  <Trash2 className="size-4" aria-hidden />
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        </div>
      )}
    </Reorder.Item>
  );
}

export function ScreenManager({
  initialItems,
  pageOptions,
}: {
  initialItems: AdminScreenSlide[];
  pageOptions: ScreenPageOption[];
}) {
  const [pageKey, setPageKey] = useState(
    () => pageOptions.find((o) => o.pageKey === "products/inventory")?.pageKey ?? pageOptions[0]?.pageKey ?? "products/inventory",
  );
  const [items, setItems] = useState(initialItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<DraftScreen>(emptyDraft);
  const [message, setMessage] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const itemsRef = useRef(items);
  const pageKeyRef = useRef(pageKey);
  const dragSnapshotRef = useRef<AdminScreenSlide[] | null>(null);
  itemsRef.current = items;
  pageKeyRef.current = pageKey;

  const currentPageSlides = useMemo(() => {
    const list = items.filter((item) => item.pageKey === pageKey);
    if (editingId === NEW_ID) {
      return [
        {
          id: NEW_ID,
          pageKey,
          title: draft.title || "새 슬라이드",
          description: draft.description,
          imageUrl: draft.imageUrl.trim() || null,
          sortOrder: 0,
          published: true,
        },
        ...list,
      ];
    }
    return list;
  }, [draft, editingId, items, pageKey]);

  function startCreate() {
    setEditingId(NEW_ID);
    setDraft(emptyDraft);
    setMessage("");
  }

  function startEdit(item: AdminScreenSlide) {
    setEditingId(item.id);
    setDraft({ title: item.title, description: item.description, imageUrl: item.imageUrl ?? "" });
    setMessage("");
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(emptyDraft);
  }

  function onReorder(next: AdminScreenSlide[]) {
    if (editingId === NEW_ID) return;
    if (!dragSnapshotRef.current) dragSnapshotRef.current = itemsRef.current;
    setItems((current) => mergePageOrder(current, next, pageKeyRef.current));
  }

  function onDragStart() {
    if (!dragSnapshotRef.current) {
      dragSnapshotRef.current = itemsRef.current;
    }
  }

  function onDragEnd() {
    const previous = dragSnapshotRef.current;
    dragSnapshotRef.current = null;
    if (!previous) return;

    const key = pageKeyRef.current;
    const nextItems = itemsRef.current;
    const previousIds = previous.filter((item) => item.pageKey === key).map((item) => item.id).join(",");
    const nextIds = nextItems.filter((item) => item.pageKey === key).map((item) => item.id);
    if (previousIds === nextIds.join(",")) return;

    startTransition(async () => {
      try {
        await reorderScreenSlidesAction(key, nextIds);
        setMessage("순서를 저장했습니다.");
      } catch {
        setItems(previous);
        setMessage("순서 저장에 실패했습니다.");
      }
    });
  }

  function save() {
    if (!draft.title.trim() || !draft.description.trim()) {
      setMessage("제목과 설명을 입력해 주세요.");
      return;
    }
    startTransition(async () => {
      try {
        await saveScreenSlideAction({
          id: editingId === NEW_ID ? undefined : editingId ?? undefined,
          pageKey,
          title: draft.title.trim(),
          description: draft.description.trim(),
          imageUrl: draft.imageUrl.trim() || null,
        });
        setItems(await refreshScreensAction());
        setMessage(editingId === NEW_ID ? "슬라이드를 추가했습니다." : "슬라이드를 저장했습니다.");
        setEditingId(null);
        setDraft(emptyDraft);
      } catch {
        setMessage("저장에 실패했습니다.");
      }
    });
  }

  function requestRemove(id: string) {
    if (id === NEW_ID) {
      cancelEdit();
      return;
    }
    setDeleteId(id);
  }

  function confirmRemove() {
    if (!deleteId) return;
    const id = deleteId;
    const previous = items;
    setDeleteId(null);
    setItems((current) => current.filter((item) => item.id !== id));
    if (editingId === id) cancelEdit();
    startTransition(async () => {
      try {
        await removeScreenSlideAction(id);
        setMessage("삭제했습니다.");
      } catch {
        setItems(previous);
        setMessage("삭제에 실패했습니다.");
      }
    });
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-navy">예시 화면</h1>
          <p className="mt-2 text-sm text-slate-600">카드에서 이미지를 직접 올리고 수정·저장합니다.</p>
        </div>
        <button
          type="button"
          aria-label="슬라이드 추가"
          disabled={editingId !== null}
          onClick={startCreate}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark disabled:opacity-40"
        >
          <Plus className="size-5" aria-hidden />
        </button>
      </div>

      <label className="mt-6 block max-w-xl text-sm">
        <span className="font-medium text-navy">페이지 선택</span>
        <select
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5"
          value={pageKey}
          onChange={(event) => {
            setPageKey(event.target.value);
            cancelEdit();
            setMessage("");
          }}
        >
          {pageOptions.map((option) => (
            <option key={option.pageKey} value={option.pageKey}>
              [{option.section === "products" ? "제품" : "업종"}] {option.group} · {option.label}
            </option>
          ))}
        </select>
      </label>

      {message ? <p className="mt-3 text-sm text-slate-500">{message}</p> : null}

      {currentPageSlides.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center text-sm text-slate-500">
          이 페이지에 등록된 슬라이드가 없습니다. 오른쪽 위 + 버튼으로 추가해 주세요.
        </div>
      ) : (
        <Reorder.Group axis="y" values={currentPageSlides} onReorder={onReorder} className="mt-8 flex flex-col gap-3" as="ul">
          {currentPageSlides.map((item, index) => (
            <ScreenListItem
              key={item.id}
              item={item}
              order={editingId === NEW_ID ? index : index + 1}
              pageKey={pageKey}
              editing={editingId === item.id}
              draft={draft}
              pending={pending}
              onStartEdit={() => startEdit(item)}
              onCancelEdit={cancelEdit}
              onDraftChange={setDraft}
              onSave={save}
              onRemove={() => requestRemove(item.id)}
              onMessage={setMessage}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))}
        </Reorder.Group>
      )}

      <ConfirmDialog
        open={deleteId !== null}
        title="예시 화면 삭제"
        description="이 예시 화면을 삭제할까요? 삭제하면 되돌릴 수 없습니다."
        pending={pending}
        onCancel={() => setDeleteId(null)}
        onConfirm={confirmRemove}
      />
    </div>
  );
}
