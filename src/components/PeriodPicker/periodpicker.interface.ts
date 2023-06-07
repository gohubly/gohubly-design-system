import moment from "moment";
import React from "react";
import { iButtonSizes } from "../Button";

export interface IPeriodPicker {
  width?: string;
  period: iPeriod;
  count?: 1 | 2 | 3;
  limit?: DateLimit;
  onChange: (newPeriod: iPeriod) => void;
  containerRef?: React.Ref<HTMLDivElement>;
  onReset?: () => void;

  isMobile?: boolean;

  oneDateOnly?: boolean;

  shapeSelected?: IShapeSelected;

  paddingButtonContainer?: string;
  sizeButtons?: iButtonSizes;
  positionButtons?: IPositionButtons;
  fluidButton?: boolean;
}

export type IShapeSelected = "square" | "round";
export type IPositionButtons = "left" | "center" | "right";

export type iPeriod = {
  initialDate?: moment.Moment;
  finalDate?: moment.Moment;
};

export type iCalendar = {
  days: moment.Moment[];
}[];

export type BlockType = "after";

export type DateLimit = {
  endDate?: Date;
};
