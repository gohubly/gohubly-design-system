import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { iDropdownDirections } from '.'

const ARROW_POSITION_BY_DIRECTION: Record<iDropdownDirections, FlattenSimpleInterpolation> = {
  top: css` 
    top: -12px;
    left: 50%;
    transform: rotate(225deg) translateX(-50%);
  `,
  right: css`
    right: -12px;
    top: 50%;
    transform: rotate(315deg) translateY(-50%);
  `,
  bottom: css`
    bottom: -12px;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
  `,
  left: css`
    left: -12px;
    top: 50%;
    transform: rotate(135deg) translateX(-50%);
  `,
}

const DROPDOWN_POSITION_BY_DIRECTION: Record<iDropdownDirections, FlattenSimpleInterpolation> = {
  top: css`
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    left: calc(100% + 4px);
    top: 50%;
    transform: translateY(-50%);
  `,
  bottom: css`
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
  `,
  left: css`
    right: calc(100% + 4px);
    top: 50%;
    transform: translateY(-50%);
  `,
}

export const Dropdown = styled.div<{ direction: iDropdownDirections, width?: string, opened: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.neutralHigh};
  width: ${({ width }) => width || 'auto'};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  display: ${({ opened }) => opened ? 'block' : 'none'};

  ${({ direction }) => DROPDOWN_POSITION_BY_DIRECTION[direction]};
`

export const Arrow = styled.div<{ direction: iDropdownDirections, opened: boolean}>`
  position:absolute;
  background-color: ${({ theme }) => theme.colors.neutralHigh};
  width: 8px;
  height: 8px;
  border-radius: 2px 0 0 0;
  display: ${({ opened }) => opened ? 'block' : 'none'};
  
  ${({ direction }) => ARROW_POSITION_BY_DIRECTION[direction]};
`