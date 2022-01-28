import styled, { css } from 'styled-components'


export const Container = styled.div`
  height: 401px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutralHigh};
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  position: relative;
`

const ControlMonthButtonDefault = styled.div`
  position: absolute;
  padding: 2px;
  top: 24px;
  z-index: 1;
  cursor: pointer;
`

export const PreviousButtonContainer = styled(ControlMonthButtonDefault)`
  left: 22px;
`

export const NextButtonContainer = styled(ControlMonthButtonDefault)`
  right: 22px;
`

export const MonthsContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px;
  flex: 1;
`

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const MonthApresentation = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.neutralLowDark};
  text-align: center;
  text-transform: capitalize;
`

export const MonthWeeks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 47px);
`

const DayDefault = styled.div`
  height: 28px;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DayName = styled(DayDefault)`
  color: ${({ theme }) => theme.colors.neutralLowLight};
`

export const DayNumber = styled(DayDefault)<{ isBetween: boolean, isSelected: boolean, isInitialDate: boolean, isTotalSelected: boolean}>`
  color: ${({ theme }) => theme.colors.neutralLow};
  position: relative;
  background-color: ${({ isBetween, isSelected, theme }) => isBetween ? theme.colors.primaryLightest : 'transparent'};
  cursor: pointer;

  span {
    z-index: 2;
  }

  ::before {
    content: '';
    height: 28px;
    width: 28px;
    position: absolute;
    border-radius: 50%;
  }

  ${({ isSelected, theme, isInitialDate, isTotalSelected }) => isSelected && css`
    color: ${({ theme }) => theme.colors.neutralHigh};
    background: ${isTotalSelected && `linear-gradient(${isInitialDate ? '90deg' : '270deg'}, transparent 0%, transparent 50%, ${theme.colors.primaryLightest} 20%)`} ;

    ::before {
      background: ${({ theme }) => theme.colors.primary};
    }
  `}

  ${({ isBetween, theme }) => isBetween && css`
    color: ${theme.colors.primary};
  `}

  :nth-child(7n+1) {
    border-radius: 120px 0 0 120px;
  }

  :nth-child(7n) {
    border-radius: 0 120px 120px 0;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
`

export const HelperContainer = styled.div`
  margin-right: auto;
`

export const PeriodCallout = styled.div`
  margin-right: auto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutralLow};
`