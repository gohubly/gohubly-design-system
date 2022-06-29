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
  number: "4px 4px 4px 12px",
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
  border: ${({ error, theme }) =>
    !error
      ? `1px solid ${theme.colors.neutralLowLight}`
      : `2px solid ${theme.colors.helper}`};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  cursor: default;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
    svg path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.neutralHighLight};
      color: ${theme.colors.neutralLowMedium};
      border-color: ${theme.colors.neutralLowLight};

      svg path {
        stroke: ${theme.colors.neutralLowMedium};
      }
    `}
`;

export const Placeholder = styled.span<{ fontSize: string }>`
  flex: 1;
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OpenIcon = styled(Icon)<{ opened: boolean }>`
  transform: rotate(${({ opened }) => (opened ? "-90deg" : "0")});

  svg path {
    stroke: ${({ theme, opened }) =>
      opened ? theme.colors.primary : theme.colors.neutralLowMedium};
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

  background: ${({ theme }) => theme.colors.neutralHigh};
  border: 1px solid ${({ theme }) => theme.colors.neutralLowLight};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08);

  animation: ${fadeInDown} 120ms ease-out forwards;
  transition: box-shadow 120ms ease-out, border-color 120ms ease-out;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
    border-color: ${({ theme }) => theme.colors.neutralHighLight};
  }
`;

export const Option = styled.div<{ fontSize: string }>`
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  word-break: break-word;

  border-radius: ${({ theme }) => theme.borderRadius.SM};

  :hover,
  :focus-visible {
    background: #f0f1f5;
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXXS};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.helper};
`;
