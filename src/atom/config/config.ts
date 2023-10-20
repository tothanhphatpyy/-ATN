import { atom } from "recoil";

export interface ConfigProps {
  version: string;
  navbarBreakPoint: string;
  topNavbarBreakpoint: string;
  isFluid: boolean;
  isRTL: boolean;
  isDark: string;
  navbarPosition: string;
  disabledNavbarPosition: string[];
  isNavbarVerticalCollapsed: boolean;
  navbarStyle: string;
  currency: string;
  showBurgerMenu: boolean;
  showSettingPanel: boolean;
  navbarCollapsed: boolean;
}

export const configAtom = atom<ConfigProps>({
  key: "CONFIG", // unique ID (with respect to other atoms/selectors)
  default: {
    version: "4.2.0",
    navbarBreakPoint: "xl", // Vertical navbar breakpoint
    topNavbarBreakpoint: "lg",
    isFluid: true,
    isRTL: false,
    isDark: JSON.parse(localStorage.getItem("isDark") as string) ?? false,
    navbarPosition: "vertical",
    disabledNavbarPosition: [],
    isNavbarVerticalCollapsed: false,
    navbarStyle: "transparent",
    currency: "$",
    showBurgerMenu: false,
    showSettingPanel: false,
    navbarCollapsed: false
  },
});
