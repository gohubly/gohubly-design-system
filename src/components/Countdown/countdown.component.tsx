import React, { useState } from 'react'
import { Flex } from 'rebass';
import { theme } from '../../theme';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { iCountdown } from './countdown.interface';
import * as css from './countdown.style'

export const Countdown: React.FC<iCountdown> = ({
  countdown = 7,
  title,
  description: descriptionProp,
  highlightedDescription,
  buttonProps,
  onCloseClick
}) => {
  const getCountDownColors = (count: number) => {
    if (countdown === 1 && count === 1) return theme.colors.helperMedium;

    if (countdown < count && countdown === 1) return theme.colors.white

    return countdown < count ? theme.colors.primaryMedium : theme.colors.white;
  }

  const getHighlightedText = () => {
    if (highlightedDescription) return highlightedDescription;

    if (countdown === 1) return '';
    if (countdown === 7) return 'teste de 7 dias'

    return `expira em ${countdown} dias`
  }

  const getDescription = () => {
    if (countdown === 7) return 'Seu período de hl começa agora. Aproveite 🚀'
    if (countdown === 1) return 'Seu período de teste expira hoje. Última chance para gerenciar o pagamento da sua assinatura.'

    return 'Seu período de teste grátis hl. Fique de olho 👀'
  }

  const description = descriptionProp ?? getDescription()

  return (
    <css.Container>
      <css.CountContainer alert={countdown === 1}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_7982_159969" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
            <circle cx="40" cy="40" r="40" fill="white"/> 
          </mask>
          <g mask="url(#mask0_7982_159969)">
            <path d="M39.957 0.903192C34.077 0.910426 28.2744 2.24371 22.9811 4.80382C17.6877 7.36393 13.0399 11.0849 9.3836 15.6898L16.7327 21.5251C19.5115 18.0253 23.0439 15.1974 27.0668 13.2517C31.0898 11.306 35.4997 10.2927 39.9685 10.2872L39.957 0.903192Z" fill={getCountDownColors(7)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <path d="M9.58527 15.4315C5.89052 20.0056 3.27499 25.3542 1.93334 31.079C0.591698 36.8038 0.558497 42.7575 1.83621 48.497L10.996 46.4579C10.0249 42.0959 10.0502 37.571 11.0698 33.2202C12.0895 28.8693 14.0773 24.8044 16.8853 21.3281L9.58527 15.4315Z" fill={getCountDownColors(6)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <path d="M1.76644 48.1758C3.05676 54.2098 5.75683 59.8527 9.64588 64.6432C13.5349 69.4337 18.5025 73.2358 24.1426 75.7386L27.9488 67.1612C23.6624 65.2591 19.887 62.3695 16.9314 58.7287C13.9757 55.0879 11.9236 50.7993 10.943 46.2135L1.76644 48.1758Z" fill={getCountDownColors(5)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <path d="M24.1453 75.7381C29.5199 78.1231 35.3631 79.2652 41.2401 79.0794C47.1171 78.8937 52.8766 77.3848 58.0898 74.6652L53.7494 66.3452C49.7874 68.4122 45.4102 69.5589 40.9437 69.7001C36.4771 69.8413 32.0363 68.9733 27.9516 67.1607L24.1453 75.7381Z" fill={getCountDownColors(4)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <path d="M57.7947 74.8196C63.0305 72.1437 67.5953 68.3214 71.1495 63.6372C74.7036 58.953 77.1556 53.5275 78.3228 47.7646L69.1255 45.9018C68.2384 50.2816 66.375 54.405 63.6738 57.965C60.9726 61.525 57.5034 64.4299 53.5242 66.4636L57.7947 74.8196Z" fill={getCountDownColors(3)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <path d="M78.2531 48.0794C79.4686 42.3264 79.3708 36.3734 77.9672 30.6635C76.5636 24.9535 73.8903 19.6336 70.1462 15.0998L62.9105 21.0752C65.756 24.5209 67.7878 28.564 68.8545 32.9035C69.9212 37.2431 69.9955 41.7674 69.0718 46.1396L78.2531 48.0794Z" fill={getCountDownColors(2)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <path d="M70.3562 15.3556C66.6502 10.7906 61.9623 7.12019 56.6415 4.6176C51.3207 2.11502 45.504 0.844692 39.6243 0.901183L39.7145 10.2848C44.1831 10.2418 48.6038 11.2073 52.6476 13.1092C56.6914 15.0112 60.2541 17.8007 63.0707 21.2701L70.3562 15.3556Z" fill={getCountDownColors(1)} stroke={countdown === 1 ? theme.colors.helperLight : "#CDD2EB"}/>
            <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fontSize="32px" fontWeight="700" fill={countdown === 1 ? theme.colors.helperMedium : '#2E44A1'}>
              { countdown }
            </text>
          </g>
        </svg>
      </css.CountContainer>

      <Flex paddingY="2px" flexDirection="column" alignItems="flex-start" justifyContent="space-between">
        {
          typeof title === 'string'
           ? (
                <Typography color="neutralLowDark" size="XS" fontWeight={500}>
                  {title}
                </Typography>
              )
           : title
        }

        {
          description && typeof description === 'string'
            ? (
              <Flex style={{ gap: '4px' }}>
                <Typography
                  color='neutralLow'
                  size='XXXS'
                  fontWeight={400}
                  lineHeight='LG'
                >
                  {description?.toString().split('hl')[0]} {' '}
                  <Typography
                    color='primaryMedium'
                    size='XXXS'
                    fontWeight={400}
                  >
                    {getHighlightedText()}
                    </Typography> {description?.toString().split('hl')[1]}
                </Typography>
              </Flex>
            )
            : description
        }

        <Button size='SM' hierarchy='ghost' {...buttonProps}>
          <Typography color='primaryMedium' size="XXXS">
            Gerenciar assinatura
          </Typography>
        </Button>
      </Flex>

      <css.IconContainer onClick={onCloseClick}>
        <Icon 
          iconId='close'
          stroke='neutralLowMedium'
          size='XXS'
          height='10px'
        />
      </css.IconContainer>
    </css.Container>
  );
}