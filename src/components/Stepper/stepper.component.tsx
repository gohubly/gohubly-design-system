import React, { useEffect, useState } from "react";
import { Icon, Typography } from "..";

import {
  Container,
  ProgressBar,
  StepWrapper,
  StepMiniWrapper,
} from "./stepper.style";
import { iStepper } from "./stepper.interface";

export const Stepper: React.FC<iStepper> = ({
  currentStep = 0,
  steps = 0,
  hierarchy = "primary",
  hasProgressBar = true,
  mini = false,
  className,
  onClick,
}) => {
  const stepsArray = [...Array(steps)];

  const [current, setCurrent] = useState(currentStep);

  useEffect(() => {
    if (onClick) {
      setCurrent(currentStep);
    }
  }, [currentStep]);

  const handleCurrent = (index: number) => {
    setCurrent(index);
    if (onClick) onClick();
  };

  return (
    <Container className={className}>
      {stepsArray.map((_step, i) => {
        const isCurrentStep = current === i;
        const isNextStepActive = current === i + 1;
        const isStepCompleted = current > i;

        if (mini) {
          return (
            <StepMiniWrapper
              key={`step-mini-wrapper-${_step}-${i}`}
              hierarchy={hierarchy}
              isCurrent={isCurrentStep}
              isWhite={hierarchy === "white"}
              onClick={() => handleCurrent(i)}
            />
          );
        }

        return (
          <>
            <StepWrapper
              key={`step-wrapper-${_step}-${i}`}
              hierarchy={hierarchy}
              hasProgressBar={hasProgressBar}
            >
              {isStepCompleted ? (
                <Icon iconId="check" size="SM" />
              ) : (
                <Typography color="primary" size="MD">
                  {i + 1}
                </Typography>
              )}
            </StepWrapper>
            {i + 1 !== stepsArray.length && hasProgressBar && (
              <ProgressBar
                isNextStepActive={isNextStepActive}
                completed={isStepCompleted}
                active={isCurrentStep}
              />
            )}
          </>
        );
      })}
    </Container>
  );
};
