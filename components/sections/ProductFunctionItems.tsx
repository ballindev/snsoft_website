export function ProductFunctionItems({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductFunctionGroup({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: string[];
}) {
  return (
    <li className="rounded-2xl border border-slate-200/80 bg-white p-5">
      <h3 className="text-base font-semibold tracking-tight text-navy">{title}</h3>
      {note ? <p className="mt-0.5 text-xs leading-5 text-slate-500">{note}</p> : null}
      <div className="mt-3 border-t border-slate-100 pt-3">
        <ProductFunctionItems items={items} />
      </div>
    </li>
  );
}
