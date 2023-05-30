import { iIconTypes } from "../../Icon";

export interface ITabsV3 {
  items: string[];
  onSelect: (tabIndex: number) => void;
  selected: number;
  direction: "horizontal" | "vertical";
  isDesktop?: boolean;
}
