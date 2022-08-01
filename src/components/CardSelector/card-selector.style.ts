import styled, { css } from "styled-components";
import { Theme, theme } from "../../theme";
import { iCardSelector } from "./card-selector.interface";

const ICON_BACKGROUND_BY_COLOR: Record<iCardSelector['color'], keyof Theme['colors']> = {
  primary: "primaryLightest",
  successMedium: "successLight",
  helperMedium: "helperLight",
  warning: "warningLight"
}

const SELECTED_ICON_BACKGROUND_BY_COLOR: Record<iCardSelector['color'], keyof Theme['colors']> = {
  primary: "primary",
  successMedium: "successMedium",
  helperMedium: "helperMedium",
  warning: "warning"
}

export const Container = styled.div<Pick<iCardSelector, 'color' | 'selected'>>`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px 24px;

  background-color: white;

  border: 1px solid ${({ selected, color }) => selected ? theme.colors[color] : theme.colors.neutralHighLight};
  border-radius: ${theme.borderRadius.SM};

  transition: all .5s;

  ${({ selected }) => !selected && css`
    &:hover {
      border: 1.5px solid ${theme.colors.neutralHighMedium};
    }
  `}
`

export const IconContainer = styled.div<Pick<iCardSelector, 'color' | 'selected'>>`
  padding: 10px;

  background-color: ${({ color, selected }) => selected ? theme.colors[SELECTED_ICON_BACKGROUND_BY_COLOR[color]] : theme.colors[ICON_BACKGROUND_BY_COLOR[color]]};
  border-radius: 12px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`