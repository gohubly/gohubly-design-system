import React from 'react'

import { iTypography } from './typography.interface'
import { Paragraph, Span } from './typography.style'

export const Typography: React.FC<iTypography> = ({
  as = 'span',
  className,
  size,
  fontWeight,
  lineHeight,
  children,
  color,
  textAlign,
  textDecoration = 'none',
  colorOpacity
}) => {
  const props = {
    as,
    children,
    size,
    fontWeight,
    lineHeight,
    color,
    textAlign,
    textDecoration,
    colorOpacity
  }

  switch (as || size) {
    case 'p':
      return <Paragraph {...props}>{children}</Paragraph>
    default:
      return <Span className={className} {...props}>{children}</Span>
  }
}