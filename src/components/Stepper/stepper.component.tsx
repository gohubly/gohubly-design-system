import React from 'react';
import { Icon, Typography } from '..';

import { Container, ProgressBar, StepWrapper, StepMiniWrapper } from './stepper.style'
import { iStepper } from './stepper.interface'

export const Stepper: React.FC<iStepper> = ({
  currentStep = 0,
  steps = 0,
  hierarchy = 'primary',
  hasProgressBar = true,
  mini = false
}) => {
  const stepsArray = [...Array(steps)]
  
  return (
    <Container className='stepper-container'>
      {stepsArray.map((_step, i) => {
        const isCurrentStep = currentStep === i
        const isNextStepActive = currentStep === i + 1
        const isStepCompleted = currentStep > i

        if(mini){
          return <StepMiniWrapper key={`step-mini-wrapper-${_step}-${i}`} hierarchy={hierarchy} isCurrent={isCurrentStep} />
        }

        return (
          <>
            <StepWrapper key={`step-wrapper-${_step}-${i}`} hierarchy={hierarchy} hasProgressBar={hasProgressBar}>
              {isStepCompleted
                ? <Icon iconId="check" size='SM' />
                : <Typography color="primary" size="MD">
                    {i + 1}
                  </Typography>
              }
            </StepWrapper>
            {i + 1 !== stepsArray.length && hasProgressBar && <ProgressBar isNextStepActive={isNextStepActive} completed={isStepCompleted} active={isCurrentStep} />}
          </>
        )
      })}
    </Container>
  )
}