import styled, { css, keyframes } from 'styled-components'
import { Icon } from '..'

const fadeInDown = keyframes`
  from {
		opacity: 0;
		transform: translate3d(0, -16px, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 8px, 0);
	}
`

export const Wrapper = styled.div`
  position: relative;
`

export const Select = styled.div<{ disabled?: boolean, error?: boolean }>`
  min-width: 256px;
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;

  background: ${({ theme }) => theme.colors.white} ;
  border: ${({ error, theme }) => !error ? `1px solid ${theme.colors.neutralLowLight}` : `2px solid ${theme.colors.helper}`};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  cursor: default;

  :focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }
  
  ${({ disabled , theme}) => disabled && css`
    background: ${theme.colors.neutralHighLight};
    color: ${theme.colors.neutralLowMedium};
    border-color: ${theme.colors.neutralLowLight};

    svg path {
      stroke: ${theme.colors.neutralLowMedium};
    }
  `}
`

export const Placeholder = styled.span`
  flex: 1;
`

export const OpenIcon = styled(Icon)<{ opened: boolean }>`
  transform: rotate(${({ opened }) => opened ? '-45deg' : '0'});
  transition: transform 0.2s ease;
`

export const Options = styled.div`
  position: absolute;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.neutralHigh};
  border: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius.SM};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08);
  
  animation: ${fadeInDown} 120ms ease-out forwards;
  transition: box-shadow 120ms ease-out, border-color 120ms ease-out;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
    border-color: ${({ theme }) => theme.colors.neutralLowLight};
  }
`

export const Option = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  
  border-radius: ${({ theme }) => theme.borderRadius.SM};

  :hover, :focus-visible {
    background: #F0F1F5;
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.XXXS};
  line-height: 16px;
  color: ${({ theme }) => theme.colors.helper};
`