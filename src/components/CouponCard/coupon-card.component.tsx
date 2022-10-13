import React from 'react'
import { Box, Flex } from 'rebass'
import { hexToRgb } from '../../helpers'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { Typography } from '../Typography'
import { iCouponCard } from './coupon-card.interface'

export const CouponCard: React.FC<iCouponCard> = ({
  title,
  subtitle = 'Quem é que não gosta de cupom, não é? \n Se você tem um, digite abaixo e aproveite seu desconto!',
  inputProps,
  iconProps,
  buttonProps
}) => {
  const renderSubtitle = () => {
    const subtitleTexts = subtitle?.split('\n') ?? []

    if (subtitleTexts.length) {
      return subtitleTexts.map((subtitle) => (<Box lineHeight="24px">{subtitle}</Box>))
    }

    return []
  }

  return (
    <Flex 
      style={
        {
          gap: '32px',
          border: `8px solid ${hexToRgb('#000000', { alpha: 0.05, asCSS: true })}`,
          borderRadius: '8px'
        }
      }
      minWidth="640px"
      padding="32px 48px"
      flexDirection="column"
      backgroundColor="white"
    >
      <Flex style={{ gap: '8px' }} flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center">
          <Typography size='MD' color='neutralLowDark'>
            { title ?? 'Cupom de desconto' }
          </Typography>

          <Icon iconId='close' stroke='neutralLowDark' {...iconProps} />
        </Flex>

        <Typography size='XS' color='neutralLowMedium'>
          { renderSubtitle() }
        </Typography>
      </Flex>

      <Flex style={{ gap: '32px' }} alignItems="center">
        <Box flexBasis="65%">
          <Input 
            { ...inputProps }
            label={inputProps?.label ?? "Insira seu cupom"}
            placeholder={inputProps?.placeholder ?? 'Cupom'}
            helperText={inputProps?.helperText ?? 'Você pode adicionar apenas 1 cupom por compra'}
            error={!!inputProps?.error}
            fluid
          />
        </Box>

        <Box flexBasis="35%">
          <Button 
            {...buttonProps}
            fluid
          >
            { buttonProps?.children ?? 'Validar cupom' }
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}