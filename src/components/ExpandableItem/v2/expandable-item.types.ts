import { iAvatar } from "../../Avatar";
import { iButton } from "../../Button";

export interface iExpandableItem {
  title: string;
  minWidth?: string;
  itemRight: JSX.Element;
  containerLeftMaxWidth?: string;
  data: iExpandableItemRow[];
  expanded?: boolean;
  onItemClick?: () => void;
  onExpandClick: () => void;
  buttonsProps?: iButton[];
  children?: JSX.Element | React.ReactChild | any;
  avatar?: boolean;
}

export interface iExpandableItemRow {
  label: string | JSX.Element;
  value: string | JSX.Element;
}
