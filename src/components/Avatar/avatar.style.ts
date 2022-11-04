import styled, { css } from "styled-components";
import { iAvatar, IAvatarSizes } from ".";
import { themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";

const AVATAR_DETAILS_WITH_ON_COLOR: Record<string, string> = {
  textColor: "primaryLightest",
  background: "primaryDark",
};
const AVATAR_DETAILS_WITHOUT_ON_COLOR: Record<string, string> = {
  textColor: "primary",
  background: "primaryLightest",
};

const AVATAR_SIZE_BASED_ON_SIZE: Record<IAvatarSizes, string> = {
  XS: "32px",
  SM: "36px",
  MD: "40px",
  LG: "48px",
  XL: "64px",
};

const FONT_SIZE_BASED_ON_SIZE: Record<IAvatarSizes, string> = {
  XS: "14px",
  SM: "16px",
  MD: "18px",
  LG: "22px",
  XL: "24px",
};

const LINE_HEIGHT_BASED_ON_SIZE: Record<IAvatarSizes, string> = {
  XS: "16px",
  SM: "18px",
  MD: "20px",
  LG: "28px",
  XL: "32px",
};

const FONT_SIZE_BASED_ON_SIZE_TWO_LETTERS: Record<IAvatarSizes, string> = {
  XS: "12px",
  SM: "14px",
  MD: "16px",
  LG: "20px",
  XL: "22px",
};

export const Wrapper = styled.div<iAvatar>`
  ${defaultCss};

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};
  min-width: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};
  height: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};

  background-color: ${({ OnColor }) =>
    theme.colors[
      OnColor
        ? AVATAR_DETAILS_WITH_ON_COLOR.background
        : AVATAR_DETAILS_WITHOUT_ON_COLOR.background
    ]};

  background-image: ${({ image }) => image && `url(${image})`};
  background-size: ${({ image }) => image && `cover`};
  box-shadow: ${() => theme.shadow.Level1};
  border-radius: 2px;
  border-radius: ${() => theme.borderRadius.Circular};
  user-select: none;

  div {
    margin-top: 2px;
    margin-left: 1px;

    font-size: ${({ size, twoLetter }) =>
      size &&
      (twoLetter
        ? FONT_SIZE_BASED_ON_SIZE_TWO_LETTERS[size]
        : FONT_SIZE_BASED_ON_SIZE[size])};

    line-height: ${({ size }) => size && LINE_HEIGHT_BASED_ON_SIZE[size]};

    color: ${({ OnColor }) =>
      theme.colors[
        OnColor
          ? AVATAR_DETAILS_WITH_ON_COLOR.textColor
          : AVATAR_DETAILS_WITHOUT_ON_COLOR.textColor
      ]};
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;

  width: 8px;
  height: 8px;
  border-radius: ${() => theme.borderRadius.Circular};

  background: red;
  background: ${() => theme.colors.helper};
`;
