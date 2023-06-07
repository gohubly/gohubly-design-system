import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PickerContainer = styled.div<{ show?: boolean }>`
  position: absolute;
  top: 85px;
  left: 0;

  // width: 100%;
  height: ${({ show }) => show ? 'max-content' : '0'};

  opacity: ${({ show }) => show ? '1' : '0'};
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};
  overflow: hidden;
  
  z-index: 3;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);

  border: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
  border-radius: 8px;


  user-select: ${({ show }): string => (show ? 'auto ' : 'none')};
  pointer-events: ${({ show }): string => (show ? 'all ' : 'none')};

  transition: all .5s;
`