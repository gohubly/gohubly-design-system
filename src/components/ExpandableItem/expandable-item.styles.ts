import { Flex } from 'rebass';
import styled from 'styled-components';

export const ContainerList = styled.div<{ expanded?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4px !important;

  border: ${({ expanded }) => (expanded ? '1px solid #425DC7' : 'none')};

  border-radius: 8px;
  &:nth-child(odd) {
    background: #f1f2f9;
    .item {
      background: white;
      border-radius: 4px;
    }
  }
  &:nth-child(even) {
    background: white;
    .item {
      background: #f1f2f9;
      border-radius: 4px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
