import React from 'react'
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { iCardSelector } from './card-selector.interface';
import * as css from './card-selector.style'

export const CardSelector: React.FC<iCardSelector> = ({ color, icon, title, selected }) => {
  const splitted = title.split(" ");
  const lastSentence = splitted[splitted.length - 1]

  return (
    <css.Container selected={selected} color={color}>
      <css.IconContainer selected={selected} color={color}>
        <Icon {...icon} stroke={selected ? 'white' : color} />
      </css.IconContainer>

      <css.TitleContainer>
        <Typography size='XS' color='neutralLowMedium' fontWeight={500} lineHeight='SM'>
          { splitted.slice(0, splitted.length - 1).join(' ') }
        </Typography>

        {lastSentence && (
          <Typography color={selected ? color : 'neutralLow'} size="XS" fontWeight={600}>
            { lastSentence }
          </Typography>
        )}
      </css.TitleContainer>
    </css.Container>
  )
}