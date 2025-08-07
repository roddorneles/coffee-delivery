import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { DefaultLayout } from './layouts/DefaultLayout'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'


export function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
