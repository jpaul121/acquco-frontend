import { App as AppComponent } from '../components/App'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ThemeProvider } from '@mui/material/styles'
import { useCustomTheme } from '../../theme'
import { CssBaseline } from '@mui/material'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

export const App = () => {
  const theme = useCustomTheme()
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppComponent />
      </ThemeProvider>
    </CacheProvider>
  )
}
