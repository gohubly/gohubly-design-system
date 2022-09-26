import styled from 'styled-components';
import { Theme, theme } from '../../theme';

export const Container = styled.div< { padding?: string , fluid?: boolean }>`
  width: ${({ fluid }) => fluid ? '100%' : 'auto'};
  padding: ${({ padding = '24px 16px 16px 16px' }) => padding};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FlexContainer = styled.div`
  display: flex;
`

export const ShareItemContainer = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;

  border: 1px solid
    ${({ selected }): string => (selected ? theme.colors.primary : theme.colors.neutralHighMedium)};
  border-radius: 8px;

  background-color: white;

  transition: all 0.5s;

  &:hover {
    border-color: ${theme.colors.primary};
  }

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Spacer = styled.div<{ marginTop?: string, marginBottom?: string }>`
 ${({ marginTop = '0' }): string => `margin-top: ${marginTop}`};
 ${({ marginBottom = '0' }): string => `margin-bottom: ${marginBottom}`};
`

export const Divider = styled.hr<{ marginTop?: string, marginBottom?: string, backgroundColor?: keyof Theme['colors'] }>`
 ${({ marginTop = '0' }): string => `margin-top: ${marginTop}`};
 ${({ marginBottom = '0' }): string => `margin-bottom: ${marginBottom}`};

 ${({ backgroundColor = 'neutralHighLight' }): string => theme.colors[backgroundColor]};
`

export const EmailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  padding: 10px 16px;

  border-radius: ${theme.borderRadius.SM};
  border: 1px solid ${() => theme.colors.neutralHighMedium};

  margin-bottom: 16px;
`

export const IconContainer = styled.div<{ backgroundColor?: keyof Theme['colors'] }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;

  border-radius: ${theme.borderRadius.MD};

  background-color: ${({ backgroundColor = 'primaryLightest' }) => theme.colors[backgroundColor]};
`

export const EmailContainer = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`