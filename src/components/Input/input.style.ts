import styled, { css } from 'styled-components';
 
interface iInputDropdownWrapper {
  opened: boolean
}
interface iInputDropdownItem {
  active: boolean
}
interface iStyledCommonProps {
  error?: boolean
  onColor?: boolean
  contentLeft?: boolean
  contentRight?: boolean
}

export const LabelText = styled.span<iStyledCommonProps>`
  letter-spacing: -0.005em;
  font-size: 14px;

  color: ${({ theme, onColor }) => onColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark};
`

export const HelperText = styled.span<iStyledCommonProps>`
  font-size: 12px;
  font-weight: 500;

  color: ${({ theme, error, onColor }) => 
    error 
      ? theme.colors.helper
      : onColor
        ? theme.colors.primaryLight
        : theme.colors.neutralLowMedium};
`

export const Input = styled.input<iStyledCommonProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.neutralHigh};

  border: 1px solid ${({ theme }) => theme.colors.neutralLowLight};
  box-sizing: border-box;
  border-radius: 8px;
  letter-spacing: -0.005em;
  
  color: ${({ theme }) => theme.colors.neutralLowMedium};

  padding: 12px 16px;
  padding-left: ${({ contentLeft }) => contentLeft ? '46px' : '16px'};
  padding-right: ${({ contentRight  }) => contentRight ? '46px' : '16px'};

  ${({ onColor }) => onColor && css`
    border-width: 0px;
  `}
  
  &:hover {
    border: 1px solid ${({ theme, onColor }) => onColor ? theme.colors.primaryDark : theme.colors.primary};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
 
  &::placeholder {
    // placeholder
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.neutralLowLight};
    background: ${({ theme }) => theme.colors.neutralHighLight};
  }

  ${({ error }) => error && css`
    border: 1px solid ${({ theme }) => theme.colors.helper};
    
    &:hover, &:focus {
      border: 1px solid ${({ theme }) => theme.colors.helper};
    }
  `}
  
  /* transition: all 0.1s linear; */
`

export const Label = styled.label<iStyledCommonProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IconCss = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  fill: ${({ theme }) => theme.colors.primaryDark};
`

export const LeftIcon = styled.img`
  ${IconCss};
  left: 14px; 
`

export const RightIcon = styled.img`
  ${IconCss};
  right: 14px; 
`

export const RelativeContainer = styled.div`
  position: relative;
`

const PrefixAndSuffixCommons = css<iStyledCommonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  height: calc(100% - 2px);
  width: 38px;

  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.005em;

  background: ${({ theme, error, onColor }) => 
    error 
      ? theme.colors.helperLight 
      : theme.colors.primaryLightest};
  color: ${({ theme }) => theme.colors.neutralLowDark};
`

export const SuffixText = styled.div`
  ${PrefixAndSuffixCommons};
  
  right: 1px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`

export const PrefixText = styled.div`
  ${PrefixAndSuffixCommons};

  left: 1px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`
export const DropdownWrapper = styled.div<iInputDropdownWrapper>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;

  width: 100%;
  max-height: 450px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  
  background: ${({ theme }) => theme.colors.neutralHigh};

  box-shadow: ${({ theme }) => theme.shadow.Level4};
  border-radius: 8px;

  opacity: ${({ opened }) => opened ? 1 : 0};
  pointer-events: ${({ opened }) => opened ? 'all' : 'none'};

  transition: opacity 0.1s linear;
`

export const DropdownItem = styled.div<iInputDropdownItem>`
  padding: 12px 16px;
  letter-spacing: -0.005em;

  background: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
  border-right: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLightest};
  }

  ${({ active }) => active && css`
    background: ${({ theme }) => theme.colors.primaryLightest};
  `}

  cursor: pointer;
  transition: background 0.1s linear;
`
