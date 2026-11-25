export default function AdminMenusLoading() {
  return (
    <div>
      <div className="h-8 w-40 animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-slate-100" />
      <div className="mt-8 space-y-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-40 animate-pulse rounded-3xl border border-slate-200 bg-white" />
        ))}
      </div>
    </div>
  );
}
