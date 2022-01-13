import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ direction }) => direction === 'vertical' ? '20px' : '24px'};
`

export const TabItem = styled.div<{ selected: boolean }>`
  color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.neutralLowMedium};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.005em;
  padding-bottom: 16px;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme, selected }) => selected ? theme.colors.primary : 'transparent'};

  ${({ selected }) => !selected && css`
    :hover {
      color: ${({ theme }) => theme.colors.neutralLowDark};
    }
  `}
`
