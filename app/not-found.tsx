import Link from "next/link";
import { primaryButtonClass } from "@/components/ui/buttons";

export default function NotFound() {
  return (
    <main id="main" className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-sm font-semibold text-brand">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy">페이지를 찾을 수 없습니다</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">주소가 바뀌었거나 아직 준비되지 않은 페이지입니다.</p>
        <Link href="/" className={`${primaryButtonClass} mt-8`}>
          홈으로 이동
        </Link>
      </div>
    </main>
  );
}
