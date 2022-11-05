import React from "react";

import { ISliderBar } from ".";
import { SliderBar as StyledSliderBar } from "./sliderbar.style";

export const SliderBar: React.FC<ISliderBar> = ({ children, ...props }) => {
  return <StyledSliderBar {...props}>{children}</StyledSliderBar>;
};
