import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import { AppRouter } from './router'
import GlobalStyle from '../style/globalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <AppRouter />
  </StrictMode>,
)