import styled, { css } from "styled-components";
import { iInput } from ".";
import { Icon, iIcon, iIconSizes } from "../Icon";
import { themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";
import { iIconPaddings, iInputSizes } from "./input.interface";

interface iInputDropdownWrapper {
  opened: boolean;
}
interface iInputDropdownItem {
  active: boolean;
  fontSize?: keyof typeof theme.fontSize;
  itemSelect?: boolean;
}
interface iStyledCommonProps extends Partial<iInput> {
  contentLeft?: boolean;
  contentRight?: boolean;
  Size?: iInputSizes;
  opened?: boolean;
}
interface iIconRight extends Partial<iIcon> {
  opened?: boolean;
  iconGray?: boolean;
  iconRightPadding?: iIconPaddings;
  iconRightWidth?: string;
  iconRightHeight?: string;
  iconRigthSize?: iIconSizes;
  disabled?: boolean;
  error?: boolean;
}

interface iIconLeft extends Partial<iIcon> {
  opened?: boolean;
  iconGray?: boolean;
  iconLeftPadding?: iIconPaddings;
  iconLeftSize?: iIconSizes;
  iconLeftWidth?: string;
  iconLeftHeight?: string;
  disabled?: boolean;
}

const INPUT_HEIGHT_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: "32px",
  XS: "36px",
  SM: "40px", // mobile
  MD: "48px", // desktop
};

const PADDING_ICON_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: "12px",
  XS: "14px",
  SM: "15px",
  MD: "16px",
};

const ICON_PADDING_LEFT_OR_RIGHT: Record<iIconPaddings, string> = {
  XXXS: "3px",
  XXS: "6px",
  XS: "8px",
  SM: "10px",
  MD: "12px",
  LG: "14px",
  XL: "16px",
};

const ICON_SIZE_BY_SIZE: Record<iIconSizes, string> = {
  XXXS: "12px",
  XXS: "14px",
  XS: "16px",
  SM: "20px",
  MD: "24px",
  LG: "32px",
};

const TOP_PLACEHOLDER_STYLED_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: "6px",
  XS: "8px",
  SM: "10px",
  MD: "14px",
};

const LEFT_PLACEHOLDER_STYLED_BASED_ON_ICON_SIZE: Record<iIconSizes, string> = {
  XXXS: "49px",
  XXS: "49px",
  XS: "49px",
  SM: "49px",
  MD: "53px",
  LG: "57px",
};

const WIDTH_PLACEHOLDER_STYLED_BASED_ON_ICON_SIZE: Record<iIconSizes, string> =
  {
    XXXS: "94px",
    XXS: "94px",
    XS: "94px",
    SM: "94px",
    MD: "98px",
    LG: "102px",
  };

const LINE_HEIGHT_BASED_ON_SIZE: Record<keyof typeof theme.fontSize, string> = {
  XXXS: "16px",
  XXS: "20px",
  XS: "24px",
  SM: "28px",
  MD: "32px",
  LG: "36px",
};

const FONT_SIZE_HELPER_TEXT_BASED_ON_SIZE: Record<keyof typeof theme.fontSize, string> = {
  XXXS: "10px",
  XXS: "10px",
  XS: "11px",
  SM: "11px",
  MD: "12px",
  LG: "13px",
};

const fontFamilyBasedOnWeight: Record<keyof typeof theme.fontWeight, 'InterLight' | 'InterRegular' | 'InterMedium' | 'InterSemiBold' | 'InterBold'> = {
  300: 'InterLight',
  400: 'InterRegular',
  500: 'InterMedium',
  600: 'InterSemiBold',
  900: 'InterBold',
}

export const LabelText = styled.span<iStyledCommonProps>`
  ${defaultCss};
  letter-spacing: -0.005em;
  font-family: ${({ fontWeight }) => fontFamilyBasedOnWeight[fontWeight || '400']} !important;
  
  font-size: ${({ fontSizeLabel, theme }) =>
    theme.fontSize[fontSizeLabel || "XXS"]};

  color: ${({ OnColor }) =>
    OnColor ? theme.colors.neutralHigh : theme.colors.neutralLow};
`;

