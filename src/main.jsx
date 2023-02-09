import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './assets/components/Home/Home'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />}/>
        <Route path='/Home' element = {<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
