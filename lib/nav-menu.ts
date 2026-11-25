import { CONSULTATION_HREF, REMOTE_SUPPORT_HREF, mainNav, type NavItem } from "@/lib/site";

export type NavMenuEntry = {
  href: string;
  label: string;
  section: string;
};

export function listNavMenuEntries(): NavMenuEntry[] {
  const entries: NavMenuEntry[] = [];

  for (const item of mainNav) {
    for (const group of item.groups) {
      for (const link of group.links) {
        entries.push({
          href: link.href,
          label: link.label,
          section: item.label,
        });
      }
    }
  }

  entries.push({
    href: REMOTE_SUPPORT_HREF,
    label: "원격지원 연결",
    section: "고객지원",
  });

  return entries;
}

export function filterMainNav(nav: NavItem[], hiddenHrefs: Set<string>): NavItem[] {
  return nav
    .map((item) => ({
      ...item,
      groups: item.groups
        .map((group) => ({
          ...group,
          links: group.links.filter((link) => !hiddenHrefs.has(link.href)),
        }))
        .filter((group) => group.links.length > 0),
    }))
    .filter((item) => item.groups.length > 0);
}

export function isConsultationVisible(hiddenHrefs: Set<string>) {
  return !hiddenHrefs.has(CONSULTATION_HREF);
}

export function isRemoteSupportVisible(hiddenHrefs: Set<string>) {
  return !hiddenHrefs.has(REMOTE_SUPPORT_HREF);
}
