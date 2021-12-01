import React from 'react'

import { iTypography } from './typography.interface'
import { Paragraph, Span } from './typography.style'

export const Typography: React.FC<iTypography> = ({
  as = 'span',
  size,
  fontWeight,
  lineHeight,
  children,
  color,
}) => {
  const props = {
    as,
    children,
    size,
    fontWeight,
    lineHeight,
    color,
  }

  switch (as || size) {
    case 'p':
      return <Paragraph {...props}>{children}</Paragraph>
    case 'span':
      return <Span {...props}>{children}</Span>
  }
}