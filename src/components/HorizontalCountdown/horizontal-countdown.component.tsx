import React from "react";
import { Box, Flex } from "rebass";
import { theme } from "../../theme";
import { Typography } from "../Typography";
import { iHorizontalCountdown } from "./horizontal-countdown.interface";

export const HorizontalCountdown: React.FC<iHorizontalCountdown> = ({
  countdown = 7,
  highlightedDescription,
  description: descriptionProp,
  showDays = true,
  onRenderDay,
}) => {
  const getCountdownColor = (count: number) => {
    if (countdown === 1 && count === 1) return theme.colors.helperMedium;
    if (countdown === 1) return theme.colors.helperLight;

    return countdown < count
      ? theme.colors.primaryLight
      : theme.colors.primaryMedium;
  };

  const getHighlightedText = () => {
    if (highlightedDescription) return highlightedDescription;

    if (countdown === 1) return "expira hoje";
    if (countdown === 7) return "teste de 7 dias";

    return `expira em ${countdown} dias`;
  };

  const getDescription = () => {
    if (countdown === 7) return "Seu período de hl começa agora. Aproveite 🚀";
    if (countdown === 1)
      return "Seu período de teste hl. Última chance para gerenciar o pagamento da sua assinatura.";

    return "Seu período de teste grátis hl. Fique de olho 👀";
  };

  const description = descriptionProp ?? getDescription();

  return (
    <Flex style={{ gap: "12px" }} width="100%" flexDirection="column">
      {description && typeof description === "string" ? (
        <Flex style={{ gap: "4px" }}>
          <Typography
            color="neutralLow"
            size="XS"
            fontWeight={500}
            lineHeight="LG"
          >
            {description?.toString().split("hl")[0]}{" "}
            <Typography
              color={countdown === 1 ? "helperMedium" : "primaryMedium"}
              size="XS"
              fontWeight={500}
            >
              {getHighlightedText()}
            </Typography>
            {description?.toString().split("hl")[1]}
          </Typography>
        </Flex>
      ) : (
        description
      )}

      <Flex style={{ gap: "4px" }}>
        {[...Array(7)].map((_, i) => (
          <Flex style={{ gap: "4px" }} flex="1" flexDirection="column">
            <Box height="8px" backgroundColor={getCountdownColor(i + 1)} />

            {showDays && (
              <Typography color="neutralLowDark" size="XXXS" fontWeight={400}>
                {onRenderDay
                  ? onRenderDay(i + 1)
                  : `${i + 1} ${i === 0 ? "dia" : "dias"}`}
              </Typography>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
