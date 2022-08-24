import styled from 'styled-components';

export const ProductItem = styled.div`
  padding: 24px;
  max-width: 252px !important;
  height: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: white;
  box-sizing: border-box;

  .coverImage {
    width: 100%;
    height: 204px;
    border-radius: 4px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 120px;
    }
  }

  p {
    min-height: 48px;
    max-height: 48px;
    letter-spacing: -0.005em;
    margin: 16px 0px;
    line-height: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .price {
    min-height: 40px;
    margin: 16px 0;

    @media screen and (max-width: 767px) {
      // min-height: 40px;
      margin: 16px 0 8px 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 12px;

    p {
      margin: 12px 0px;
    }
  }
`;
