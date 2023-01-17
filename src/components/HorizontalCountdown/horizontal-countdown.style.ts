import styled from "styled-components";

export const StyledDays = styled.div`
  display: flex;
  gap: 4px;

  span {
    font-size: 11px;
  }

  @media screen and (max-width: 768px) {
    gap: 2px;
  }
`;
