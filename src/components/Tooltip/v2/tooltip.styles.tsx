import styled from "styled-components";

export const Container = styled.div`
  .react-tooltip {
    border-radius: 4px !important;

    background: ${({ theme }) => theme.colors.neutralLowDark} !important;

    color: ${({ theme }) => theme.colors.neutralHigh};

    font-size: 12px;
  }
`