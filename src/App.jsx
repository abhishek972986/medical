import React from 'react'
import Home from './components/Home'
import {  Routes, Route} from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Emergency from './components/Emergency'
import Findbbeds from './components/Findbbeds'
import Ambulance from './components/Ambulance'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={ <Home/>}/>  
        <Route path='/aboutus' exact element={<Aboutus/>}/>
        <Route path='/emergency' exact element={<Emergency/>}/>
        <Route path='/beds' exact element={<Findbbeds/>}/>
        <Route path='/ambulance' exact element={<Ambulance/>}/>
      </Routes>

   

    </div>
  )
}

export default App
