export interface iDrawerProps {
  position: 'left' | 'right'
  minWidth?: string
  zIndex: number
  width?: string
  show?: boolean
  overlayRef?: React.Ref<HTMLDivElement>,
  drawerRef?: React.Ref<HTMLDivElement>,
}