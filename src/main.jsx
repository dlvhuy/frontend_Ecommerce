import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from "react-redux"
import store from './redux/store/index.jsx'

import App from './App.jsx'
import Test from './test.jsx'
import RouteApp from './routers/index.jsx'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
      <RouteApp/>
      </BrowserRouter>
    </StrictMode>
  </Provider>
) 
