import React from "react";
import { IChip } from ".";
import { Label, Wrapper } from "./chip.style";

export const Chip: React.FC<IChip> = ({ selected, children, size }) => {
  return (
    <Wrapper selected={selected} size={size}>
      <Label selected={selected} size={size}>
        {children}
      </Label>
    </Wrapper>
  );
};
