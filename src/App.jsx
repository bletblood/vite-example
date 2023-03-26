import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'
import ErrorMessage from 'components/ErrorMessage'
import Home from 'pages/Home'

import './App.scss'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<ErrorMessage />} /> 
      </Route>
    </Routes>
  )
}

export default App
