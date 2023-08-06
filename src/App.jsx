import React from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import './App.css'
import Layout from './Layout/Layout'
import Hero from './components/hero'
import Promo from './components/Promo'
import Shop from "./components/Shop"
// import Features from "./components/Features"

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route  element={<Layout/>} >
              <Route path='/' element={<Hero />}/>
              <Route path='/shop' element={<Shop />}/>
            </Route>

            
          </Routes>
        </BrowserRouter>
      <Promo />
    </>
  )
}

export default App