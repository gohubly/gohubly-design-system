import styled, { css, keyframes } from "styled-components";
import { Icon } from "..";
import { iSelectTypes } from ".";

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

export const Wrapper = styled.div`
  position: relative;
`;

const PADDING_BY_SIZE: Record<iSelectTypes, string> = {
  text: "0px 16px",
  number: "4px 4px 4px 10px",
};

const GAP_BY_SIZE: Record<iSelectTypes, string> = {
  text: "16px",
  number: "2px",
};

const MIN_WIDTH_BY_SIZE: Record<iSelectTypes, string> = {
  text: "150px",
  number: "64px",
};

const MIN_HEIGHT_BY_SIZE: Record<iSelectTypes, string> = {
  text: "32px",
  number: "32px",
};

const PADDING_OPTIONS_BY_SIZE: Record<iSelectTypes, string> = {
  text: "12px 16px",
  number: "10px 8px",
};

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

  width: ${({ width }) => width ?? "256px"};
  min-width: ${({ type }) => MIN_WIDTH_BY_SIZE[type as iSelectTypes]};
  height: ${({ height }) => height ?? "48px"};
  min-height: ${({ type }) => MIN_HEIGHT_BY_SIZE[type as iSelectTypes]};
  gap: ${({ type }) => GAP_BY_SIZE[type as iSelectTypes]};
  padding: ${({ type }) => PADDING_BY_SIZE[type as iSelectTypes]};

  background: ${({ theme }) => theme.colors.white};
  border: ${({ opened, theme }) =>
    opened
      ? `2px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.neutralLowLight}`};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  svg, path {
    stroke: ${({ theme }) => theme.colors.primary};
    fill: transparent;
  }

  ${({ error, theme }) => {
    if (error) {
      return css`
      border:  2px solid ${theme.colors.helper}};
      `;
    }
  }};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.neutralHighLight};
      color: ${theme.colors.neutralLowMedium};
      border-color: ${theme.colors.neutralLowLight};
      cursor: not-allowed;

      &:hover {
        border-color: ${theme.colors.neutralLowLight};
        outline: none;

        svg,
        path {
          stroke: ${theme.colors.neutralLowMedium};
        }
      }

      svg,
      path {
        stroke: ${theme.colors.neutralLowMedium};
        fill: transparent;
      }
    `}
`;

export const Placeholder = styled.span<{ fontSize?: string }>`
  flex: 1;
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
`;

export const OpenIcon = styled(Icon)<{ opened: boolean; disabled?: boolean }>`
  svg path {
    stroke: ${({ theme }) => theme.colors.primary};

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

  transition: transform 0.3s ease;
`;

export const Options = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  max-height: 280px;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.neutralHigh};
  border: 1px solid ${({ theme }) => theme.colors.neutralLowLight};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08);

  animation: ${fadeInDown} 120ms ease-out forwards;
  transition: box-shadow 120ms ease-out, border-color 120ms ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
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
}>`
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
  display: flex;
  align-items: center;
  padding: ${({ type }) => PADDING_OPTIONS_BY_SIZE[type as iSelectTypes]};
  word-break: break-word;
  box-sizing: border-box;

  border-radius: ${({ theme }) => theme.borderRadius.SM};

  color: ${({ theme, itemSelect }) =>
    itemSelect ? theme.colors.primary : "inherit"};
  background: ${({ itemSelect }) => (itemSelect ? "#F1F2F9" : "inherit")};

  :hover,
  :focus-visible {
    background: #f1f2f9;
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXXS};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.helper};
`;
