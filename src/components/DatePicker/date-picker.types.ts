import { iPeriod } from "../PeriodPicker"

export interface iDatePickerProps {
  from?: string
  to?: string
  onPeriodChange: (period: iPeriod) => void
  onReset?: () => void
}