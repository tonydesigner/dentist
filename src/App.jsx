import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Agenda } from './pgs/Agenda'
import { Especial } from './pgs/Especial'
import { Home } from './pgs/Home'
import { Login } from './pgs/Log'
import { Menu } from './pgs/Menu'

function App() {
 
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/agenda' element={<Agenda/>}/>
        <Route path='/especial' element={<Especial/>}/>
      </Routes>
   </Router>
  )
}

export default App
