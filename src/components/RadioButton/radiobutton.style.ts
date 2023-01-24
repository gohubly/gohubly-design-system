import styled from "styled-components";
import { defaultCss } from "../../theme/defaultCss";
import theme from "../../theme/theme";

import { ILabelRadio, IBoxRadio, IMarkRadio } from "./radiobutton.interface";

export const Label = styled.label<ILabelRadio>`
  ${defaultCss};
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 24px;

  padding-top: 2px;
  padding-bottom: 2px;

  p {
    margin: 0!important;
  }

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;

  color: ${({ onColor }) =>
    onColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark};

  &:hover {
    color: ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.neutralLowDark};
  }

  &:hover span,
  input:checked ~ span {
    background-color: ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.primaryMedium};
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.white : theme.colors.primaryMedium};
  }

  &:hover {
    span {
      background-color: ${() => theme.colors.primaryLightest};
      border: 1px solid
        ${({ onColor }) =>
          onColor ? theme.colors.white : theme.colors.neutralLowDark};
    }
  }

  &.disabled {
    color: ${({ onColor }) =>
      onColor ? theme.colors.primaryLight : 'rgba(0, 0, 0, 0.6)'};

    span {
      background-color: ${({ onColor }) =>
        onColor ? "transparent" : theme.colors.neutralHighMedium};
      border: 1px solid
        ${({ onColor }) =>
          onColor ? theme.colors.primaryLight : theme.colors.neutralHighDark};
      cursor: not-allowed;
    }
  }
`;

export const Box = styled.input.attrs({
  type: "radio",
})<IBoxRadio>`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<IMarkRadio>`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid
    ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.neutralLowDark};

  &.disabled {
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
  }

  transition: 180ms ease-in-out;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: ${({ onColor }) =>
      onColor ? theme.colors.primaryMedium : theme.colors.white};
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.white : theme.colors.primaryMedium};
    box-sizing: border-box;
  }
`;

export const Spacer = styled.div`
  margin-bottom: 10px;
`;
