export interface iTabs {
  items: string[];
  onSelect: (tabIndex: number) => void;
  selected: number;
  direction: "horizontal" | "vertical";
  isDesktop?: boolean;
}
