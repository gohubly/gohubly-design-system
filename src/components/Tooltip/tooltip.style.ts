import styled from "styled-components";
import { theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";
import {
  iTooltip,
  iTooltipWithoutChildren,
  iTooltipPointerOrientation,
  iTooltipPointerPosition,
  iTooltipSizes,
} from "./tooltip.interface";

const PADDING_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "6px 12px",
  LG: "8px 16px",
};

const FONT_SIZE_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "11px",
  LG: "12px",
};

const LINE_HEIGHT_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "16px",
  LG: "20px",
};

const WRAPPER_POSITION_BY_POSITION: Record<
  iTooltipPointerOrientation,
  Record<iTooltipSizes, string>
> = {
  up: {
    SM: "bottom: 102%; left: 0px;",
    LG: "bottom: 102%; left: 0px;",
  },
  down: {
    SM: "top: 102%; left: 0px;",
    LG: "top: 102%; left: 0px;",
  },
  left: {
    SM: "right: 102%; top: 15%;",
    LG: "right: 102%; top: 15%;",
  },
  right: {
    SM: "left: 102%; top: 15%;",
    LG: "left: 102%; top: 15%;",
  },
};

const POINTER_SIZE_BY_SIZE = {
  SM: "6px",
  LG: "8px",
};

const POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_SM: Record<
  iTooltipPointerOrientation,
  Record<iTooltipPointerPosition, string>
> = {
  up: {
    left: `top: -9px; left: 5px; transform: rotate(45deg)`,
    center: `top: -9px; left: 50%; transform: translateX(-50%) rotate(45deg)`,
    right: `top: -9px; right: 8px; transform: rotate(45deg)`,
  },
  right: {
    left: `right: -15px; top: 8px; transform: rotate(45deg)`,
    center: `right: -13px; top: 45%; transform: rotate(45deg) translateY(-50%);`,
    right: `right: -15px; bottom: 8px; transform: rotate(45deg)`,
  },
  down: {
    left: `bottom: -9px; left: 4px; transform: rotate(45deg)`,
    center: `bottom: -11px; left: 50%; transform: rotate(45deg) translateX(-50%);`,
    right: `bottom: -9px; right: 4px; transform: rotate(45deg)`,
  },
  left: {
    left: `left: -15px; top: 8px; transform: rotate(45deg)`,
    center: `left: -17.5px; top: 45%; transform: rotate(45deg) translateY(-50%);`,
    right: `left: -15px; bottom: 8px; transform: rotate(45deg)`,
  },
};

const POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_LG: Record<
  iTooltipPointerOrientation,
  Record<iTooltipPointerPosition, string>
> = {
  up: {
    left: `top: -12px; transform: rotate(45deg)`,
    center: `top: -12px; left: 50%; transform: translateX(-50%) rotate(45deg)`,
    right: `top: -12px; right: 4px; transform: rotate(45deg)`,
  },
  right: {
    left: `right: -20px; top: 1px; transform: rotate(45deg)`,
    center: `right: -17px; top: 45%; transform: rotate(45deg) translateY(-50%);`,
    right: `right: -20px; bottom: 1px; transform: rotate(45deg)`,
  },
  down: {
    left: `bottom: -12px; transform: rotate(45deg)`,
    center: `bottom: -15px; left: 50%; transform: rotate(45deg) translateX(-50%);`,
    right: `bottom: -12px; right: 4px; transform: rotate(45deg)`,
  },
  left: {
    left: `left: -20px; top: 1px; transform: rotate(45deg)`,
    center: `left: -23px; top: 45%; transform: rotate(45deg) translateY(-50%);`,
    right: `left: -20px; bottom: 1px; transform: rotate(45deg)`,
  },
};

export const Container = styled.div<{ padding?: string }>`
  ${defaultCss};
  position: relative;
  padding: ${({ padding }) => padding ?? "10px"};

  &:hover > div + div {
     {
      display: block;
      user-select: all;
      z-index: 3;
    }
  }
`;

export const ContainerInfo = styled.div`
  ${defaultCss};

  position: relative;
  cursor: pointer;

  &:hover + div {
     {
      display: block;
      user-select: all;
      z-index: 2;
    }
  }
`;

export const Wrapper = styled.div<iTooltip>`
  position: absolute;
  
  max-width: ${({ maxWidth }) => maxWidth ?? "max-content"};
  width: max-content;

  box-sizing: border-box;

  ${({ position, size }) =>
    WRAPPER_POSITION_BY_POSITION[position as iTooltipPointerOrientation][
      size as iTooltipSizes
    ]}

  background: ${() => theme.colors.neutralLowDark};
  padding: ${({ size }) => PADDING_BY_SIZE[size as iTooltipSizes]};

  display: none;
  user-select: none;

  border-radius: 5px;
  box-shadow: ${({ shadow }) => (shadow ? theme.shadow.Level2 : "")};

  span {
    font-weight: 500;
    font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size as iTooltipSizes]};
    line-height: ${({ size }) => LINE_HEIGHT_BY_SIZE[size as iTooltipSizes]};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

    color: ${() => theme.colors.neutralHigh};
  }

  transition: opacity 0.1s linear;
`;

export const Pointer = styled.div<iTooltipWithoutChildren>`
  position: absolute;

  width: ${({ size }) => POINTER_SIZE_BY_SIZE[size as iTooltipSizes]};
  height: ${({ size }) => POINTER_SIZE_BY_SIZE[size as iTooltipSizes]};

  ${({ pointerOrientation, pointerPosition, size }) =>
    size === "LG"
      ? POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_LG[
          pointerOrientation as iTooltipPointerOrientation
        ][pointerPosition as iTooltipPointerPosition]
      : POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_SM[
          pointerOrientation as iTooltipPointerOrientation
        ][pointerPosition as iTooltipPointerPosition]};

  background: ${() => theme.colors.neutralLowDark};
  border-radius: 1px;
`;
