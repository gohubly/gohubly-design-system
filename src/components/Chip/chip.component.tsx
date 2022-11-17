import React from 'react'
import { iChip } from '.'
import { Typography } from '../Typography'
import { Wrapper } from './chip.style'

export const Chip: React.FC<iChip> = ({
  selected,
  children
}) => {
  return (
    <Wrapper selected={selected}>
      <Typography color={selected ? 'primary' : 'neutralLow'} fontWeight={500} size='XXS' lineHeight='XXL'>
        { children }
      </Typography>
    </Wrapper>
  )
}