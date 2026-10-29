"use client";

export function ScreenImageFrame({
  imageUrl,
  emptyLabel = "이미지 없음",
}: {
  imageUrl: string | null | undefined;
  emptyLabel?: string;
}) {
  const url = imageUrl?.trim() || "";

  return (
    <div className="relative flex aspect-square w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500 sm:w-40">
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" className="absolute inset-0 size-full object-cover" />
      ) : (
        <span className="px-3 text-center">{emptyLabel}</span>
      )}
    </div>
  );
}
