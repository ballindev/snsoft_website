"use client";

import { AnimatePresence, motion, Reorder, useDragControls, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, GripVertical, Pencil, Plus, Trash2, X } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { refreshFaqsAction, removeFaqAction, reorderFaqsAction, saveFaqAction } from "@/app/admin/actions";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import type { AdminFaq } from "@/lib/admin-data";

type PublishFilter = "all" | "published" | "unpublished";
type DraftFaq = { question: string; answer: string; published: boolean };

const NEW_ID = "__new__";
const emptyDraft: DraftFaq = { question: "", answer: "", published: true };

function FaqListItem({
  item,
  order,
  open,
  canDrag,
  editing,
  draft,
  pending,
  onToggle,
  onStartEdit,
  onCancelEdit,
  onDraftChange,
  onSave,
  onRemove,
}: {
  item: AdminFaq;
  order: number;
  open: boolean;
  canDrag: boolean;
  editing: boolean;
  draft: DraftFaq;
  pending: boolean;
  onToggle: () => void;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onDraftChange: (next: DraftFaq) => void;
  onSave: () => void;
  onRemove: () => void;
}) {
  const controls = useDragControls();
  const reduce = useReducedMotion();
  const isNew = item.id === NEW_ID;

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      drag={canDrag && !editing}
      layout={reduce ? undefined : "position"}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34, mass: 0.6 }}
      className={`rounded-3xl border bg-white shadow-sm ${editing ? "border-brand/40" : "border-slate-200"}`}
      whileDrag={reduce || !canDrag || editing ? undefined : { scale: 1.01, boxShadow: "0 16px 40px -24px rgba(15, 23, 42, 0.45)", zIndex: 20 }}
    >
      {editing ? (
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2">
            {canDrag ? (
              <span className="p-1.5 text-slate-200" aria-hidden>
                <GripVertical className="size-4" />
              </span>
            ) : null}
            <p className="min-w-0 flex-1 text-xs font-semibold text-brand">{isNew ? "새 FAQ" : String(order).padStart(2, "0")}</p>
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                aria-label="저장"
                disabled={pending}
                className="rounded-lg p-2 text-brand transition hover:bg-blue-50 disabled:opacity-50"
                onClick={onSave}
              >
                <Check className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="취소"
                disabled={pending}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-navy disabled:opacity-50"
                onClick={onCancelEdit}
              >
                <X className="size-4" aria-hidden />
              </button>
              {!isNew ? (
                <button
                  type="button"
                  aria-label={`${item.question} 삭제`}
                  disabled={pending}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
                  onClick={onRemove}
                >
                  <Trash2 className="size-4" aria-hidden />
                </button>
              ) : null}
            </div>
          </div>
          <div className="mt-3 space-y-3">
            <label className="block text-sm">
              <span className="font-medium text-navy">질문</span>
              <input
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2"
                value={draft.question}
                autoFocus
                onChange={(event) => onDraftChange({ ...draft, question: event.target.value })}
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-navy">답변</span>
              <textarea
                className="mt-1.5 min-h-28 w-full rounded-xl border border-slate-200 px-3 py-2"
                value={draft.answer}
                onChange={(event) => onDraftChange({ ...draft, answer: event.target.value })}
              />
            </label>
            <label className="flex items-center gap-2 text-sm text-navy">
              <input
                type="checkbox"
                checked={draft.published}
                onChange={(event) => onDraftChange({ ...draft, published: event.target.checked })}
              />
              공개
            </label>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-start gap-1 px-4 pt-4 sm:gap-2 sm:px-5 sm:pt-5">
            {canDrag ? (
              <button
                type="button"
                aria-label={`${item.question} 순서 변경`}
                className="mt-0.5 touch-none rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-50 hover:text-navy cursor-grab active:cursor-grabbing"
                onPointerDown={(event) => controls.start(event)}
              >
                <GripVertical className="size-4" aria-hidden />
              </button>
            ) : (
              <span className="mt-0.5 p-1.5 text-slate-200" aria-hidden>
                <GripVertical className="size-4" />
              </span>
            )}
            <button type="button" aria-expanded={open} onClick={onToggle} className="min-w-0 flex-1 text-left">
              <p className="text-xs font-semibold text-brand">
                {String(order).padStart(2, "0")} · {item.published ? "공개" : "비공개"}
              </p>
              <h2 className="mt-2 text-base font-semibold text-navy">{item.question}</h2>
            </button>
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                aria-label={`${item.question} 수정`}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-brand"
                onClick={onStartEdit}
              >
                <Pencil className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label={`${item.question} 삭제`}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                onClick={onRemove}
              >
                <Trash2 className="size-4" aria-hidden />
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pt-3 sm:px-5">
                  <p className="border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="flex justify-center px-4 pb-2 pt-1 sm:px-5">
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? `${item.question} 접기` : `${item.question} 펼치기`}
              onClick={onToggle}
              className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-slate-400 transition hover:bg-slate-50 hover:text-navy"
            >
              <ChevronDown className={`size-4 transition ${open ? "rotate-180" : ""}`} aria-hidden />
            </button>
          </div>
        </div>
      )}
    </Reorder.Item>
  );
}

