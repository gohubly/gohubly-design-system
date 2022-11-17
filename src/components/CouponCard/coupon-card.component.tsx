import React from 'react'
import { Box, Flex } from 'rebass'
import { Button } from '../Button'
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
      minWidth="640px"
      flexDirection="column"
      backgroundColor="white"
    >
      <Flex style={{ gap: '8px' }} flexDirection="column">
        <Typography size='XS' color='neutralLowDark'>
          { renderSubtitle() }
        </Typography>
      </Flex>

      <Flex style={{ gap: '32px' }} mt="24px" alignItems="center">
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
            size={'LG'}
            fluid
          >
            { buttonProps?.children ?? 'Validar cupom' }
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}