import React from "react";
import { Flex } from "rebass";
import { iPaymentTypeCard } from ".";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import * as css from "./payment-type-card.style";

export const PaymentTypeCard: React.FC<iPaymentTypeCard> = ({
  type = "creditCard",
  children,
  selected,
  recomended,
  flagText,
}) => {
  return (
    <css.Wrapper selected={selected} type={type}>
      <Icon width="50px" height="32px" iconId={type} />

      <Flex mt='8px'>
        <Typography color="neutralLowDark" fontWeight={500} size="XXS" lineHeight="XL" textAlign="center">
          {children ??
            (type === "creditCard" ? "Cartão de Crédito" : "Boleto Bancário")}
        </Typography>
      </Flex>

      {recomended && <css.Flag>{flagText ?? "Recomendado"}</css.Flag>}
    </css.Wrapper>
  );
};
