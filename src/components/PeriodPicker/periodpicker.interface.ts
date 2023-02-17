import moment from 'moment'
import React from 'react'

export type iPeriod = {
  initialDate?: moment.Moment,
  finalDate?: moment.Moment
}

export type iCalendar = {
  days: moment.Moment[]
}[]

export type BlockType = "after"

export type DateLimit = {
  endDate?: Date
}

export interface iPeriodPicker {
  width?: string
  period: iPeriod
  count?: 1 | 2 | 3
  limit?: DateLimit
  onChange: (newPeriod: iPeriod) => void
  containerRef?: React.Ref<HTMLDivElement>
  onReset?: () => void
}