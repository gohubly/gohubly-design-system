import styled, { css, keyframes } from "styled-components";
import { iButton, iButtonHierarchy, iButtonSizes } from ".";
import { hexToRgb } from "../../helpers";
import { defaultCss } from "../../theme/defaultCss";
import { themeWithouthInterface as theme } from "../../theme/theme";
import { Icon, iIcon, iIconSizes } from "../Icon";

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "primaryMedium", // filled
  secondary: "transparent", // outlined
  ghost: "transparent", // text
  tonalFilled: "tonalFilled", // tonal filled
};

const HOVER_BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "brandHovered",
  secondary: "outlinedAndTextHover",
  ghost: "primaryLightest",
  tonalFilled: "tonalFilledHover",
};

const COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "white",
  secondary: "textNeutralDefaut",
  ghost: "textNeutralDefaut",
  tonalFilled: "textNeutralDefaut",
};

const DISABLED_BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> =
  {
    primary: "disabled",
    secondary: "disabled",
    ghost: "disabled",
    tonalFilled: "disabled",
  };

const BORDER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "transparent",
  secondary: "neutralHighDark",
  ghost: "transparent",
  tonalFilled: "transparent",
};

const HOVER_BORDER_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BORDER_COLOR_BY_HIERARCHY,
  secondary: "neutralLow",
  // ghost: "neutralLow",
};

const ICON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "white",
  secondary: "iconDefaut",
  ghost: "iconDefaut",
  tonalFilled: "iconDefaut",
};

const HOVER_ICON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "white",
  secondary: "neutralLowDark",
  ghost: "neutralLowDark",
  tonalFilled: "neutralLowDark",
};

const BACKGROUND_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BACKGROUND_COLOR_BY_HIERARCHY,
  primary: "primaryDark",
  secondary: "transparent",
};

const COLOR_ON_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...COLOR_BY_HIERARCHY,
  primary: "white",
  secondary: "white",
};

const HOVER_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...HOVER_BACKGROUND_COLOR_BY_HIERARCHY,
  primary: "primaryMedium",
  secondary: "primaryMedium",
};

const BORDER_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BORDER_COLOR_BY_HIERARCHY,
  secondary: "white",
};

const HOVER_BORDER_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BORDER_ON_COLOR_BY_HIERARCHY,
  secondary: "primaryDark",
};

const DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY: Record<
  iButtonHierarchy,
  string
> = {
  ...DISABLED_BACKGROUND_COLOR_BY_HIERARCHY,
  primary: "primaryMedium",
  secondary: "primaryMedium",
};

const ICON_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...ICON_COLOR_BY_HIERARCHY,
  primary: "white",
  secondary: "primaryLight",
};

const FONT_SIZE_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "12px",
  MD: "14px",
  LG: "14px",
  XL: "16px",
};

const LINE_HEIGHT_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "16px",
  MD: "20px",
  LG: "20px",
  XL: "24px",
};

const PADDING_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "6.5px 10.5px",
  MD: "8.5px 14.5px",
  LG: "12.5px 22.5px",
  XL: "14.5px 22.5px",
};

const RADIUS_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "4px",
  MD: "5px",
  LG: "5px",
  XL: "5px",
};

const ICON_BY_ICON_SIZES: Record<iIconSizes, string> = {
  XXXS: "12px",
  XXS: "14px",
  XS: "16px",
  SM: "20px",
  MD: "24px",
  LG: "32px",
  XL: "40px",
};

const ICON_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "14px",
  MD: "16px",
  LG: "20px",
  XL: "20px",
};

const GAP_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "8px",
  MD: "8px",
  LG: "12px",
  XL: "16px",
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

export const IconStyled = styled(Icon)<
  iIcon & {
    hierarchy: iButtonHierarchy;
    OnColor?: boolean;
    loading?: boolean;
    propsSize?: iButtonSizes;
    iconSize?: iIconSizes;
    rightIconSize?: iIconSizes;
    strokeWidth?: number;
  }
>`
  height: ${({ propsSize }) => propsSize && LINE_HEIGHT_BY_SIZE[propsSize]}!important;
  width: ${({ propsSize }) => propsSize && LINE_HEIGHT_BY_SIZE[propsSize]}!important;;

  ${({ propsSize, iconSize, rightIconSize }) => {
    if (iconSize) {
      return css`
        svg {
          height: ${ICON_BY_ICON_SIZES[iconSize]}!important;
          width: ${ICON_BY_ICON_SIZES[iconSize]}!important;
        }
      `;
    }

    if (rightIconSize) {
      return css`
        svg {
          height: ${ICON_BY_ICON_SIZES[rightIconSize]}!important;
          width: ${ICON_BY_ICON_SIZES[rightIconSize]}!important;
        }
      `;
    }

    if (propsSize) {
      return css`
        svg {
          height: ${ICON_BY_SIZE[propsSize]}!important;
          width: ${ICON_BY_SIZE[propsSize]}!important;
        }
      `;
    }
  }};

  visibility: ${({ loading }) => (loading ? "hidden" : "visible")};

  path,
  circle,
  img,
  rect {
    fill: transparent;
    stroke-width: ${({ strokeWidth }) => (strokeWidth ?? 2)};
    stroke: ${({ hierarchy, OnColor }) => {
      return OnColor
        ? theme.colors[ICON_ON_COLOR_BY_HIERARCHY[hierarchy]]
        : theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]];
    }};
  }
`;

