import React from 'react'
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { iCardSelector } from './card-selector.interface';
import * as css from './card-selector.style'

export const CardSelector: React.FC<iCardSelector> = ({
  color,
  icon,
  title,
  selected,
  responsive,
  onClick,
  bordered = true,
  spaced = true,
  highlighted,
}) => {
  return (
    <css.Container selected={selected} color={color} onClick={onClick} responsive={responsive} bordered={bordered} spaced={spaced}>
      <css.IconContainer selected={selected} color={color}>
        <Icon {...icon} stroke={selected ? 'white' : color} />
      </css.IconContainer>

      <css.TitleContainer>
        <Typography size='XS' color={selected || highlighted ? 'neutralLow' : 'neutralLowMedium'} fontWeight={highlighted ? 600 : 500} lineHeight='SM' {...responsive && { textAlign: 'center' }}>
          { title }
        </Typography>
      </css.TitleContainer>
    </css.Container>
  )
}