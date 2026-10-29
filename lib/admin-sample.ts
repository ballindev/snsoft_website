import { mainNav } from "@/lib/site";

export type ScreenPageOption = {
  pageKey: string;
  label: string;
  group: string;
  section: "products" | "industries";
};

export function getScreenPageOptions(): ScreenPageOption[] {
  const options: ScreenPageOption[] = [];

  for (const item of mainNav) {
    if (item.id !== "products" && item.id !== "industries") continue;
    for (const group of item.groups) {
      for (const link of group.links) {
        if (!link.href.startsWith("/products/") && !link.href.startsWith("/industries/")) continue;
        options.push({
          pageKey: link.href.slice(1),
          label: link.label,
          group: group.title,
          section: item.id,
        });
      }
    }
  }

  return options;
}
