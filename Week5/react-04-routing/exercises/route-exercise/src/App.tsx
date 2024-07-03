import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavRoutes from './component/NavRoutes'
import DeviceList from './component/DeviceList'

function App() {

  return (
    <BrowserRouter>
    <h1>react route</h1>
    <DeviceList/>
    <NavRoutes/>
    </BrowserRouter>
  )
}

export default App
