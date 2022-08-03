import styled, { css } from "styled-components";
import theme from "../../theme/theme";

interface CommonProps {
  active: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const Container = styled.div<CommonProps>`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 128px;
  cursor: pointer;

  input {
    display: none;
  }

  .label {
    &:focus {
      outline: none;
      > div {
        box-shadow: 0px 0px 0px 8px
          ${({ active }): string =>
            active ? "rgb(21 143 46 / 20%)" : "rgb(153 153 153 / 20%)"};
      }
    }
  }

  &:hover > div {
    box-shadow: 0px 0px 0px 8px
      ${({ active }): string =>
        active ? "rgb(21 143 46 / 10%)" : "rgb(153 153 153 / 10%)"};
  }

  background: ${({ active, theme }): string =>
    active ? theme.colors.successLight : theme.colors.neutralHighMedium};

  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        background: ${theme.colors.neutralHighMedium};
        &:hover > div {
          box-shadow: none;
        }
      `;
    }
  }};

  ${({ error }) => {
    if (error) {
      return css`
        background: ${theme.colors.helperLight};
        &:hover > div {
          box-shadow: none;
        }
      `;
    }
  }};
`;

export const ToggleStyled = styled.div<CommonProps>`
  position: relative;
  top: 50%;
  left: ${({ active }): string =>
    active ? "calc(100% - 23px)" : "calc(0% + 2px)"};
  transform: translateY(-50%);
  z-index: 1;
  width: 20px;
  height: 20px;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
  background: ${({ active }): string =>
    active ? theme.colors.successMedium : theme.colors.white};
  border-radius: 100%;

  > div {
    position: relative;
    top: 52%;
    left: 71%;
    transform: translate(-50%, -50%);

    opacity: ${({ active }): number => (active ? 1 : 0)};
    transition: opacity 0.1s linear;

    display: flex;
    flex-direction: column;
    justify-content: center;

    svg,
    path {
      stroke: #fff;
    }
  }
  
  ${({ disabled, active }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        background: ${active
          ? theme.colors.neutralLowLight
          : theme.colors.white};
      `;
    }
  }};

  ${({ error }) => {
    if (error) {
      return css`
        background: ${theme.colors.helperMedium};
      `;
    }
  }};

  transition: all 0.1s linear;
`;
