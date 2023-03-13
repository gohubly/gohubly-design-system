export interface IAppTab {
  items: string[];
  onSelect: (tabIndex: number) => void;
  selected: number;
  isDesktop?: boolean;
}
