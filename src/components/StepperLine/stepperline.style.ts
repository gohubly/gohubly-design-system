import styled from "styled-components";
import { IStepperLine, themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";

export const Container = styled.div<IStepperLine>`
  ${defaultCss};

  width: ${({ fluid }) => (fluid ? "100%" : "auto")};
  position: relative;
  display: flex;
  align-items: center;
`;

export const StepLineWrapper = styled.div<{
  totalSteps: number;
  currentStep: number;
}>`
  flex: 1;
  position: relative;
  width: 100%;
  min-width: 120px;
  height: 8px;
  background: #e5e5e5;
  border-radius: 32px;

  box-sizing: border-box;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: ${({ totalSteps, currentStep }) =>
      (100 / totalSteps) * currentStep}%;

    background: linear-gradient(90deg, #425dc7 0%, #2a3a7c 100%);
    outline: 2px solid rgba(20, 33, 89, 0.2);
    border-radius: 32px;
  }
`;
