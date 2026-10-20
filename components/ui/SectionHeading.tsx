type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const inverted = tone === "inverted";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"}>
      <p className={`text-sm font-semibold ${inverted ? "text-sky-200" : "text-brand"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${inverted ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${inverted ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
