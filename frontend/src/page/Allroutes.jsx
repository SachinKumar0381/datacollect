import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Userdetail from './Userdetail'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/user" element={<Userdetail/>}/>
    </Routes>
  )
}

export default Allroutes