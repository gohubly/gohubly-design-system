import styled, { css } from "styled-components";

export const Container = styled.div<{ minWidth?: string }>`
  width: 100%;
  min-width: ${({ minWidth }) => minWidth ?? "100%"};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
`;

export const ContainerList = styled.div<{ notAvatar?: boolean; expanded?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: ${({ expanded }) => (expanded ? "12px 0 8px 0" : "12px 0")};
  gap: 4px;

  ${({ notAvatar }) =>
  notAvatar &&
    css`
      gap: 0px;
    `}
`;

export const ContainerLeft = styled.div<{
  itemRight?: boolean;
  itemRigthAndAvatar?: boolean;
  containerLeftMaxWidth?: string;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: ${({ containerLeftMaxWidth }) => containerLeftMaxWidth ?? "86%"};
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;

  svg,
  path {
    stroke-width: 1.5;
  }
`;

export const ContainerRight = styled.div<{ avatar?: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    padding-top: ${({ avatar }) => (avatar ? "4px" : "2px")};
  }

  div svg {
    padding-top: ${({ avatar }) => (avatar ? "2px" : "0")};
  }
`;

export const Item = styled.div<{ avatar?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid #e5e5e5;
  padding: ${({ avatar }) => (avatar ? "16px 0" : "14px 0")};
`;
