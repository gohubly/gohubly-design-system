import React from 'react'
import * as css from './drawer.styles'
import { iDrawerProps } from './drawer.types'

export const Drawer: React.FC<iDrawerProps> = ({
  show,
  zIndex = 99999999,
  children,
  ...props
}) => (
  <css.Overlay show={show} zIndex={zIndex}>
    saodsados
    <css.Content {...props} zIndex={zIndex}>
      { children }
    </css.Content>
  </css.Overlay>
)