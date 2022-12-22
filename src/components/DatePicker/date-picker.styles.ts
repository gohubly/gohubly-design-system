import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`

export const PickerContainer = styled.div<{ show?: boolean }>`
  position: absolute;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);

  height: ${({ show }) => show ? '401px' : '0'};
  opacity: ${({ show }) => show ? '1' : '0'};
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};

  transition: all .5s;
`