import { iAvatar } from "../../Avatar";
import { iButton } from "../../Button";

export interface iExpandableItem {
  title?: string | number | JSX.Element;
  minWidth?: string;
  itemRight:  string | number | JSX.Element;
  containerLeftMaxWidth?: string;
  data: iExpandableItemRow[];
  expanded?: boolean;
  onItemClick?: () => void;
  onExpandClick: () => void;
  buttonsProps?: iButton[];
  children?: string | number | JSX.Element;
  avatar?: boolean;
}

export interface iExpandableItemRow {
  label: string | JSX.Element;
  value: string | JSX.Element;
}
