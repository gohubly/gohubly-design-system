import styled from "styled-components";
import { theme } from "../../theme";
import { defaultCss } from "../../theme/defaultCss";
import { IChip, IChipSizes } from "./chip.interface";

const FONT_SIZE_BY_SIZE: Record<IChipSizes, string> = {
  SM: "12px",
  MD: "14px",
  LG: "14px",
};

const LINE_HEIGHT_BY_SIZE: Record<IChipSizes, string> = {
  SM: "20px",
  MD: "24px",
  LG: "24px",
};

const PADDING_BY_SIZE: Record<IChipSizes, string> = {
  SM: "4.5px 16px",
  MD: "6.5px 20px",
  LG: "10.5px 24px",
};

export const Wrapper = styled.div<IChip>`
  ${defaultCss};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ size }) => PADDING_BY_SIZE[size || "MD"]};

  border: 1.5px solid
    ${({ selected }) =>
      selected ? theme.colors.primaryMedium : theme.colors.neutralHighMedium};
  border-radius: 32px;

  background-color: ${({ selected }) =>
    selected ? theme.colors.primaryLightest : "transparent"};

  transition: all 0.5s;

  &:hover {
    border-color: ${theme.colors.primaryMedium};
  }
`;

export const Label = styled.div<IChip>`
  ${defaultCss};

  color: ${({ selected }) =>
    selected ? theme.colors.primaryMedium : theme.colors.neutralLow};
  font-weight: 500;
  font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size || "MD"]};
  line-height: ${({ size }) => LINE_HEIGHT_BY_SIZE[size || "MD"]};
`;
