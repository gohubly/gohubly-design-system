import styled from 'styled-components'
import { iStepperHierarchy } from '.'
import { themeWithouthInterface as theme } from '../..'

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: 'primary',
  ghost: 'transparent',
  secondary: 'primaryLightest'
}

const COLOR_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: 'white',
  ghost: 'primary',
  secondary: 'primary'
}

const BORDER_COLOR_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: 'transparent',
  ghost: 'primary',
  secondary: 'transparent'
}

const PROGRESS_BAR_WIDTH_BY_STATE: Record<string, string> = {
  completed: '100%',
  active: '50%',
  initial: '0%'
}

export const Container = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
`

export const ProgressBar = styled.div<{ active: boolean, completed: boolean, isNextStepActive: boolean }>`
  position: relative;
  top: 50%;
  left: 0%;
  width: 124px;
  margin: 0 6px;
  height: 3px;
  flex: 1;
  z-index: 0;
  border-radius: 100px;
  background: ${() => theme.colors.primaryLightest};

  &::before {
    content: '';

    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: ${({ completed, active }) => PROGRESS_BAR_WIDTH_BY_STATE[completed ? 'completed' : active ? 'active' : 'initial']};

    border-radius: 100px;
    background-color: ${() => theme.colors.primary};
  }
`

export const StepWrapper = styled.div<{ hierarchy: iStepperHierarchy, hasProgressBar: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;
  
  border-radius: 100px;
  border: 1px solid ${({ hierarchy }) => theme.colors[BORDER_COLOR_BY_HIERARCHY[hierarchy]]};

  background-color: ${({ hierarchy }) => theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]};

  margin: ${({ hasProgressBar }) => `0px ${!hasProgressBar ? '8px' : '0px'}`};

  & > span {
    color: ${({ hierarchy }) => theme.colors[COLOR_BY_HIERARCHY[hierarchy]]};
  }
  
  & path {
    stroke: ${({ hierarchy }) => theme.colors[COLOR_BY_HIERARCHY[hierarchy]]};
  }
  
  z-index: 1;
`