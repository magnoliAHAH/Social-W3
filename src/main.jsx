import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const myTheme = extendTheme({ config })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <ChakraProvider theme={myTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>

  </StrictMode>,
)
