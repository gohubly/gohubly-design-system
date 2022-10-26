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

  padding: 16px 16px 16px 24px;

  border: 1px solid ${({ selected }) => (selected ? theme.colors.primaryMedium : theme.colors.neutralHighLight)};
  border-radius: 5px;

  background-color: ${({ selected }) => (selected ? theme.colors.primaryLightest : 'transparent')};

  transition: all .5s;

  &:hover {
    border-color: ${theme.colors.primary}
  }
`

export const DiscountFlag = styled.div`
  padding: 2px 8px;
  background-color: ${theme.colors.helperMedium};
  box-shadow: 4px 4px 12px -32px rgba(240, 52, 96, 0.08);
  
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: white;

  border-radius: 2px;
  margin-top: 8px;
`