function mergeSubsetOrder(all: AdminFaq[], nextVisible: AdminFaq[], publishedOnly: boolean) {
  const queue = [...nextVisible];
  return all.map((item) => (item.published === publishedOnly ? queue.shift()! : item));
}

export function FaqManager({ initialItems }: { initialItems: AdminFaq[] }) {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState<PublishFilter>("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<DraftFaq>(emptyDraft);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const publishedCount = items.filter((item) => item.published).length;
  const displayItems = useMemo(() => {
    const list =
      filter === "published"
        ? items.filter((item) => item.published)
        : filter === "unpublished"
          ? items.filter((item) => !item.published)
          : items;
    if (editingId === NEW_ID) {
      return [
        {
          id: NEW_ID,
          question: draft.question || "새 질문",
          answer: draft.answer,
          sortOrder: 0,
          published: draft.published,
        },
        ...list,
      ];
    }
    return list;
  }, [draft, editingId, filter, items]);

  const canDrag = filter === "published" && editingId !== NEW_ID;

  function startCreate() {
    setEditingId(NEW_ID);
    setDraft(emptyDraft);
    setMessage("");
  }

  function startEdit(item: AdminFaq) {
    setEditingId(item.id);
    setDraft({ question: item.question, answer: item.answer, published: item.published });
    setOpenIds((current) => (current.includes(item.id) ? current : [...current, item.id]));
    setMessage("");
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(emptyDraft);
  }

  function onReorder(next: AdminFaq[]) {
    if (editingId === NEW_ID) return;
    const previous = items;
    const nextItems = filter === "published" ? mergeSubsetOrder(items, next, true) : next;
    setItems(nextItems);
    const publishedIds = nextItems.filter((item) => item.published).map((item) => item.id);
    const unpublishedIds = nextItems.filter((item) => !item.published).map((item) => item.id);
    startTransition(async () => {
      try {
        setItems(await reorderFaqsAction([...publishedIds, ...unpublishedIds]));
        setMessage("순서를 저장했습니다.");
      } catch {
        setItems(previous);
        setMessage("순서 저장에 실패했습니다.");
      }
    });
  }

  function save() {
    if (!draft.question.trim() || !draft.answer.trim()) {
      setMessage("질문과 답을 입력해 주세요.");
      return;
    }
    startTransition(async () => {
      try {
        await saveFaqAction({
          id: editingId === NEW_ID ? undefined : editingId ?? undefined,
          question: draft.question.trim(),
          answer: draft.answer.trim(),
          published: draft.published,
        });
        setItems(await refreshFaqsAction());
        setMessage(editingId === NEW_ID ? "FAQ를 추가했습니다." : "FAQ를 저장했습니다.");
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
        await removeFaqAction(id);
        setMessage("FAQ를 삭제했습니다.");
      } catch {
        setItems(previous);
        setMessage("삭제에 실패했습니다.");
      }
    });
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-navy">자주 묻는 질문</h1>
        <p className="mt-2 text-sm text-slate-600">카드에서 바로 수정·저장합니다. 공개 목록에서 드래그해 순서를 바꿉니다.</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {(
          [
            ["all", "전체", items.length],
            ["published", "공개", publishedCount],
            ["unpublished", "비공개", items.length - publishedCount],
          ] as const
        ).map(([id, label, count]) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
              filter === id ? "bg-navy text-white" : "border border-slate-200 bg-white text-slate-600"
            }`}
          >
            {label}
            <span className="tabular-nums opacity-70">{count}</span>
          </button>
        ))}
        <button
          type="button"
          aria-label="FAQ 추가"
          disabled={editingId !== null}
          onClick={startCreate}
          className="ml-auto inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark disabled:opacity-40"
        >
          <Plus className="size-5" aria-hidden />
        </button>
      </div>

      {message ? <p className="mt-3 text-sm text-slate-500">{message}</p> : null}

      {displayItems.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center text-sm text-slate-500">
          등록된 FAQ가 없습니다. 필터 줄 오른쪽 + 버튼으로 추가해 주세요.
        </div>
      ) : (
        <Reorder.Group axis="y" values={displayItems} onReorder={onReorder} className="mt-6 flex flex-col gap-3" as="ul">
          {displayItems.map((item, index) => (
            <FaqListItem
              key={item.id}
              item={item}
              order={editingId === NEW_ID ? index : index + 1}
              open={openIds.includes(item.id) || editingId === item.id}
              canDrag={canDrag && !pending && item.id !== NEW_ID}
              editing={editingId === item.id}
              draft={draft}
              pending={pending}
              onToggle={() => setOpenIds((c) => (c.includes(item.id) ? c.filter((x) => x !== item.id) : [...c, item.id]))}
              onStartEdit={() => startEdit(item)}
              onCancelEdit={cancelEdit}
              onDraftChange={setDraft}
              onSave={save}
              onRemove={() => requestRemove(item.id)}
            />
          ))}
        </Reorder.Group>
      )}

      <ConfirmDialog
        open={deleteId !== null}
        title="FAQ 삭제"
        description="이 FAQ를 삭제할까요? 삭제하면 되돌릴 수 없습니다."
        pending={pending}
        onCancel={() => setDeleteId(null)}
        onConfirm={confirmRemove}
      />
    </div>
  );
}