export const Button = styled.button<iButton>`
  ${defaultCss};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: ${({ size }) => size && FONT_SIZE_BY_SIZE[size]};
  line-height: ${({ size }) => size && LINE_HEIGHT_BY_SIZE[size]};
  font-family: ${fontFamilyBasedOnWeight["600"]} !important;
  height: fit-content;
  width: ${({ fluid }) => (fluid ? "100%" : "auto")};

  gap: ${({ size }) => size && GAP_BY_SIZE[size]};

  outline: none;
  border-color: transparent;
  border: 1.5px solid;
  border-color: ${({ OnColor, hierarchy }) =>
    hierarchy &&
    theme.colors[
      OnColor
        ? BORDER_ON_COLOR_BY_HIERARCHY[hierarchy]
        : BORDER_COLOR_BY_HIERARCHY[hierarchy]
    ]};

  border-radius: ${({ size }) => RADIUS_BY_SIZE[size || "MD"]};

  cursor: pointer;
  transition: all 0.3s;
  padding: ${({ size }) => size && PADDING_BY_SIZE[size]};

  color: ${({ hierarchy, OnColor }) =>
    hierarchy &&
    theme.colors[
      OnColor ? COLOR_ON_HIERARCHY[hierarchy] : COLOR_BY_HIERARCHY[hierarchy]
    ]};

  background-color: ${({ hierarchy, OnColor }) =>
    hierarchy &&
    theme.colors[
      OnColor
        ? BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy]
        : BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]
    ]};

  &:hover:not(:disabled) {
    border: 1.5px solid;
    border-color: ${({ OnColor, hierarchy }) =>
      hierarchy &&
      theme.colors[
        OnColor
          ? HOVER_BORDER_ON_COLOR_BY_HIERARCHY[hierarchy]
          : HOVER_BORDER_BY_HIERARCHY[hierarchy]
      ]};

    background-color: ${({ hierarchy, OnColor }) =>
      hierarchy &&
      theme.colors[
        OnColor
          ? HOVER_ON_COLOR_BY_HIERARCHY[hierarchy]
          : HOVER_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]
      ]};

    svg,
    path,
    circle,
    img,
    rect {
      fill: transparent;
      stroke: ${({ hierarchy, OnColor }) =>
        hierarchy &&
        theme.colors[
          OnColor
            ? HOVER_ICON_COLOR_BY_HIERARCHY[hierarchy]
            : HOVER_ICON_COLOR_BY_HIERARCHY[hierarchy]
        ]};
    }
  }

  &:focus:not(:disabled) {
    // border-color: ${() =>
      theme.colors.helper}!important; (OBS.: if there focus)
    animation: ${({ OnColor, hierarchy, theme }) => keyframes`
      100% {
        border-color: ${
          hierarchy &&
          theme.colors[
            OnColor
              ? BORDER_ON_COLOR_BY_HIERARCHY[hierarchy]
              : BORDER_COLOR_BY_HIERARCHY[hierarchy]
          ]
        };
      }
    `}
      0.4s linear;

    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
  }

  &[data-has-error="true"] {
    background-color: ${() => theme.colors.dangerDefaut};
    border-color: ${() => theme.colors.dangerDefaut};
    color: ${() => theme.colors.white};

    &:hover:not(:disabled) {
      background-color: ${() => theme.colors.dangerHovered};
      border-color: ${() => theme.colors.dangerHovered};
    }

    & > ${IconStyled} {
      path {
        stroke: ${() => theme.colors.white};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({ hierarchy, OnColor }) =>
      hierarchy &&
      theme.colors[
        OnColor
          ? DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy]
          : DISABLED_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]
      ]};

    color: ${({ OnColor }) =>
      OnColor ? theme.colors.primaryLight : theme.colors.textDisabled};

    svg,
    path {
      fill: transparent;
      stroke: ${({ OnColor }) =>
        OnColor ? theme.colors.primaryLight : theme.colors.iconDisabled};
    }
  }
`;

export const ContentContainer = styled.div<{ loading?: boolean }>`
  visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
  opacity: ${({ loading }) => (loading ? "0" : "1")};
`;

export const ButtonSpinnerContainer = styled.span`
  position: absolute;
  height: 50%;

  svg,
  path {
    fill: ${() => theme.colors.neutralLowLight}!important;
  }
`;
