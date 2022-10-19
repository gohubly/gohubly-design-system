import styled, { css } from 'styled-components'
import { iButtonNext, iContainerIcon, iItens } from '.'
import { Button } from '../Button'

export const Container = styled.div<{ fluid?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  
  ${({ fluid }) => fluid && css`
    width: 100%;
  `}
`
export const ContainerIcon = styled.div<iContainerIcon>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  align-items: center;
  height: 24px;
  width: 24px;
  background-color: #F1F2F9;
  cursor: pointer;

  path {
    strokeWidth: 2;
  }

  &:hover {
    cursor: ${({ disabledNext }) => disabledNext ? 'not-allowed' : 'pointer'};
    cursor: ${({ disabledPrev }) => disabledPrev ? 'not-allowed' : 'pointer'};
    background-color: #425DC7;
    path {
      stroke: #fff;
      strokeWidth: 2;
    }
  }

  transition: all 0.2s linear; 
`

export const Itens = styled.div<iItens>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  color: ${({ currentPage, index }) => currentPage === index ? '#fff' : '#333333'};
  background-color: ${({ currentPage, index }) => currentPage === index ? '#425DC7' : '#fff'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    background-color: ${({ currentPage, index }) => currentPage === index ? '#425DC7' : '#F1F2F9'};
  }
`

export const Number = styled.div`
  font-size: 12px;
  line-height: 16px;
`

export const ButtonPrevNext = styled(Button)<iButtonNext>`
  background-color: #F1F2F9!important;
  padding: 0px 0px;
  border-radius: 100%;
  height: 24px;
  width: 24px;

  path {
    strokeWidth: 2;
  }

  &:hover {
    background-color: #425DC7!important;
    path {
      stroke: #fff;
      strokeWidth: 2;
  }

  &:focus:not(:disabled) {
    border-color: #425DC7!important;
    background-color: #425DC7!important;
  }

  &:disabled {
    cursor: not-allowed; 
    background-color: #F1F2F9!important; 
    path {
      stroke: #425DC7;
    }
  }
  
  transition: all 0.2s linear!important; 
`

export const More = styled.div`
  path {
    stroke: #333333!important;
  }
`