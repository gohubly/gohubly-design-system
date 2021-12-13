import styled, { css } from 'styled-components';
import { iIcon } from '.';
import { theme } from '../..';

export const IconWrapper = styled.div<iIcon>`
  svg {
    fill: ${({ fill }) => fill || theme.colors.transparent};
    width: 24px;

    ${({ fluid }) => fluid && css`
      width: 100%;
      height: auto;
    `}
  }

  path {
    stroke: ${({ OnColor, stroke }) => stroke || theme.colors[OnColor ? 'neutralHigh' : 'primary']};
  }
`
