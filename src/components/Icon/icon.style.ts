import styled, { css } from 'styled-components';
import { iIcon } from '.';
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss';

export const IconWrapper = styled.div<iIcon>`
  ${defaultCss};

  height: ${({ height }) => height || '24px'};

  svg, img {
    fill: ${({ fill }) => fill || 'auto'};
    stroke: ${({ stroke }) => stroke || theme.colors.primary};
    width: ${({ width }) => width || '24px'};
    height: ${({ height }) => height || '24px'};

    ${({ fluid }) => fluid && css`
      width: 100%;
      height: auto;
    `}
  }

  path {
    stroke: ${({ OnColor, stroke }) => stroke ? theme.colors[stroke] : theme.colors[OnColor ? 'neutralHigh' : 'primary']};
  }
`
