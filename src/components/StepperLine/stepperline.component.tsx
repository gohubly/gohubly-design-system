import React from "react";
import {
  Container,
  StepLineWrapper,
} from "./stepperline.style";
import { IStepperLine } from "./stepperline.interface";

export const StepperLine: React.FC<IStepperLine> = ({
  currentStep = 0,
  steps = 0,
  className,
}) => {

  return (
    <Container className={className}>
      <StepLineWrapper
          totalSteps={steps}
          currentStep={currentStep}/>
    </Container>
  );
};
