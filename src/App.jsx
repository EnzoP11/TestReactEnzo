import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'

function App() {
  
    const feliksZemdegs = {
      name: 'Feliks Zemdegs',
      recordSingle : 4.16,
      recordAverange : 5.53,
      image :"https://images.thewest.com.au/publication/C-8421489/c2762e016da3b9684efc8bcd6030608b91a5a378.jpg"
    }
    const tymon = {
      name: 'Tymon Kolasiński',
      recordSingle : 3.66,
      recordAverange : 4.74,
      image :"https://i0.wp.com/efe.com/wp-content/uploads/2024/07/3CUBO-RUBIK.jpg?fit=1920%2C1280&ssl=1"
    }
  return (
    <>
    <User {...feliksZemdegs}/>
    <User {...tymon}/>
      
    </>
  )
}

export default App
