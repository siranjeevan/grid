import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { DataProvider } from './Data/ContextAPI.jsx'
import Grid from './Components/DataGrid/Grid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DataProvider>
      <Grid />
  </DataProvider>
  </StrictMode>,
)
