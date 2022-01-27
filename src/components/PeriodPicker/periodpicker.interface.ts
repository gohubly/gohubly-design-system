import { Moment } from 'moment'

export type iPeriod = {
  initialDate?: Moment,
  finalDate?: Moment
}

export type iCalendar = {
  days: Moment[]
}[]

export interface iPeriodPicker {
  period: iPeriod
  onChange: (newPeriod: iPeriod) => void
}