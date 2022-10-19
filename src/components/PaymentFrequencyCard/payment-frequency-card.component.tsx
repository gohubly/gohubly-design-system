import React from 'react'
import { Flex } from 'rebass'
import { hexToRgb } from '../../helpers'
import { RadioButton } from '../RadioButton'
import { Typography } from '../Typography'
import { iPaymentCardFrequency } from './payment-frequency-card.interface'
import * as css from './payment-frequency-card.style'

export const PaymentFrequencyCard: React.FC<iPaymentCardFrequency> = ({
  minWidth = '640px',
  radioProps,
  pricing,
  selected,
  hasDiscountFlag,
  discountText,
}) => {
  return (
    <css.Wrapper 
      style={{ minWidth }} 
      selected={selected} 
      as="label" 
      htmlFor={(radioProps?.options ?? [])[0]?.title ?? 'Assinatura mensal'}
    >
      <RadioButton 
        {...radioProps}
        name={radioProps?.name ?? 'radio'}
        value={selected ? (radioProps?.options ?? [])[0]?.title ?? '' : '_'}
        options={[{ title: 'Assinatura mensal', value: '' }]}
      />

      <Flex style={{ gap: '2px' }} flexDirection="column" justifyContent="center" alignItems="flex-end">
        { !pricing?.Wrapper ? (
          <Flex alignItems="center" style={{ gap: '3px' }}>
            <Typography color='neutralLowDark' size='XS' lineHeight='XL'>
              { new Intl
                .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
                .format(pricing?.price ?? 0) }
            </Typography>
            
            <Typography color="neutralLowMedium" size='XS' lineHeight='XL' fontWeight={400}>
              por mês
            </Typography>
          </Flex>
        )
        : (
          <pricing.Wrapper />
        )
      }

      {
        !pricing?.Detail
          ? (
            <Flex alignItems="center" style={{ gap: '0.5px' }}>
              <Typography color="neutralLowMedium" size='XXS' lineHeight='LG' fontWeight={400}>
                Pagamento único de
              </Typography>
              <Typography color='neutralLowDark' size="XXS" lineHeight='LG'>
                { new Intl
                  .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
                  .format(pricing?.totalPrice ?? 0) }
              </Typography>
            </Flex>
          )
          : (
            <pricing.Detail />
          )
      }
      </Flex>

      { hasDiscountFlag && (
        <css.DiscountFlag>
          { discountText }
        </css.DiscountFlag>
      ) }
    </css.Wrapper>
  )
}