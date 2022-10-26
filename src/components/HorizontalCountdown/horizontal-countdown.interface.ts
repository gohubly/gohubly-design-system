export interface iHorizontalCountdown {
  countdown: number
  highlightedDescription?: string | JSX.Element
  description?: string | JSX.Element
  onRenderDay?: (day: number) => string
  showDays?: boolean
}