import styled from 'styled-components'
import { theme } from '../..'
import { iTooltip, iTooltipWithoutChildren, iTooltipPointerOrientation, iTooltipPointerPosition, iTooltipSizes } from './tooltip.interface'

const PADDING_BY_SIZE: Record<iTooltipSizes, string> = {
  LG: '8px 12px',
  SM: '4px 8px'
}

const FONT_SIZE_BY_SIZE: Record<iTooltipSizes, string> = {
  LG: '14px',
  SM: '12px'
}

const WRAPPER_POSITION_BY_POSITION: Record<iTooltipPointerOrientation, string> = {
  up: 'bottom: 140%;',
  down: 'top: 140%;',
  left: 'left: 110%; top: 0px;',
  right: 'right: 110%; top: 0px;',
}

const POINTER_SIZE_BY_SIZE = {
  SM: '8px',
  LG: '10px',
}

export const Wrapper = styled.div<iTooltip>`
  position: absolute;
  width: fit-content;

  ${({ position }) => WRAPPER_POSITION_BY_POSITION[position as iTooltipPointerOrientation]}

  background: ${() => theme.colors.neutralLowDark};
  padding: ${({ size }) => PADDING_BY_SIZE[size as iTooltipSizes]};

  opacity: 1;
  pointer-events: none;

  &:hover {
    opacity: 1;
  }

  border-radius: 8px;
  box-shadow: ${({ shadow }) => shadow ? theme.shadow.Level1 : ''};

  span {
    font-weight: 500;
    font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size as iTooltipSizes]};
    line-height: 16px;
    
    color: ${() => theme.colors.neutralHigh};
  }

  transition: opacity 0.1s linear;
`

const POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION: Record<iTooltipPointerOrientation, Record<iTooltipPointerPosition, string>> = {
  up: {
    center: `bottom: 85%; left: 50%; transform: translateX(-50%) rotate(45deg)`,
    left: `bottom: 85%; left: 8px; transform: rotate(45deg)`,
    right: `bottom: 85%; right: 8px; transform: rotate(45deg)`,
  },
  down: {
    center: `top: 95%; left: 50%; transform: rotate(45deg) translateX(-50%);`,
    left: `top: 85%; left: 8px; transform: rotate(45deg)`,
    right: `top: 85%; right: 8px; transform: rotate(45deg)`,
  },
  left: {
    center: `right: 96%; top: 50%; transform: rotate(45deg) translateY(-50%);`,
    left: `right: 96%; top: 8px; transform: rotate(45deg)`,
    right: `right: 96%; bottom: 8px; transform: rotate(45deg)`,
  },
  right: {
    center: `left: 95%; top: 50%; transform: rotate(45deg) translateY(-50%);`,
    left: `left: 96%; top: 8px; transform: rotate(45deg)`,
    right: `left: 96%; bottom: 8px; transform: rotate(45deg)`,
  },
}

export const Pointer = styled.div<iTooltipWithoutChildren>`
  position: absolute;

  width: ${({ size }) => POINTER_SIZE_BY_SIZE[size as iTooltipSizes]};
  height: ${({ size }) => POINTER_SIZE_BY_SIZE[size as iTooltipSizes]};

  ${({ pointerOrientation, pointerPosition }) =>
    POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION
    [pointerOrientation as iTooltipPointerOrientation]
    [pointerPosition as iTooltipPointerPosition]
  };

  background: ${() => theme.colors.neutralLowDark};
  border-radius: 0px;
`

export const Container = styled.div`
  position: relative;

  &:hover {
    ${Wrapper} {
      opacity: 1;
    }
  }
`
