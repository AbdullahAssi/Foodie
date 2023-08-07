import React from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import './App.css'
import Layout from './Layout/Layout'
import Shop from "./components/Shop"
import Pages from "./Layout/Pages"
import Cart from "./components/Cart"
import { RecoilRoot } from "recoil"

function App() {

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Pages />} />
            <Route path='shop' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App