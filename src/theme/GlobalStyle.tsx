import { createGlobalStyle } from 'styled-components'
import { InterMedium, InterRegular, InterSemiBold } from '../assets/fonts'

console.log('inter med', !!InterMedium)

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'InterRegular';
    src: url('/fonts/Inter-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'InterMedium';
    src: url('/fonts/Inter-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'InterSemiBold';
    src: url('/fonts/Inter-SemiBold.ttf') format('truetype');
  }

  * {
    font-family: 'InterMedium';
  }
`
