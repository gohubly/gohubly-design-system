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
  width?: string
  period: iPeriod
  count?: 1 | 2 | 3
  onChange: (newPeriod: iPeriod) => void
  containerRef?: React.Ref<HTMLDivElement>
  onReset?: () => void
}