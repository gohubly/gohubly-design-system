export interface iAccordion {
  width?: string
  fluid?: boolean
  items: iAccordionItem[]
  highlightLabel?: boolean
  loadingForItem?: string
  action?: iAccordionAction
}

export interface iAccordionItem {
  label: string
  value: string
  items?: iAccordionItem[]
}

export interface iAccordionAction {
  text?: string
  onClick?: (item: Omit<iAccordionItem, 'items'>) => void
}