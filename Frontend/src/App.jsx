import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slideshow from './components/Slideshow'
import { Home } from './components/Home/Home'
import {Navbar} from "./components/Navbar/Navbar"
import { Singlepost } from './components/Singlepost/Singlepost'
import { Login } from './components/Login/login'
import { Allroutes } from './router/Allroutes'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
      {/* <Slideshow/> */}
      <Navbar/>
      <Allroutes/>
      <Footer/>
      {/* <Login/> */}
      {/* <Singlepost/> */}
     
      {/* <Home/> */}
      </div>
     
    
  )
}

export default App
