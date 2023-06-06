import styled, { css } from "styled-components";
import { defaultCss } from "../../theme/defaultCss";
import theme from "../../theme/theme";
import {
  IBoxStyledRadio,
  ILabelStyledRadio,
  IMarkStyledRadio,
} from "./styled-radio-button.interface";

export const Container = styled.div`
  label {
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export const Label = styled.label<ILabelStyledRadio>`
  ${defaultCss};
  display: flex;
  align-items: center;
  position: relative;

  margin-bottom: ${({ gapOptions }) =>
    gapOptions ? `${gapOptions}px` : "2px"};

  p {
    margin: 0 !important;
  }

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;

  color: ${({ onColor }) =>
    onColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark};

  input:checked ~ span {
    background-color: ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.primaryMedium};
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.white : theme.colors.primaryMedium};
    outline: 4px solid transparent;
  }

  &:hover input:checked ~ span {
    background-color: ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.bgBrandBoldHovered};
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.white : theme.colors.bgBrandBoldHovered};
    outline: 4px solid ${() => theme.colors.borderDefault};
  }

  &:hover {
    span {
      background-color: ${() => theme.colors.primaryLightest};
      border: 1px solid
        ${({ onColor }) =>
          onColor ? theme.colors.white : theme.colors.borderFocused};
      outline: 4px solid ${() => theme.colors.borderDefault};
    }
  }

  &.disabled {
    color: ${({ onColor }) =>
      onColor ? theme.colors.primaryLight : "rgba(0, 0, 0, 0.6)"};

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
})<IBoxStyledRadio>`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<IMarkStyledRadio>`
  position: absolute;
  box-sizing: border-box;

  left: ${({ positionLeft }) => positionLeft};
  right: ${({ positionRight }) => positionRight};
  top: ${({ positionTop }) => positionTop};
  bottom: ${({ positionBottom }) => positionBottom};

  ${({ transformX, transformY }) => {
    if (transformX && !transformY) {
      return css`
        transform: ${transformX};
      `;
    } else if (!transformX && transformY) {
      return css`
        transform: ${transformY};
      `;
    } else if (transformX && transformY) {
      return css`
        transform: ${transformX} ${transformY};
      `;
    }
  }};

  height: ${({ lengthRadio }) => lengthRadio ?? '16px'};
  width: ${({ lengthRadio }) => lengthRadio ?? '16px'};

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;

  outline: 4px solid transparent;

  border: 1px solid
    ${({ onColor }) =>
      onColor ? theme.colors.white : theme.colors.borderInverse};

  &.disabled {
    border: 1px solid
      ${({ onColor }) =>
        onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${({ lengthMark }) => lengthMark ?? '6px'};
    width: ${({ lengthMark }) => lengthMark ?? '6px'};
    border-radius: 100%;
    background: ${({ onColor }) =>
      onColor ? theme.colors.bgBrandBoldHovered : theme.colors.white};
    box-sizing: border-box;
  }

  transition: all 0.3s;
`;
