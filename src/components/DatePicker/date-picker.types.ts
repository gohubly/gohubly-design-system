import { iPeriod } from "../PeriodPicker"

export interface iDatePickerProps {
  from?: string
  to?: string
  count?: 1 | 2 | 3
  onPeriodChange: (period: iPeriod) => void
  onReset?: () => void
}