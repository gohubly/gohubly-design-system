import React from "react";
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

      <Typography color="neutralLowDark" fontWeight={600} size="XS">
        {children ??
          (type === "creditCard" ? "Cartão de Crédito" : "Boleto Bancário")}
      </Typography>

      {recomended && <css.Flag>{flagText ?? "Recomendado"}</css.Flag>}
    </css.Wrapper>
  );
};
