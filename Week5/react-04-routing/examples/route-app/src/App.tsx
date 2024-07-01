import './App.css'
import NavBarView from './react-components/NavBarView'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './react-components/AppRoute'

function App() {

  return (
    <BrowserRouter>
    <h1>react route</h1>
    <NavBarView/>
    <AppRoute/>
    </BrowserRouter>
  )
}

export default App
