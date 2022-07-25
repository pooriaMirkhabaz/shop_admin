import React from 'react'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { StylesProvider, jssPreset } from '@mui/styles'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
})

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5'
    },
    primary: {
      main: '#44148c'
    },
    secondary: {
      main: '#1e439c'
    }
  },
  typography: {
    fontFamily: 'iranSansLight'
  },
  direction: 'rtl'
})

const RTL = (props:React.PropsWithChildren<{}>) => {
  return (
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          {props.children}
        </ThemeProvider>
      </StylesProvider>
  )
}
export default RTL
