import { iIconTypes } from "../../Icon";

export interface ITabsV2 {
  items: string[];
  onSelect: (tabIndex: number) => void;
  selected: number;
  direction: "horizontal" | "vertical";
  isDesktop?: boolean;
  icon?: iIconTypes;
  iconItems?: iIconTypes[];
  strokeWidth?: number;
}
