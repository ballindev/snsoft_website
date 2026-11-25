import { getHiddenNavHrefs } from "@/lib/admin-data";
import {
  filterMainNav,
  isConsultationVisible,
  isRemoteSupportVisible,
} from "@/lib/nav-menu";
import { mainNav, type NavItem } from "@/lib/site";

export type PublicNavChrome = {
  nav: NavItem[];
  showRemoteSupport: boolean;
  showConsultationCta: boolean;
};

export async function getPublicNavChrome(): Promise<PublicNavChrome> {
  try {
    const hidden = new Set(await getHiddenNavHrefs());
    return {
      nav: filterMainNav(mainNav, hidden),
      showRemoteSupport: isRemoteSupportVisible(hidden),
      showConsultationCta: isConsultationVisible(hidden),
    };
  } catch {
    return {
      nav: mainNav,
      showRemoteSupport: true,
      showConsultationCta: true,
    };
  }
}
