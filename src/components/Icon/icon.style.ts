import styled, { css } from 'styled-components';
import { iIcon } from '.';

export const IconWrapper = styled.div<iIcon>`
  svg {
    fill: ${({ theme, fill }) => fill || theme.colors.transparent};

    ${({ fluid }) => fluid && css`
      width: 100%;
      height: auto;
    `}
  }

  path {
    stroke: ${({ theme, OnColor, stroke }) => stroke || theme.colors[OnColor ? 'neutralHigh' : 'primary']};
  }
`
