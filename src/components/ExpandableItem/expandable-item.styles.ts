import { Flex } from 'rebass';
import styled, { css } from 'styled-components';

export const ContainerList = styled.div<{ expanded?: boolean, solid?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4px !important;

  border: ${({ expanded }) => (expanded ? '1px solid #425DC7' : 'none')};

  border-radius: 8px;
  
  ${({ solid }) => solid && css`
    background: #f1f2f9;
      
    .item {
      background: white;
      border-radius: 4px;
    }
  `}
  
  ${({ solid }) => !solid && css`
    background: white;
      
    .item {
      background: #f1f2f9;
      border-radius: 4px;
    }
  `}
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
