import React from "react";
import { PlacesType, Tooltip as ReactTooltip } from 'react-tooltip'

import { iTooltip, iTooltipPointerOrientation } from "../tooltip.interface";
import * as css from "./tooltip.styles";

export const TooltipV2: React.FC<iTooltip> = ({
  id,
  children,
  pointerOrientation = 'up',
  pointerPosition = "center",
  size = "SM",
  position = 'down',
  text,
  shadow,
  maxWidth
}) => {
  const props = {
    id,
    pointerOrientation,
    pointerPosition,
    position,
    size,
    shadow,
    text,
    maxWidth
  };

  const adaptedPosition: Record<iTooltipPointerOrientation, PlacesType> = {
    up: "top",
    down: "bottom",
    left: "left",
    right: "right"
  }

  return (
    <css.Container {...props}>
      <ReactTooltip anchorId={id} place={adaptedPosition[position]} />
      <span id={id} data-tooltip-content={text}>{ children }</span>
    </css.Container>
  );
};
