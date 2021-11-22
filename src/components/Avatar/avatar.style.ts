import styled from 'styled-components'
import { iAvatar, iAvatarSizes } from '.'

const AVATAR_DETAILS_WITH_ON_COLOR: Record<string, string> = {
  textColor: 'primaryLightest',
  background: 'primaryDark'
}
const AVATAR_DETAILS_WITHOUT_ON_COLOR: Record<string, string> = {
  textColor: 'primary',
  background: 'primaryLightest'
}

const AVATAR_SIZE_BASED_ON_SIZE: Record<iAvatarSizes, string> = {
  LG: '64px',
  MD: '40px',
  SM: '24px',
}

const FONT_SIZE_SIZE_BASED_ON_SIZE: Record<iAvatarSizes, string> = {
  LG: '32px',
  MD: '24px',
  SM: '16px',
}

export const Wrapper = styled.div<iAvatar>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};
  height: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};

  color: ${({ theme, onColor }) => onColor ? theme.colors[AVATAR_DETAILS_WITH_ON_COLOR.textColor] : theme.colors[AVATAR_DETAILS_WITHOUT_ON_COLOR.textColor]};
  background-color: ${({ theme, onColor }) => onColor ? theme.colors[AVATAR_DETAILS_WITH_ON_COLOR.background] : theme.colors[AVATAR_DETAILS_WITHOUT_ON_COLOR.background]};

  background-image: ${({ image }) => image && `url(${image})`};
  background-size: ${({ image }) => image && `cover`};
  /* box-shadow: ${({ theme }) => theme.shadow.Level1}; */

  font-size: ${({ size }) => size && FONT_SIZE_SIZE_BASED_ON_SIZE[size]};

  border-radius: ${({ theme }) => theme.borderRadius.Circular};

  pointer-events: none;
`

export const Badge = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;

  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.Circular};
  
  background: ${({ theme }) => theme.colors.helper};
`
