import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  resolution: string;
  className?: string;
};

export function ImagePlaceholder({ label, resolution, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-100 px-6 text-center ${className}`}
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
        <ImageIcon className="size-5" aria-hidden />
      </span>
      <p className="max-w-md text-sm leading-6 text-slate-700">[{label} - {resolution}]</p>
    </div>
  );
}
