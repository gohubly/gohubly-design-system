import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { defaultCss } from "../../theme/defaultCss";

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

export const Wrapper = styled.div`
  ${defaultCss};
  width: 100%;
  display: flex;
  background: #fff;
  flex-direction: row;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  border-radius: 5px 5px 0px 0px;
  align-items: center;
`;

export const TabItem = styled.div<{
  selected: boolean;
  isDesktop: boolean;
  isStepCompleted?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-width: 180px;
  justify-content: center;
  position: relative;
  padding: 24px;

  color: ${theme.colors.neutralLowLight};
  font-size: ${({ isDesktop }) => (isDesktop ? "16px" : "14px")};
  font-family: ${({ selected }) => fontFamilyBasedOnWeight[selected ? 600 : 500]} !important;
  line-height: 20px;
  letter-spacing: -0.005em;

  z-index: 1;

  ${({ selected, isStepCompleted }) => {
    if (selected) {
      return css`
        border-bottom: 2px solid ${theme.colors.primaryMedium};
        color: ${theme.colors.neutralLow};
      `;
    }

    if (isStepCompleted) {
      return css`
        border-bottom: 2px solid ${theme.colors.primaryMedium};
        color: ${theme.colors.neutralLowLight};
      `;
    }
  }};
`;

export const StepWrapper = styled.div<{
  selected?: boolean;
  isStepCompleted?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;

  box-sizing: border-box;

  border-radius: 100px;

  border: 1.5px solid ${theme.colors.neutralHighMedium};

  ${({ selected, isStepCompleted }) => {
    if (selected) {
      return css`
        border: 1.5px solid ${theme.colors.primaryMedium};
      `;
    }

    if (isStepCompleted) {
      return css`
        border: 1.5px solid ${theme.colors.primaryMedium};
      `;
    }
  }};

  background-color: ${({ theme, isStepCompleted }) =>
    isStepCompleted ? theme.colors.primaryMedium : theme.colors.white};

  & path {
    stroke: #fff;
    stroke-width: 3;
  }

  z-index: 1;
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: -14px;
`;
