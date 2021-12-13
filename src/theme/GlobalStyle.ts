import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'InterRegular';
    src: url('/assets/Inter-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'InterMedium';
    src: url('/assets/Inter-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'InterSemiBold';
    src: url('/assets/Inter-SemiBold.ttf') format('truetype');
  }

  * {
    font-family: 'InterMedium', 'InterRegular';
  }
`