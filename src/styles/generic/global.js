import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import theme from '../settings/theme'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${theme.fonts.body};
    font-variation-settings: "wght" 400;
  }
`

export default GlobalStyle
