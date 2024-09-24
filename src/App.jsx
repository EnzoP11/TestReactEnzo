import { sculptureList } from './data.js';
import {useState} from 'react'

export default function Gallery() {
  const [index, setIndex] = useState

  function handleClick() {
    setIndex(index + 5)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Suivant
      </button>
      <h2>
        <i>{sculpture.name} </i>
        par {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} sur {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}







/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'

function App() {
  
    
  return (
    <>
    <User/>
      
    </>
  )
}*/

/*function App() {
  
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

export default App*/
