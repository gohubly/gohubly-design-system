import styled from "styled-components";
import { theme } from "../../theme";
import { iAccordion } from "./accordion.interface";

export const Container = styled.div<Pick<iAccordion, 'width' | 'fluid'>>`
  width: ${({ width, fluid }) => fluid ? '100%' : width};
`

export const AccordionItemContainer = styled.div`
  overflow: hidden;
`

export const Item = styled.div`
  padding: 20px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  border-bottom: 1px solid ${theme.colors.neutralHighLight};

  transition: all .5s;

  font-size: ${() => theme.fontSize.XS};

  cursor: pointer;

  span { transition: all .5s; }

  &:hover {
    color: ${() => theme.colors.primary};
    border-color: ${() => theme.colors.primary};

    span {
      color: ${() => theme.colors.primary};
    }
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Children = styled.div<{ open?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ open }) => !open ? '0' : 'auto'};

  color: ${({ open }) => !open ? 'transparent' : 'black'};
  border-bottom: 1px solid ${theme.colors.neutralHighLight};
  
  background-color: white;
  transition: all .5s;
  
  padding: ${({ open }) => !open ? '0' : '20px 52px'};
  padding-right: ${({ open }) => !open ? '0' : '16px'};

  &:hover {
    color: ${() => theme.colors.primary};
    border-color: ${() => theme.colors.primary};
  }
`

export const Label = styled.div<{ clear?: boolean }>`
  margin-left: ${({ clear }) => clear ? '-8px' : 0};
`