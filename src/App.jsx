import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Getusers from './Pages/Getusers'
import AddUser from './Pages/AddUser'
import UpdateUser from './Pages/UpdateUser'
import "./style.css"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Getusers/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/Update/:id' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App

