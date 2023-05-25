import styled, { css } from "styled-components";
import { iIcon } from ".";
import { themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";

export const IconWrapper = styled.div<iIcon>`
  ${defaultCss};

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height};
  box-sizing: border-box;

  svg,
  img {
    fill: ${({ fill }) =>
      fill && theme.colors[fill] ? theme.colors[fill] : fill || "transparent"};
    // stroke: ${({ OnColor, stroke }) =>
      stroke ? theme.colors[stroke] : theme.colors[OnColor ? "white" : ""]};

    width: ${({ width }) => width || "32px"};
    height: ${({ height }) => height || "32px"};
    box-sizing: border-box;
    align-items: center;

    ${({ fluid }) =>
      fluid &&
      css`
        width: 100%;
        height: auto;
      `}

    ${({ gray }) =>
      gray &&
      css`
        fill: transparent;
      `}
  }

  path {
    fill: ${({ fill }) =>
      fill && theme.colors[fill] ? theme.colors[fill] : "auto"};
    stroke: ${({ OnColor, stroke }) =>
      stroke ? theme.colors[stroke] : theme.colors[OnColor ? "white" : ""]};

    stroke-width: ${({ strokeWidth }) => strokeWidth ?? 1.5};

    ${({ gray }) =>
      gray &&
      css`
        stroke: ${theme.colors.neutralLowMedium};
        stroke-width: 2;
        fill: transparent;
      `}
  }
`;