export const HelperText = styled.span<iStyledCommonProps>`
  ${defaultCss};
  font-size: ${({ Size }) => FONT_SIZE_HELPER_TEXT_BASED_ON_SIZE[Size || "MD"]};
  font-family: ${({ fontWeight }) => fontFamilyBasedOnWeight[fontWeight || '400']} !important;

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
`;

export const Input = styled.input<iStyledCommonProps>`
  ${defaultCss};
  position: relative;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.6) !important;
    -webkit-text-stroke: 0.35px;
  }

  height: ${({ Size }) => INPUT_HEIGHT_BASED_ON_SIZE[Size || "MD"]};
  width: ${({ fluid }) => (fluid ? "100%" : "auto")};
  background: ${() => theme.colors.neutralHigh};

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
  line-height: ${({ fontSize, theme }) =>
    LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};

  font-family: ${({ fontWeight }) => fontFamilyBasedOnWeight[fontWeight || '400']} !important;

  border: 1px solid ${() => theme.colors.neutralLowLight};
  box-sizing: border-box;
  border-radius: 5px;
  letter-spacing: -0.01em;

  color: ${() => theme.colors.neutralLowDark};
  cursor: ${({ opened }) => (opened ? "text" : "pointer")};

  padding-left: ${({ contentLeft, size }) =>
    contentLeft ? "50px" : PADDING_ICON_BASED_ON_SIZE[size || "MD"]};
  padding-right: ${({ contentRight, size }) =>
    contentRight ? "46px" : PADDING_ICON_BASED_ON_SIZE[size || "MD"]};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ OnColor }) =>
    OnColor &&
    css`
      border-width: 0px;
    `}

  &:hover {
    border: 1px solid
      ${({ OnColor }) =>
        OnColor ? theme.colors.primaryDark : theme.colors.primaryMedium};
  }

  &:focus {
    border: 1px solid ${() => theme.colors.primaryMedium};
    outline: 4px solid #f1f2f9;
    cursor: text;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
    line-height: ${({ fontSize, theme }) =>
      LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};
    font-family: ${({ fontWeight }) => fontFamilyBasedOnWeight[fontWeight || '400']} !important;
  }

  &:disabled {
    border: 1px solid ${() => theme.colors.neutralLowLight};
    background: ${() => theme.colors.neutralHighLight};
    cursor: not-allowed !important;
  }

  &[data-has-error="true"] {
    border: 1px solid ${() => theme.colors.helper};

    &:hover,
    &:focus {
      border: 1px solid ${() => theme.colors.helper};
    }
  }

  &[type="password"]:not(:placeholder-shown) {
    letter-spacing: 1.5px;
    font-size: 15px;
  }

  transition: all 0.1s linear;
`;

export const Label = styled.label<iStyledCommonProps>`
  ${defaultCss};

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${({ fluid }) => (fluid ? "100%" : "auto")};
`;

export const RelativeContainer = styled.div<{ disabled?: boolean }>`
  position: relative;

  &:hover > input {
    border: 1px solid
      ${({ disabled }) =>
        disabled
          ? theme.colors.neutralLowLight
          : theme.colors.primary}!important;
  }
`;

