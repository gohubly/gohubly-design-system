import styled from 'styled-components';
import { iButton } from '.';

const BACKGROUND_COLOR_BY_HIERARCHY = {
  // bgs
}
const BACKGROUND_ON_COLOR_BY_HIERARCHY = {
  // bgs
}

export const Button = styled.button<iButton>`
  // button

  // for width -> check
  //  if props.fluid 
  //      ? 100%
  //      : auto


  // for background -> check
  //  if props.onColor 
  //      ? BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy]
  //      : BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]
  // same for conditions below \/

  &:hover:not(:disabled) {
    // button
  }

  &:focus:not(:disabled) {
    // button
  }
 
  :active:not(:disabled) {
    // active
  }

  &:disabled {
    // disabled
  }
`;
