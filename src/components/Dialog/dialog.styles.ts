import { Flex, FlexProps } from "rebass/styled-components";
import styled, { StyledComponent } from "styled-components";

export const DialogBody: StyledComponent<React.FunctionComponent<FlexProps>, any, FlexProps, never> = styled(Flex)`
  width: 100%;

  padding: 16px;
`

export const DialogFooter: StyledComponent<React.FunctionComponent<FlexProps>, any, FlexProps, never> = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  width: 100%;

  padding: 16px;
`