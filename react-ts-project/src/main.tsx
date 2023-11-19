import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/css/index.less"
import { store } from "./store/store.tsx"
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App></App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)




