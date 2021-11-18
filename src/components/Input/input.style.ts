import styled from 'styled-components';

export const Label = styled.label`
  // wrapper
  // flex, flex direction column, gap

  > input {
    // input
    transition: 180ms ease-in-out;

    &::placeholder {
      // placeholder
    }

    &:focus {
      // focus
    }

    &:disabled {
      // disabled
    }

    &.error {
      // error /\ usar solução melhor :)
    }
  }
`;
