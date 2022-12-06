import { useEffect } from '@storybook/addons'
import React from 'react'
import * as css from './drawer.styles'
import { iDrawerProps } from './drawer.types'

export const Drawer: React.FC<iDrawerProps> = ({
  show,
  zIndex = 99999999,
  children,
  drawerRef,
  overlayRef,
  ...props
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [show])

 return (
    <css.Overlay show={show} zIndex={zIndex} ref={overlayRef}>
      <css.Content {...props} zIndex={zIndex} ref={drawerRef}>
        { children }
      </css.Content>
    </css.Overlay>
  )
}