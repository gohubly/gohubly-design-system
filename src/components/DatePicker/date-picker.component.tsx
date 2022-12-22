import moment from 'moment'
import React, { useRef, useState } from 'react'
import { Flex } from 'rebass'
import { Input } from '../Input'
import { PeriodPicker } from '../PeriodPicker'
import { iDatePickerProps } from './date-picker.types'
import * as css from './date-picker.styles'
import { useClickOutside } from '../../hooks'

export const DatePicker: React.FC<iDatePickerProps> = ({
  from,
  to,
  onReset,
  onPeriodChange
}) => {
  const [showPicker, setShowPicker] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(() => {
    setShowPicker(false)
  }, [ref])

  return (
    <css.Container>
      <Flex style={{ gap: '8px' }}>
        <Input
          iconLeft='calendar'
          iconRight='chevronRight'
          iconGray
          placeholder='Selecionar'
          value={from ? moment(from)?.format('DD/MM/YYYY') : ''}
          onKeyDown={e => e.preventDefault()}
          onClick={() => setShowPicker((show) => !show)}
          style={{ cursor: 'pointer' }}
          readOnly
          />

        <Input
          iconLeft='calendar'
          iconRight='chevronRight'
          iconGray
          placeholder='Selecionar'
          disabled={!from && !to}
          onKeyDown={e => e.preventDefault()}
          value={to ? moment(to)?.format('DD/MM/YYYY') : ''}
          style={{ cursor: 'pointer' }}
          readOnly
        />
      </Flex>

      <css.PickerContainer show={showPicker}>
        <PeriodPicker
          onChange={period => {
            onPeriodChange(period)
            setShowPicker(false)
          }}
          onReset={onReset}
          containerRef={ref}
          period={{
            initialDate: moment(from).utc(),
            finalDate: moment(to).utc(),
          }}
        />
      </css.PickerContainer>
    </css.Container>
  )
}