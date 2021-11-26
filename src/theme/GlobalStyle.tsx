import { createGlobalStyle } from 'styled-components'
import { InterMedium, InterRegular, InterSemiBold } from '../assets/fonts'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'InterRegular';
    src: url(${InterRegular}) format('truetype');
  }
  
  @font-face {
    font-family: 'InterMedium';
    src: url(${InterMedium}) format('truetype');
  }

  @font-face {
    font-family: 'InterSemiBold';
    src: url(${InterSemiBold}) format('truetype');
  }

  * {
    font-family: 'InterMedium';
  }
`
