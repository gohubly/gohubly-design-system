import { theme } from "../../theme";
export type IModalPositions = "up" | "right" | "down" | "left";

export interface IModal {
  show: boolean;
  toggleModal: any;
  title?: string;
  fontSizeTitle?: keyof typeof theme.fontSize;
  showCloseIcon?: boolean;
  scrollable?: boolean;
  width?: string;
  minHeight?: string;
  backdropPosition?: {
    width?: string;
    left?: string;
  };
  isDesktop?: boolean;
  position?: IModalPositions;
  children: JSX.Element | React.ReactChild | any;
}
