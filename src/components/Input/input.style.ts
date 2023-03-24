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
  Size?: iInputSizes;
  opened?: boolean;
  hasPrefix?: boolean;
  hasSuffix?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasPrefixAndIcon?: boolean;
  hasSuffixAndIcon?: boolean;
}
interface iIconRight extends Partial<iIcon> {
  opened?: boolean;
  iconRightPadding?: iIconPaddings;
  iconRightWidth?: string;
  iconRightHeight?: string;
  iconRigthSize?: iIconSizes;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  hasSuffix?: boolean;
}

interface iIconLeft extends Partial<iIcon> {
  opened?: boolean;
  iconLeftPadding?: iIconPaddings;
  iconLeftSize?: iIconSizes;
  iconLeftWidth?: string;
  iconLeftHeight?: string;
  disabled?: boolean;
  className?: string;
  hasPrefix?: boolean;
  error?: boolean;
}

const INPUT_HEIGHT_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: "32px",
  XS: "36px",
  SM: "40px", // mobile
  MD: "48px", // desktop
};

const PADDING_BASED_ON_SIZE: Record<iInputSizes, string> = {
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
  XXL: "18px",
};

const ICON_SIZE_BY_SIZE: Record<iIconSizes, string> = {
  XXXS: "12px",
  XXS: "14px",
  XS: "16px",
  SM: "20px",
  MD: "24px",
  LG: "32px",
  XL: "40px",
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
  XL: "61px",
};

const WIDTH_PLACEHOLDER_STYLED_BASED_ON_ICON_SIZE: Record<iIconSizes, string> =
  {
    XXXS: "94px",
    XXS: "94px",
    XS: "94px",
    SM: "94px",
    MD: "98px",
    LG: "102px",
    XL: "106px",
  };

const LINE_HEIGHT_BASED_ON_SIZE: Record<keyof typeof theme.fontSize, string> = {
  XXXS: "16px",
  XXS: "20px",
  XS: "24px",
  SM: "28px",
  MD: "32px",
  LG: "36px",
};

const FONT_SIZE_HELPER_TEXT_BASED_ON_SIZE: Record<
  keyof typeof theme.fontSize,
  string
> = {
  XXXS: "10px",
  XXS: "10px",
  XS: "11px",
  SM: "11px",
  MD: "12px",
  LG: "13px",
};

const PADDING_PREFIX_SUFIX_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: "0 12px",
  XS: "0 12px",
  SM: "0 12px",
  MD: "0 16px",
};

const GAP_LABEL_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: "8px",
  XS: "8px",
  SM: "8px",
  MD: "12px",
};

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

export const LabelText = styled.span<iStyledCommonProps>`
  ${defaultCss};
  letter-spacing: -0.005em;
  font-family: ${({ fontWeight }) =>
    fontFamilyBasedOnWeight[fontWeight || "400"]} !important;

  font-size: ${({ fontSizeLabel, theme }) =>
    theme.fontSize[fontSizeLabel || "XXS"]};

  color: ${({ OnColor }) =>
    OnColor ? theme.colors.neutralHigh : theme.colors.neutralLow};

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(16, 16, 16, 0.7);
    `}
