import { iButton } from "../Button"

export interface iExpandableItem {
  title: string
  minWidth?: string
  itemRight: JSX.Element
  data: iExpandableItemRow[]
  expanded?: boolean
  onItemClick: () => void
  onExpandClick: () => void
  buttonsProps: iButton[]
}

export interface iExpandableItemRow {
  label: string | JSX.Element
  value: string | JSX.Element
}