import styled, { css } from 'styled-components';
import { iIcon } from '.';
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss';

export const IconWrapper = styled.div<iIcon>`
  ${defaultCss};

  height: ${({ height }) => height === '12px' ? '18px' : height};
  box-sizing: border-box;

  svg, img {
    fill: ${({ fill }) => fill && theme.colors[fill] ? theme.colors[fill] : (fill || 'transparent')};
    stroke: ${({ OnColor, stroke }) => stroke ? theme.colors[stroke] : theme.colors[OnColor ? 'neutralHigh' : 'primary']};
    width: ${({ width }) => width || '32px'};
    height: ${({ height }) => height || '32px'};

    ${({ fluid }) => fluid && css`
      width: 100%;
      height: auto;
    `}
  }

  path {
    fill: ${({ fill }) => fill && theme.colors[fill] ? theme.colors[fill] : 'auto'};
    stroke: ${({ OnColor, stroke }) => stroke ? theme.colors[stroke] : theme.colors[OnColor ? 'neutralHigh' : 'primary']};
  }
`