`;

export const HelperText = styled.span<iStyledCommonProps>`
  ${defaultCss};
  font-size: ${({ Size }) => FONT_SIZE_HELPER_TEXT_BASED_ON_SIZE[Size || "MD"]};
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
  line-height: ${({ fontSize }) => LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};
  text-align: ${({ textAlign }) => textAlign};

  font-family: ${({ fontWeight }) =>
    fontFamilyBasedOnWeight[fontWeight || "400"]} !important;

  border: 1px solid rgba(20, 33, 89, 0.3);

  box-sizing: border-box;
  border-radius: 5px;
  letter-spacing: -0.01em;

  color: rgba(0, 0, 0, 0.6);
  cursor: ${({ opened }) => (opened ? "text" : "pointer")};

  padding-left: ${({ size }) => PADDING_BASED_ON_SIZE[size || "MD"]};
  padding-right: ${({ size }) => PADDING_BASED_ON_SIZE[size || "MD"]};

  ${({
    hasPrefix,
    hasSuffix,
    hasLeftIcon,
    hasRightIcon,
    hasPrefixAndIcon,
    hasSuffixAndIcon,
    size,
    iconLeftWidth,
    iconLeftSize,
    iconRightSize,
    iconRightWidth,
  }) => {
    if (hasPrefix && hasSuffix && !hasLeftIcon && !hasRightIcon) {
      // 1x var(--prefix-padding) pois no projeto ele conta o width já com o padding
      return css`
        padding-left: calc(var(--prefix-width) + var(--prefix-padding) + 6px);
        padding-right: calc(var(--suffix-width) + var(--suffix-padding) + 2px);
      `;
    } else if (hasPrefix && !hasLeftIcon && !hasRightIcon) {
      return css`
        padding-left: calc(var(--prefix-width) + var(--prefix-padding) + 2px);
      `;
    } else if (hasSuffix && !hasLeftIcon && !hasRightIcon) {
      return css`
        padding-right: calc(var(--suffix-width) + var(--suffix-padding) + 2px);
      `;
    } else if (hasLeftIcon && hasRightIcon && !hasPrefix && !hasSuffix) {
      return css`
        padding-left: 50px;
        padding-right: 48px;
      `;
    } else if (hasLeftIcon && !hasPrefix && !hasSuffix) {
      return css`
        padding-left: 50px;
      `;
    } else if (hasRightIcon && !hasPrefix && !hasSuffix) {
      return css`
        padding-right: 48px;
      `;
    } else if (hasPrefix && hasRightIcon && !hasSuffix && !hasLeftIcon) {
      return css`
        padding-left: calc(var(--prefix-width) + var(--prefix-padding) + 6px);
        padding-right: 48px;
      `;
    } else if (hasSuffix && hasLeftIcon && !hasPrefix && !hasRightIcon) {
      return css`
        padding-right: calc(var(--suffix-width) + var(--suffix-padding) + 2px);
        padding-left: 50px;
      `;
    } else if (hasPrefixAndIcon && hasSuffixAndIcon) {
      // 2x var(--prefix-padding) pois no projeto ele conta o width já com o padding
      return css`
        padding-left: calc(
          var(--prefix-width) + 2 * var(--prefix-padding) + 2px +
            ${iconLeftWidth ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]}
        );
        padding-right: calc(
          var(--suffix-width) + 2 * var(--suffix-padding) + 5px +
            ${iconRightWidth ?? ICON_SIZE_BY_SIZE[iconRightSize || "MD"]}
        );
      `;
    } else if (hasPrefixAndIcon) {
      return css`
        padding-left: calc(
          var(--prefix-width) + 2 * var(--prefix-padding) + 2px +
            ${iconLeftWidth ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]}
        );
      `;
    } else if (hasSuffixAndIcon) {
      return css`
        padding-right: calc(
          var(--suffix-width) + 2 * var(--suffix-padding) + 5px +
            ${iconRightWidth ?? ICON_SIZE_BY_SIZE[iconRightSize || "MD"]}
        );
      `;
    } else {
      return css`
        padding-left: ${PADDING_BASED_ON_SIZE[size || "MD"]};
        padding-right: ${PADDING_BASED_ON_SIZE[size || "MD"]};
      `;
    }
  }};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ OnColor }) =>
    OnColor &&
    css`
      border-width: 0px;
    `}

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(20, 33, 89, 0.05),
        rgba(20, 33, 89, 0.05)
      ),
      #ffffff;
  }

  &:focus {
    border: 1.5px solid ${() => theme.colors.primaryMedium};
    cursor: text;
  }

  &:focus-visible {
    outline-width: inherit;
  }

  &::placeholder {
    color: ${() => theme.colors.neutralLowLight};
    font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
    line-height: ${({ fontSize, theme }) =>
      LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};
    font-family: ${({ fontWeight }) =>
      fontFamilyBasedOnWeight[fontWeight || "400"]} !important;
  }

  &:disabled {
    border: 1px solid rgba(20, 33, 89, 0.15);
    background: ${() => theme.colors.neutralHighLight};
    cursor: not-allowed !important;

    background: linear-gradient(
        0deg,
        rgba(20, 33, 89, 0.05),
        rgba(20, 33, 89, 0.05)
      ),
      #ffffff;
  }

  &[data-has-error="true"] {
    border: 1px solid ${() => theme.colors.helper}!important;
    background: linear-gradient(
        0deg,
        rgba(235, 0, 69, 0.05),
        rgba(235, 0, 69, 0.05)
      ),
      #ffffff;

    &:hover,
    &:focus {
      border: 1px solid ${() => theme.colors.helper}!important;
      background: linear-gradient(
          0deg,
          rgba(235, 0, 69, 0.05),
          rgba(235, 0, 69, 0.05)
        ),
        #ffffff;
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
  gap: ${({ size }) => GAP_LABEL_BASED_ON_SIZE[size || "MD"]};

  width: ${({ fluid }) => (fluid ? "100%" : "auto")};
`;

export const RelativeContainer = styled.div<{ disabled?: boolean }>`
  position: relative;

  &:hover > input {
    background: linear-gradient(
        0deg,
        rgba(20, 33, 89, 0.05),
        rgba(20, 33, 89, 0.05)
      ),
      #ffffff;

    &[data-has-error="true"] {
      border: 1px solid ${() => theme.colors.helper}!important;
      background: linear-gradient(
          0deg,
          rgba(235, 0, 69, 0.05),
          rgba(235, 0, 69, 0.05)
        ),
        #ffffff;
    }

    border: 1px solid
      ${({ disabled }) =>
        disabled
          ? "1px solid rgba(20, 33, 89, 0.15)"
          : "rgba(20, 33, 89, 0.3)"}!important;
  }
`;

const PrefixAndSuffixCommons = css<iStyledCommonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  height: calc(100% - 2px);

  padding: ${({ size }) => PADDING_PREFIX_SUFIX_BASED_ON_SIZE[size || "MD"]};

  border-radius: 5px;

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XS"]};
  line-height: ${({ fontSize }) => LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};

  font-family: ${fontFamilyBasedOnWeight["400"]} !important;

  letter-spacing: -0.005em;

  background: rgba(20, 33, 89, 0.05);
  color: ${() => theme.colors.neutralLow};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed !important;
      color: rgba(16, 16, 16, 0.5);
      background: linear-gradient(
          0deg,
          rgba(20, 33, 89, 0.05),
          rgba(20, 33, 89, 0.05)
        ),
        #ffffff;
    `}

  &[data-has-error="true"] {
    background: rgba(235, 0, 69, 0.05);
  }

  z-index: 1;
`;

export const SuffixText = styled.div<{ disabled?: boolean }>`
  ${PrefixAndSuffixCommons};
  right: 1px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;

  ${({ disabled }) =>
    disabled &&
    css`
      border-left: 1px solid rgba(20, 33, 89, 0.15);
    `}
`;

export const PrefixText = styled.div<{ disabled?: boolean }>`
  ${PrefixAndSuffixCommons};
  left: 1px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;

  ${({ disabled }) =>
    disabled &&
    css`
      border-right: 1px solid rgba(20, 33, 89, 0.15);
    `}
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
  border: 1px solid rgba(20, 33, 89, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
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
  margin: 1px 0;
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || "XXS"]};
  line-height: ${({ fontSize, theme }) =>
    LINE_HEIGHT_BASED_ON_SIZE[fontSize || "XS"]};
  display: flex;
  align-items: center;
  word-break: break-word;
  border-radius: 5px;
  color: ${({ theme, itemSelect }) =>
    itemSelect ? theme.colors.neutralLowDark : theme.colors.neutralLowMedium};
  background: ${({ itemSelect }) =>
    itemSelect ? "rgba(20, 33, 89, 0.05)" : "inherit"};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: linear-gradient(
        0deg,
        rgba(20, 33, 89, 0.05),
        rgba(20, 33, 89, 0.05)
      ),
      #ffffff;
    color: ${({ theme }) => theme.colors.neutralLow};
    outline: none;
  }

  justify-content: space-between;
