import styled, { css } from "styled-components";
import { themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";
import { IMaxCharactersPositionTA, ITextArea } from "./textarea.interface";

const fontFamilyBasedOnWeight: Record<
  keyof typeof theme.fontWeight,
  "InterLight" | "InterRegular" | "InterMedium" | "InterSemiBold" | "InterBold"
> = {
  300: "InterLight",
  400: "InterRegular",
  500: "InterMedium",
  600: "InterSemiBold",
  900: "InterBold",
};

export const LabelText = styled.span<ITextArea>`
  ${defaultCss};
  letter-spacing: -0.005em;
  font-family: ${({ labelFontWeight }) =>
    fontFamilyBasedOnWeight[labelFontWeight || "400"]} !important;

  font-size: ${({ labelFontSize }) => theme.fontSize[labelFontSize || "14"]};
  line-height: ${({ labelLineHeight }) =>
    theme.lineHeight[labelLineHeight || "16"]};

  color: ${({ OnColor }) =>
    OnColor ? theme.colors.neutralHigh : theme.colors.neutralLow};

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(16, 16, 16, 0.7);
    `}
`;

export const HelperText = styled.span<ITextArea>`
  ${defaultCss};
  font-size: ${({ helperTextFontSize }) =>
    theme.fontSize[helperTextFontSize || "12"]};
  line-height: ${({ helperTextLineHeight }) =>
    theme.lineHeight[helperTextLineHeight || "12"]};

  font-family: ${({ fontWeight }) =>
    fontFamilyBasedOnWeight[fontWeight || "400"]} !important;

  color: ${({ OnColor, onClick }) =>
    onClick
      ? theme.colors.primaryMedium
      : OnColor
      ? theme.colors.primaryLight
      : theme.colors.neutralLowMedium};

  &[data-has-error="true"] {
    color: ${() => theme.colors.helper};
  }

  &:hover {
    text-decoration: ${({ onClick }) => (onClick ? "underline" : "none")};
    text-underline-position: ${({ onClick }) => (onClick ? "under" : "none")};
  }

  text-decoration: none;

  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(16, 16, 16, 0.7);
    `}
`;

export const Label = styled.label<ITextArea>`
  ${defaultCss};

  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ gapLabel }) => gapLabel ?? "12px"};

  width: ${({ fluid }) => (fluid ? "100%" : "auto")};
`;

export const LinkText = styled.span<ITextArea>`
  ${defaultCss};
  font-size: ${({ linkFontSize }) => theme.fontSize[linkFontSize || "14"]};

  line-height: ${({ linkLineHeight }) =>
    theme.lineHeight[linkLineHeight || "16"]};

  font-family: ${({ fontWeight }) =>
    fontFamilyBasedOnWeight[fontWeight || "400"]} !important;

  color: ${({ OnColor, onClick }) =>
    onClick
      ? theme.colors.primaryMedium
      : OnColor
      ? theme.colors.primaryLight
      : theme.colors.neutralLowMedium};

  &:hover {
    text-decoration: ${({ onClick }) => (onClick ? "underline" : "none")};
    text-underline-position: ${({ onClick }) => (onClick ? "under" : "none")};
  }

  text-decoration: none;

  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
`;

export const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTextarea = styled.textarea<{
  fluid?: boolean;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  textAreaHeight?: string;
  backgroundTextArea?: string;
}>`
  width: ${({ fluid }) => (fluid ? "100%" : "auto")};
  height: ${({ textAreaHeight }) => textAreaHeight ?? "auto"};

  padding: 10px 16px;
  border: 1px solid rgba(20, 33, 89, 0.3);
  border-radius: 4px;
  box-sizing: border-box;

  color: ${() => theme.colors.neutralLowLight};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize || "16"]};
  line-height: ${({ lineHeight }) => theme.lineHeight[lineHeight || "24"]};

  font-family: ${({ fontWeight }) =>
    fontFamilyBasedOnWeight[fontWeight || "400"]} !important;

  background-color: ${({ backgroundTextArea, theme }) =>
    backgroundTextArea ? theme.colors[backgroundTextArea] : theme.colors.white};

  &::placeholder {
    color: ${() => theme.colors.neutralLowLight};
    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
    line-height: ${({ lineHeight, theme }) =>
      theme.lineHeight[lineHeight || "24"]};

    font-family: ${({ fontWeight }) =>
      fontFamilyBasedOnWeight[fontWeight || "400"]} !important;
  }

  &:focus {
    border: 1.5px solid ${() => theme.colors.primaryMedium};
    cursor: text;
  }

  &:focus-visible {
    outline-width: inherit;
  }
`;

export const CharCount = styled.span<{
  hasError?: boolean;
  fontWeight?: number;
  position?: IMaxCharactersPositionTA;
}>`
  display: flex;
  font-size: 11px;

  color: ${({ hasError, theme }) =>
    hasError ? theme.colors.helper : theme.colors.neutralLowMedium};

  font-family: ${({ fontWeight }) =>
    fontFamilyBasedOnWeight[fontWeight || "400"]} !important;

  ${({ position }) => {
    if (position) {
      return css`
        justify-content: ${position === "right" ? "flex-end" : "flex-start"};
      `;
    } else {
      return css`
        justify-content: flex-start;
      `;
    }
  }};
`;
