import { theme } from "../../../theme";

export type iTooltipSizes = "SM" | "LG";
export type iTooltipPointerOrientation = "left" | "right" | "up" | "down";
export type iTooltipPointerPosition = "left" | "center" | "right";

export interface iTooltip {
  id?: string;
  children: JSX.Element | React.ReactChild | any;
  text: JSX.Element | React.ReactChild | any;
  size?: iTooltipSizes;
  position?: iTooltipPointerOrientation;
  pointerPosition?: iTooltipPointerPosition;
  pointerOrientation: iTooltipPointerOrientation;
  shadow?: boolean;
  maxWidth?: string;
  noPadding?: boolean;
  color?: keyof typeof theme.colors & string;
  noPointer?: boolean;
}

export type iTooltipWithoutChildren = Omit<iTooltip, "children">;
