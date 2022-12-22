import moment from 'moment'
import React from 'react'

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
  containerRef?: React.Ref<HTMLDivElement>
  onReset?: () => void
}