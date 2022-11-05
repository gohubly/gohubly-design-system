import styled from "styled-components";
import { ITagPercent, ITagPercentStatus } from ".";
import { Theme, themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";

interface ITagPercentProps extends Partial<ITagPercent> {
  status: ITagPercentStatus;
}

const BACKGROUND_COLOR_BY_STATUS: Record<
  ITagPercentStatus,
  keyof Theme["colors"]
> = {
  success: "successLight",
  alert: "helperLight",
};

const COLOR_BY_HIERARCHY: Record<ITagPercentStatus, keyof Theme["colors"]> = {
  success: "successDark",
  alert: "helperMedium",
};

export const Tag = styled.div<ITagPercentProps>`
  ${defaultCss};
  display: flex;
  width: ${({ fluid }) => (fluid ? "100%" : "fit-content")};
  transition: background-color 0.3s linear;
  padding: 4px 8px 4px 4px;
  gap: 4px;
  align-items: center;

  color: ${({ status }) => status && theme.colors[COLOR_BY_HIERARCHY[status]]};
  background-color: ${({ status }) =>
    status && theme.colors[BACKGROUND_COLOR_BY_STATUS[status]]};

  cursor: ${({ onClick }) => (onClick ? "pointer" : "initial")};

  border: 0;
  border-radius: ${() => theme.borderRadius.Pill};

  span {
    margin-top: 2px;
  }

  svg,
  path {
    margin-top: 1px;
    stroke: ${({ status }) =>
      status && theme.colors[BACKGROUND_COLOR_BY_STATUS[status]]};
    stroke-width: 3.5;
  }
`;
