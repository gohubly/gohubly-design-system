import styled, { keyframes } from "styled-components";
import { iButton, iButtonHierarchy, iButtonSizes } from ".";
import { hexToRgb } from "../../helpers";
import { defaultCss } from "../../theme/defaultCss";
import { themeWithouthInterface as theme } from "../../theme/theme";
import { Icon, iIcon } from "../Icon";

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "primary",
  ghost: "transparent",
  secondary: "transparent",
};

const HOVER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "primaryMedium",
  ghost: "primaryLightest",
  secondary: "primaryLightest",
};

const COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "white",
  ghost: "primary",
  secondary: "primary",
};

const DISABLED_BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> =
  {
    primary: "neutralHighLight",
    ghost: "transparent",
    secondary: "neutralHighLight",
  };

const BORDER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "transparent",
  ghost: "transparent",
  secondary: "primary",
};

const HELPER_BACKGROUND_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "helper",
  ghost: "transparent",
  secondary: "transparent",
};

const HELPER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "white",
  ghost: "helper",
  secondary: "helper",
};

const HELPER_BORDER_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "transparent",
  ghost: "transparent",
  secondary: "helper",
};

const ICON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: "primaryLight",
  secondary: "primary",
  ghost: "primary",
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
  ...HOVER_COLOR_BY_HIERARCHY,
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

const HELPER_COLOR_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...HELPER_COLOR_BY_HIERARCHY,
  secondary: "white",
};

const ICON_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...ICON_COLOR_BY_HIERARCHY,
  primary: "primaryLight",
  secondary: "primaryLight",
};

const PADDING_BY_SIZE: Record<iButtonSizes, string> = {
  SM: "7px 16px",
  MD: "11px 24px",
  LG: "15px 32px",
};

export const IconStyled = styled(Icon)<
  iIcon & { hierarchy: iButtonHierarchy; OnColor?: boolean; loading?: boolean }
>`
  margin-right: 5px;
  visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
  path {
    stroke: ${({ hierarchy, OnColor }) => {
      if (hierarchy === "primary") {
        // return theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]]
        return hexToRgb(theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]], {
          alpha: 0.8,
          asCSS: true,
        });
      }

      return OnColor
        ? theme.colors[ICON_ON_COLOR_BY_HIERARCHY[hierarchy]]
        : theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]];
    }};
  }
`;

export const Button = styled.button<iButton>`
  ${defaultCss};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 16px;
  line-height: 24px;

  height: fit-content;
  width: ${({ fluid }) => (fluid ? "100%" : "auto")};

  outline: none;
  border-color: transparent;
  border: 1px solid;
  border-color: ${({ OnColor, hierarchy }) =>
    hierarchy &&
    theme.colors[
      OnColor
        ? BORDER_ON_COLOR_BY_HIERARCHY[hierarchy]
        : BORDER_COLOR_BY_HIERARCHY[hierarchy]
    ]};
  border-radius: ${({ radius }) => radius && theme.borderRadius[radius]};

  cursor: pointer;
  transition: background-color 0.3s;

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
    border: ${({ OnColor, hierarchy }) =>
      hierarchy &&
      `1px solid ${() =>
        theme.colors[
          OnColor
            ? HOVER_BORDER_ON_COLOR_BY_HIERARCHY[hierarchy]
            : BORDER_COLOR_BY_HIERARCHY[hierarchy]
        ]}`};
    background-color: ${({ hierarchy, OnColor }) =>
      hierarchy &&
      theme.colors[
        OnColor
          ? HOVER_ON_COLOR_BY_HIERARCHY[hierarchy]
          : HOVER_COLOR_BY_HIERARCHY[hierarchy]
      ]};
  }

  &:focus:not(:disabled) {
    // border-color: ${() => theme.colors.helper};
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
    background-color: ${({ hierarchy }) =>
      hierarchy && theme.colors[HELPER_BACKGROUND_BY_HIERARCHY[hierarchy]]};
    border-color: ${({ hierarchy }) =>
      hierarchy && theme.colors[HELPER_BORDER_BY_HIERARCHY[hierarchy]]};
    color: ${({ hierarchy, OnColor }) =>
      hierarchy &&
      theme.colors[
        OnColor
          ? HELPER_COLOR_ON_COLOR_BY_HIERARCHY[hierarchy]
          : HELPER_COLOR_BY_HIERARCHY[hierarchy]
      ]};

    &:hover:not(:disabled) {
      background-color: ${({ hierarchy }) =>
        hierarchy && theme.colors[HELPER_BACKGROUND_BY_HIERARCHY[hierarchy]]};
      border-color: ${({ hierarchy }) =>
        hierarchy && theme.colors[HELPER_BORDER_BY_HIERARCHY[hierarchy]]};
      color: ${({ hierarchy, OnColor }) =>
        hierarchy &&
        theme.colors[
          OnColor
            ? HELPER_COLOR_ON_COLOR_BY_HIERARCHY[hierarchy]
            : HELPER_COLOR_BY_HIERARCHY[hierarchy]
        ]};
    }

    & > ${IconStyled} {
      background-color: ${() => theme.colors.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({ hierarchy, OnColor }) =>
      hierarchy &&
      // theme.colors[OnColor ? DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : DISABLED_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]
      hexToRgb(
        theme.colors[
          OnColor
            ? DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy]
            : DISABLED_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]
        ],
        {
          alpha: OnColor ? 0.8 : 1,
          asCSS: true,
        }
      )};
    color: ${({ OnColor }) =>
      OnColor ? theme.colors.primaryLight : theme.colors.neutralLowLight};
  }
`;

export const ContentContainer = styled.div<{ loading?: boolean }>`
  visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
`;

export const ButtonSpinnerContainer = styled.span`
  position: absolute;
  height: 70%;
`;
