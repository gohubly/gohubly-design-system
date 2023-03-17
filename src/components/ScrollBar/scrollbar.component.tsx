import React from "react";
import { IScrollBar } from ".";
import { ScrollBar as StyledScrollBar } from "./scrollbar.style";

export const ScrollBar: React.FC<IScrollBar> = ({ children, ...props }) => {
  return <StyledScrollBar {...props}>{children}</StyledScrollBar>;
};
