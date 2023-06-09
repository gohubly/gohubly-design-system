import styled, { css, keyframes } from "styled-components";
import { Icon } from "../..";
import { ISelectV3Types } from "./selectV3.interface";
import { theme } from "../../../theme";

const fadeInDown = keyframes`
  from {
		opacity: 0;
		transform: translate3d(0, -16px, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 8px, 0);
	}
`;

const PADDING_BY_TYPE: Record<ISelectV3Types, string> = {
  text: "12px",
  number: "4px 4px 4px 10px",
};

const GAP_BY_SIZE: Record<ISelectV3Types, string> = {
  text: "16px",
  number: "2px",
};

const MIN_WIDTH_BY_SIZE: Record<ISelectV3Types, string> = {
  text: "150px",
  number: "64px",
};

const MIN_HEIGHT_BY_SIZE: Record<ISelectV3Types, string> = {
  text: "32px",
  number: "32px",
};

const PADDING_OPTIONS_BY_SIZE: Record<ISelectV3Types, string> = {
  text: "12px 12px",
  number: "10px 8px",
};

export const Wrapper = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width ?? "256px"};
`;

export const SelectStyled = styled.div<{
  disabled?: boolean;
  error?: boolean;
  opened?: boolean;
  width?: string;
  height?: string;
  type?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width ?? "256px"};
  min-width: ${({ type }) => MIN_WIDTH_BY_SIZE[type as ISelectV3Types]};
  height: ${({ height }) => height ?? "48px"};
  min-height: ${({ type }) => MIN_HEIGHT_BY_SIZE[type as ISelectV3Types]};
  gap: ${({ type }) => GAP_BY_SIZE[type as ISelectV3Types]};
  padding: ${({ type }) => PADDING_BY_TYPE[type as ISelectV3Types]};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ opened, theme }) =>
    opened
      ? `1px solid ${theme.colors.primaryMedium}`
      : `1px solid ${theme.colors.neutralLowLight}`};

  border: 1px solid rgba(20, 33, 89, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    // border: 1px solid ${({ theme }) => theme.colors.primaryMedium};
    background: ${theme.colors.bgInputHovered};
    outline: none;

    svg,
    path {
      stroke: ${({ theme }) => theme.colors.neutralLowMedium};
      stroke-width: 1.5;
    }
  }

  svg,
  path {
    stroke: ${({ theme }) => theme.colors.neutralLowMedium};
    stroke-width: 1.5;
    fill: transparent;
  }

  &:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.primaryMedium};
  }

  &:focus-visible {
    outline-width: none;
  }

  ${({ error, theme }) => {
    if (error) {
      return css`
      border:  1px solid ${theme.colors.helper}};
      `;
    }
  }};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      &:hover {
        border-color: ${theme.colors.neutralLowLight};
        outline: none;

        background: ${theme.colors.neutralHighLight};

        svg,
        path {
          stroke: ${theme.colors.neutralLowMedium};
        }
      }

      border: 1px solid rgba(20, 33, 89, 0.15);
      cursor: not-allowed !important;

      background: ${theme.colors.bgDisabledDefault};

      svg,
      path {
        stroke: ${theme.colors.neutralLowMedium};
        fill: transparent;
      }
    `}
`;

export const Placeholder = styled.span<{ fontSize?: string }>`
  display: flex;
  flex: 1;
  height: max-content;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XXS"]};
`;

export const OpenIcon = styled(Icon)<{ opened: boolean; disabled?: boolean }>`
  svg path {
    stroke: ${({ theme, opened }) =>
      opened ? theme.colors.neutralLowMedium : theme.colors.neutralLowMedium};

    ${({ disabled, theme }) => {
      if (disabled) {
        return css`
          stroke: ${theme.colors.neutralLowMedium};

          &:hover {
            stroke: ${theme.colors.neutralLowMedium};
          }
        `;
      }
    }};
  }

  margin: ${({ opened }) => (opened ? "0 0 1px 0" : "1px 0 0 0")};

  transition: transform 0.3s ease;
`;

export const Options = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 280px;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${theme.colors.borderDefault};
  box-sizing: border-box;
  border-radius: 5px;

  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));

  animation: ${fadeInDown} 120ms ease-out forwards;
  transition: box-shadow 120ms ease-out, border-color 120ms ease-out;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.neutralHighLight};

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.neutralHighLight};
      border-radius: 20px;
      border: 3px solid #fff;
    }
  }
`;

export const Option = styled.div<{
  fontSize?: string;
  type: string;
  itemSelect: boolean;
  heightOptions?: string;
}>`
  height: ${({ heightOptions }) => heightOptions ?? "48px"};
  display: flex;
  align-items: center;
  padding: ${({ type }) => PADDING_OPTIONS_BY_SIZE[type as ISelectV3Types]};
  word-break: break-word;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.colors.borderDefault};

  &:focus-visible {
    outline-width: none;
  }

  &:hover,
  &:focus-visible {
    span {
      background: ${theme.colors.bgInputHovered};
      outline: none;
      border: none;
    }

    background: ${theme.colors.bgInputHovered};
    outline: none;
  }
`;

export const HelperText = styled.div<{ hasError?: boolean }>`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.XXXS};
  line-height: 16px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.helper : theme.colors.neutralLow};
`;
