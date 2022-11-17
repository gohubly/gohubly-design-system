import React from "react";
import { Flex } from "rebass";
import { RadioButton } from "../RadioButton";
import { Typography } from "../Typography";
import { iPaymentCardFrequency } from "./payment-frequency-card.interface";
import * as css from "./payment-frequency-card.style";

export const PaymentFrequencyCard: React.FC<iPaymentCardFrequency> = ({
  radioProps,
  pricing,
  selected,
  hasDiscountFlag,
  discountText,
  isDesktop = true,
  minWidth = isDesktop ? "544px" : "328px",
}) => {
  return (
    <css.Wrapper
      style={{ minWidth }}
      selected={selected}
      as="label"
      htmlFor={(radioProps?.options ?? [])[0]?.title ?? "Assinatura mensal"}
      isDesktop={isDesktop}
    >
      <css.RadioButtonContainer isDesktop={isDesktop}>
        <RadioButton
          {...radioProps}
          name={radioProps?.name ?? "radio"}
          value={selected ? (radioProps?.options ?? [])[0]?.value ?? "" : "_"}
        />
      </css.RadioButtonContainer>

      <css.Container isDesktop={isDesktop}>
        {!pricing?.Wrapper ? (
          <Flex
            alignItems="center"
            justifyContent={isDesktop ? "end" : "start"}
            style={{ gap: "5px" }}
          >
            <Typography color="neutralLowDark" size="XS" lineHeight="XL">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(pricing?.price ?? 0)}
            </Typography>

            <Typography
              color="neutralLowMedium"
              size="XS"
              lineHeight="XL"
              fontWeight={400}
            >
              por mês
            </Typography>
          </Flex>
        ) : (
          <pricing.Wrapper />
        )}

        {!pricing?.Detail ? (
          <Flex
            alignItems="center"
            justifyContent={isDesktop ? "end" : "start"}
            style={{ gap: "5px" }}
          >
            <Typography
              color="neutralLowMedium"
              size="XXS"
              lineHeight="LG"
              fontWeight={400}
            >
              Pagamento único de
            </Typography>
            <Typography color="neutralLowDark" size="XXS" lineHeight="LG">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              }).format(pricing?.totalPrice ?? 0)}
            </Typography>
          </Flex>
        ) : (
          <pricing.Detail />
        )}

        {hasDiscountFlag && (
          <css.DiscountFlag isDesktop={isDesktop}>
            {discountText}
          </css.DiscountFlag>
        )}
      </css.Container>
    </css.Wrapper>
  );
};
