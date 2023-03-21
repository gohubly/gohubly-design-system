import styled, { css } from "styled-components";
import { defaultCss } from "../../theme/defaultCss";
import theme from "../../theme/theme";

import {
  ILabelCheckBox,
  IBoxCheckBox,
  IMarkCheckBox,
} from "./checkbox.interface";

export const Label = styled.label<ILabelCheckBox>`
  ${defaultCss};

  display: flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
  line-height: 16px;
  font-size: 14px;
  height: 100%;

  p {
    margin: 0px;
  }

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;

  color: ${({ onColor }) =>
    onColor ? theme.colors.neutralHigh : theme.colors.neutralLow};

  &:hover {
    color: ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.neutralLowDark};
  }

  &:hover .mark {
    background-color: ${() => theme.colors.primaryLightest};
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.white : theme.colors.neutralLow};
  }

  &:hover .mark,
  input:checked ~ span {
    ${({ onColor, checked, theme }) => {
      if (onColor) {
        return css`
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.colors.white};
        `;
      }

      if (checked) {
        return css`
          background-color: ${theme.colors.primaryMedium};
          border: 1px solid ${theme.colors.primaryMedium};
        `;
      }
    }};
  }

  &.disabled {
    color: ${({ onColor }) =>
      onColor ? theme.colors.primaryLight : "rgba(0, 0, 0, 0.6)"};

    path {
      stroke: ${({ onColor }) =>
        onColor
          ? theme.colors.primaryLight
          : theme.colors.neutralLowMedium}!important;
    }

    &:hover span,
    input:checked ~ span {
      background-color: ${({ onColor }) =>
        onColor ? "transparent" : theme.colors.neutralHighMedium};
      border: 1px solid
        ${({ onColor }) =>
          onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
      cursor: not-allowed;
    }
  }

  &:hover {
    div > span {
      background-color: inherit;
      border: none;
    }
  }
`;

export const Box = styled.input.attrs({
  type: "checkbox",
})<IBoxCheckBox>`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span {
    display: block;
  }
`;

export const Mark = styled.span<IMarkCheckBox>`
  div > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div > svg > path {
    stroke-width: 3;
  }

  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  height: 16px;
  width: 16px;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid
    ${({ onColor }) => (onColor ? theme.colors.white : theme.colors.neutralLow)};
  transition: 180ms ease-in-out;

  &.disabled {
    background-color: ${theme.colors.neutralHighMedium};
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.primaryLight : theme.colors.neutralHighDark};
  }
`;
