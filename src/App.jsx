import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Record from './components/Record'
import Product from './components/Product'
import {Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Record/>}></Route>
      <Route path='/add' element={<Product/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
