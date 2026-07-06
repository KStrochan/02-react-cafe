import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Ignore missing type declarations for this side-effect global stylesheet import
// @ts-expect-error
import 'modern-normalize'
import App from './components/App/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)