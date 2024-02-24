import React from 'react'
import './App.css'
import Router from './config/Router'
import Card from './components/Card'
import MenuAppBar from './components/navbar'

const App = () => {
  return (
    <div>
      <MenuAppBar />
      <Router />

    </div>
  )
}

export default App