export const DropdownWrapper = styled.div<iInputDropdownWrapper>`
  position: absolute;
  top: calc(100% + 8px);
  z-index: 2;
  width: 100%;
  max-height: 280px;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.neutralHigh};
  border: 1px solid ${({ theme }) => theme.colors.neutralLowLight};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08);

  transition: box-shadow 120ms ease-out, border-color 120ms ease-out;

  &:hover {
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

export const DropdownItem = styled.div<iInputDropdownItem>`
  ${defaultCss};
  padding: 12px 16px;
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
  line-height: ${({ fontSize, theme }) =>
    LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};
  display: flex;
  align-items: center;
  word-break: break-word;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  color: ${({ theme, itemSelect }) =>
    itemSelect ? theme.colors.primary : "inherit"};
  background: ${({ itemSelect }) => (itemSelect ? "#F1F2F9" : "inherit")};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: #f0f1f5;
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const IconCss = css<{
  onClick?: () => void;
  disabled?: boolean;
  iconGray?: boolean;
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  svg,
  path {
    &:hover {
      pointer-events: inherit;
    }

    ${({ iconGray }) =>
      iconGray &&
      css`
        stroke: ${theme.colors.neutralLowMedium};
        stroke-width: 2;
        fill: transparent;
      `}

    ${({ disabled }) =>
      disabled &&
      css`
        stroke: ${theme.colors.neutralLowMedium};
        fill: ${theme.colors.neutralHighLight};
      `}
  }

  // // Accessibility to have a bigger space to click
  // padding: 3px;
`;

export const LeftIcon = styled(Icon)<iIconLeft>`
  ${IconCss};
  left: ${({ iconLeftPadding }): string =>
    ICON_PADDING_LEFT_OR_RIGHT[iconLeftPadding || "XXS"]};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  svg,
  path {
    width: ${({ iconLeftWidth, iconLeftSize }): string =>
      iconLeftWidth ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]};
    height: ${({ iconLeftHeight, iconLeftSize }): string =>
      iconLeftHeight ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]};
  }
`;

export const RightIcon = styled(Icon)<iIconRight>`
  ${IconCss};
  right: ${({ iconRightPadding }): string =>
    ICON_PADDING_LEFT_OR_RIGHT[iconRightPadding || "XXS"]};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  svg,
  path {
    width: ${({ iconRightWidth, iconRigthSize }): string =>
      iconRightWidth ?? ICON_SIZE_BY_SIZE[iconRigthSize || "MD"]};

    height: ${({ iconRightHeight, iconRigthSize }): string =>
      iconRightHeight ?? ICON_SIZE_BY_SIZE[iconRigthSize || "MD"]};

    ${({ error }) => {
      if (error) {
        return css`
          stroke: ${theme.colors.helperMedium};
        `;
      }
    }};
  }

  rect {
    ${({ error }) => {
      if (error) {
        return css`
          stroke: ${theme.colors.helperMedium};
          // fill: ${theme.colors.helperMedium};
        `;
      }
    }};
  }

  rect:nth-last-child(-n + 2) {
    ${({ error }) => {
      if (error) {
        return css`
          fill: ${theme.colors.helperMedium};
        `;
      }
    }};
  }
`;

export const PlaceholderStyled = styled.div<{
  isSelected?: boolean;
  size?: iInputSizes;
  disabled?: boolean;
  hasIconLeft?: boolean;
  sizeIconLeft?: iIconSizes;
  opened?: boolean;
}>`
  display: ${({ isSelected }) => (isSelected ? "initial" : "none")};
  position: absolute;
  z-index: 1;
  cursor: pointer;
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.neutralHighLight : theme.colors.white};

  top: ${({ size }) => TOP_PLACEHOLDER_STYLED_BASED_ON_SIZE[size || "MD"]};

  left: ${({ sizeIconLeft, hasIconLeft }) =>
    hasIconLeft
      ? LEFT_PLACEHOLDER_STYLED_BASED_ON_ICON_SIZE[sizeIconLeft || "MD"]
      : "19px"};

  width: ${({ sizeIconLeft, hasIconLeft }) =>
    hasIconLeft
      ? `calc(100% - ${
          WIDTH_PLACEHOLDER_STYLED_BASED_ON_ICON_SIZE[sizeIconLeft || "MD"]
        })`
      : "calc(100% - 64px)"};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;

  &:hover {
    cursor: ${({ opened }) => (opened ? "text" : "pointer")};
    pointer-events: inherit;

    ${({ disabled }) => {
      if (disabled) {
        return css`
          cursor: not-allowed;
        `;
      }
    }};
  }
`;
