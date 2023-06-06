import { theme } from "../../theme";
export type IModalPositions = "top" | "right" | "bottom" | "left";

export type HeaderSpacing = "XS" | "SM" | "MD" | "LG" | "Desktop";

export type ITitlePositions = "left" | "center" | "right";

export interface IModal {
  show: boolean;
  toggleModal: any;
  title?: string;
  fontSizeTitle?: keyof typeof theme.fontSize;
  fontWeightTitle?: keyof typeof theme.fontWeight;
  lineHeightTitle?: keyof typeof theme.lineHeight;
  positionTitle?: ITitlePositions;
  lineTitle?: boolean;
  titleColor?: keyof typeof theme.colors;
  padding?: HeaderSpacing;
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
  modalRef?: React.Ref<HTMLDivElement>,
}
