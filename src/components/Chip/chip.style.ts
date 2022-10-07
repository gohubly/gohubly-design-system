import styled from 'styled-components'
import { theme } from '../../theme'
import { defaultCss } from '../../theme/defaultCss'
import { iChip } from './chip.interface'

export const Wrapper = styled.div<iChip>`
  ${defaultCss};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 24px;

  border: .51px solid ${({ selected }) => (selected ? theme.colors.primary : theme.colors.neutralHighMedium)};
  border-radius: 32px;

  background-color: ${({ selected }) => (selected ? theme.colors.primaryLightest : 'transparent')};

  transition: all .5s;

  &:hover {
    border-color: ${theme.colors.primary}
  }
`