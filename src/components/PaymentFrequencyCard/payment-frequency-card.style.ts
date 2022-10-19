import styled from 'styled-components'
import { theme } from '../../theme'
import { defaultCss } from '../../theme/defaultCss'
import { iPaymentCardFrequency } from './payment-frequency-card.interface'

export const Wrapper = styled.div<Pick<iPaymentCardFrequency, 'selected'>>`
  ${defaultCss};

  position: relative;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 24px;

  border: 2px solid ${({ selected }) => (selected ? theme.colors.primary : theme.colors.neutralHighLight)};
  border-radius: 8px;

  background-color: ${({ selected }) => (selected ? '#F3F5F7' : 'transparent')};

  transition: all .5s;

  &:hover {
    border-color: ${theme.colors.primary}
  }
`

export const DiscountFlag = styled.div`
  position: absolute;
  top: -12px;
  right: 10px;
  
  padding: 4px 12px;
  background-color: ${theme.colors.helperMedium};
  
  font-size: 12px;
  text-align: center;
  color: white;

  border-radius: 16px;
`