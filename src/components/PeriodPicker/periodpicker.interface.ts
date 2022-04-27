import moment from 'moment'

export type iPeriod = {
  initialDate?: moment.Moment,
  finalDate?: moment.Moment
}

export type iCalendar = {
  days: moment.Moment[]
}[]

export interface iPeriodPicker {
  period: iPeriod
  onChange: (newPeriod: iPeriod) => void
}