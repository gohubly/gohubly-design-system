import styled from 'styled-components'
import { iAvatar, iAvatarSizes } from '.'
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss'

const AVATAR_DETAILS_WITH_ON_COLOR: Record<string, string> = {
  textColor: 'primaryLightest',
  background: 'primaryDark'
}
const AVATAR_DETAILS_WITHOUT_ON_COLOR: Record<string, string> = {
  textColor: 'primary',
  background: 'primaryLightest'
}

const AVATAR_SIZE_BASED_ON_SIZE: Record<iAvatarSizes, string> = {
  XS: '32px',
  SM: '36px',
  MD: '40px',
  LG: '48px',
  XL: '64px'
}

const FONT_SIZE_SIZE_BASED_ON_SIZE: Record<iAvatarSizes, string> = {
  XS: '14px',
  SM: '16px',
  MD: '18px',
  LG: '22px',
  XL: '24px'
}

const LINE_HEIGHT_SIZE_BASED_ON_SIZE: Record<iAvatarSizes, string> = {
  XS: '16px',
  SM: '18px',
  MD: '20px',
  LG: '28px',
  XL: '32px'
}

export const Wrapper = styled.div<iAvatar>`
  ${defaultCss};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};
  min-width: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};
  height: ${({ size }) => size && AVATAR_SIZE_BASED_ON_SIZE[size]};

  color: red;
  color: ${({ OnColor }) => theme.colors[OnColor ? AVATAR_DETAILS_WITH_ON_COLOR.textColor : AVATAR_DETAILS_WITHOUT_ON_COLOR.textColor]};
  background-color: ${({ OnColor }) => theme.colors[OnColor ? AVATAR_DETAILS_WITH_ON_COLOR.background : AVATAR_DETAILS_WITHOUT_ON_COLOR.background]};

  background-image: ${({ image }) => image && `url(${image})`};
  background-size: ${({ image }) => image && `cover`};
  box-shadow: ${() => theme.shadow.Level1};

  font-size: ${({ size }) => size && FONT_SIZE_SIZE_BASED_ON_SIZE[size]};
  line-height: ${({ size }) => size && LINE_HEIGHT_SIZE_BASED_ON_SIZE[size]};

  border-radius: 2px;
  border-radius: ${() => theme.borderRadius.Circular};

  user-select: none;
`

export const Badge = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;

  width: 8px;
  height: 8px;
  border-radius: ${() => theme.borderRadius.Circular};
  
  background: red;
  background: ${() => theme.colors.helper};
`
