import styled, { css } from "styled-components";
import { theme } from "../../..";
import { defaultCss } from "../../../theme/defaultCss";
import {
  iTooltip,
  iTooltipWithoutChildren,
  iTooltipPointerOrientation,
  iTooltipPointerPosition,
  iTooltipSizes,
} from "./tooltip-v3.interface";

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

const POINTER_SIZE_BY_SIZE = {
  SM: "6px",
  LG: "8px",
};

const WRAPPER_POSITION_BY_POSITION: Record<
  iTooltipPointerOrientation,
  Record<iTooltipSizes, string>
> = {
  up: {
    SM: "transform: translateX(-50%); bottom: 110%; left: 50%;",
    LG: "transform: translateX(-50%); bottom: 110%; left: 50%;",
  },
  down: {
    SM: "transform: translateX(-50%); top: 110%; left: 50%;",
    LG: "transform: translateX(-50%); top: 110%; left: 50%;",
  },
  left: {
    SM: "transform: translateY(-50%); left: 105%; top: 50%;",
    LG: "transform: translateY(-50%); left: 105%; top: 50%;",
  },
  right: {
    SM: "transform: translateY(-50%); right: 105%; top: 50%;",
    LG: "transform: translateY(-50%); right: 105%; top: 50%;",
  },
};

const WRAPPER_POSITION_BY_POSITION_WIDTHOU_PADDING: Record<
  iTooltipPointerOrientation,
  Record<iTooltipSizes, string>
> = {
  up: {
    SM: "transform: translateX(-50%); bottom: 170%; left: 50%;",
    LG: "transform: translateX(-50%); bottom: 170%; left: 50%;",
  },
  down: {
    SM: "transform: translateX(-50%); top: 170%; left: 50%;",
    LG: "transform: translateX(-50%); top: 170%; left: 50%;",
  },
  left: {
    SM: "transform: translateY(-50%); left: 110%; top: 50%;",
    LG: "transform: translateY(-50%); left: 110%; top: 50%;",
  },
  right: {
    SM: "transform: translateY(-50%); right: 110%; top: 50%;",
    LG: "transform: translateY(-50%); right: 110%; top: 50%;",
  },
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

export const Container = styled.div<{ noPadding?: boolean }>`
  ${defaultCss};
  position: relative;
  padding: ${({ noPadding }) => (noPadding ? "0px" : "10px")};

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
      z-index: 3;
    }
  }
`;

export const Wrapper = styled.div<iTooltip>`
  position: absolute;

  max-width: ${({ maxWidth }) => maxWidth ?? "max-content"};
  width: max-content;

  box-sizing: border-box;

  ${({ position, size, noPadding }) =>
    !noPadding
      ? WRAPPER_POSITION_BY_POSITION[position as iTooltipPointerOrientation][
          size as iTooltipSizes
        ]
      : WRAPPER_POSITION_BY_POSITION_WIDTHOU_PADDING[
          position as iTooltipPointerOrientation
        ][size as iTooltipSizes]}

  background: ${({ color }) =>
    color ? theme.colors[color] : theme.colors.neutralLowDark};
  padding: ${({ size }) => PADDING_BY_SIZE[size as iTooltipSizes]};

  display: none;
  user-select: none;

  border-radius: 5px;
  box-shadow: ${({ shadow }) => (shadow ? theme.shadow.Level1 : "")};

  p {
    margin: 0;
    font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size as iTooltipSizes]};
    line-height: ${({ size }) => LINE_HEIGHT_BY_SIZE[size as iTooltipSizes]};
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  background: ${({ color }) =>
    color ? theme.colors[color] : theme.colors.neutralLowDark};
  border-radius: 1px;

  ${({ noPointer }) =>
    noPointer &&
    css`
      display: none;
    `}
`;