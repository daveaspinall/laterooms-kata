import React from 'react'
import { ThemeProvider } from 'styled-components'

import HotelPage from './pages/HotelPage'

import theme from '../styles/settings/theme'
import GlobalStyle from '../styles/generic/global'

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <HotelPage />
    </React.Fragment>
  </ThemeProvider>
)

export default App
