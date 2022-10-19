import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { defaultCss } from '../../theme/defaultCss'
import { iPaymentTypeCard } from './payment-type-card.interface'

export const Wrapper = styled.div<Pick<iPaymentTypeCard, 'selected' | 'type'>>`
  ${defaultCss};

  width: 312px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 40px 28px 32px 28px;

  box-sizing: border-box;

  border: 2px solid ${({ selected }) => (selected ? theme.colors.primary : theme.colors.neutralHighLight)};
  border-radius: 8px;

  background-color: ${({ selected }) => (selected ? theme.colors.primaryLightest : 'transparent')};

  transition: all .5s;

  &:hover {
    border-color: ${theme.colors.primary}
  }

  div:first-of-type,
  div > svg {
    width: 48px !important;
    height: 32px !important;
  }

  ${({ selected, type }) => {
    if (selected && type === 'creditCard') {
      return css`
        svg {
          rect:first-of-type {
            fill: ${theme.colors.primary};
          }
          
          rect:not(:first-of-type):not(:last-of-type) {
            fill: white;
          }
    
          rect:last-of-type {
            fill: 'initial';
          }
        }
      `
    } else if (selected && type === 'bankSlip') {
        return css`
        svg {
          rect:first-of-type {
            fill: ${theme.colors.primary};
          }

          path.line-bg { stroke: ${theme.colors.primary} }

          path:last-of-type {
            stroke: white;
          }

          path:not(:last-of-type):not(.line-bg) {
            stroke: rgba(255, 255, 255, 1);
          }
          
          rect:not(:first-of-type){
            fill: rgba(255, 255, 255, 1);
          }
        }
      `
    }

    return ``
  }}
`

export const Flag = styled.div`
  position: absolute;
  bottom: -12px;
  right: 50%;
  
  transform: translateX(50%);
  
  padding: 4px 12px;
  background-color: ${theme.colors.helperMedium};
  
  font-size: 12px;
  text-align: center;
  color: white;

  border-radius: 16px;
`