`;

const IconCss = css<{
  onClick?: () => void;
  disabled?: boolean;
  error?: boolean;
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

    ${({ error }) =>
      error &&
      css`
        stroke: ${theme.colors.neutralLowMedium};
      `}

    ${({ disabled }) =>
      disabled &&
      css`
        stroke: rgba(38, 38, 38, 0.5);
        fill: transparent;
      `}
  }
`;

export const LeftIcon = styled(Icon)<iIconLeft>`
  ${IconCss};

  left: ${({ hasPrefix, iconLeftPadding }): string =>
    hasPrefix
      ? `calc(var(--prefixIcon-width) + var(--prefixIcon-padding) + 2px)`
      : ICON_PADDING_LEFT_OR_RIGHT[iconLeftPadding || "LG"]}};  

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  width: ${({ iconLeftWidth, iconLeftSize }): string =>
    iconLeftWidth ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]};

  height: ${({ iconLeftHeight, iconLeftSize }): string =>
    iconLeftHeight ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]};

  svg,
  path {
    position: absolute;
    left: 0;
    width: ${({ iconLeftWidth, iconLeftSize }): string =>
      iconLeftWidth ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]};
    height: ${({ iconLeftHeight, iconLeftSize }): string =>
      iconLeftHeight ?? ICON_SIZE_BY_SIZE[iconLeftSize || "MD"]};
  }

  rect {
    ${({ error }) => {
      if (error) {
        return css`
          stroke: ${theme.colors.neutralLowMedium};
          fill: transparent;
        `;
      }
    }};
  }
`;

export const RightIcon = styled(Icon)<iIconRight>`
  ${IconCss};

  right: ${({ hasSuffix, iconRightPadding }): string =>
    hasSuffix
      ? "calc(var(--suffixIcon-width) + var(--suffixIcon-padding) + 5px)"
      : ICON_PADDING_LEFT_OR_RIGHT[iconRightPadding || "LG"]}};  

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  width: ${({ iconRightWidth, iconRigthSize }): string =>
    iconRightWidth ?? ICON_SIZE_BY_SIZE[iconRigthSize || "MD"]};

  height: ${({ iconRightHeight, iconRigthSize }): string =>
    iconRightHeight ?? ICON_SIZE_BY_SIZE[iconRigthSize || "MD"]};

  svg,
  path {
    position: absolute;
    right: 0;
    width: ${({ iconRightWidth, iconRigthSize }): string =>
      iconRightWidth ?? ICON_SIZE_BY_SIZE[iconRigthSize || "MD"]};

    height: ${({ iconRightHeight, iconRigthSize }): string =>
      iconRightHeight ?? ICON_SIZE_BY_SIZE[iconRigthSize || "MD"]};
  }

  rect {
    ${({ error }) => {
      if (error) {
        return css`
          stroke: ${theme.colors.neutralLowMedium};
          fill: transparent;
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

export const LinkText = styled.span<iStyledCommonProps>`
  ${defaultCss};
  font-size: 14px;

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
