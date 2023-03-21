import styled from "styled-components";
import { iTooltip, iTooltipSizes } from "../tooltip.interface";

const PADDING_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "6px 12px",
  LG: "8px 16px",
};

const FONT_SIZE_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "11px",
  LG: "12px",
};

export const Container = styled.div<iTooltip>`
  .react-tooltip {
    width: max-content;
    max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
    box-sizing: border-box;
    
    font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size as iTooltipSizes]};
    padding: ${({ size }) => PADDING_BY_SIZE[size as iTooltipSizes]};
    
    border-radius: 4px !important;
    background: ${({ theme }) => theme.colors.neutralLowDark} !important;
    color: ${({ theme }) => theme.colors.neutralHigh};

    z-indez: 3;
  }
`;
