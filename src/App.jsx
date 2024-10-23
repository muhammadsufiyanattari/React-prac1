import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let sum=2+10;
  let min=20-10;
  let arr=['muhammad ','sufiyan'];

  return (


// div us enahi karen ge empty markup yani empty element ko return kare ge
    <>
  <div className="main">

  {/* Is tarhan out put sahi aye ga */}
  <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 

      // jitne bhi attributes hen us ko camelCase me likhen ge jsx attribute class nahi className 
      // den ge Q Ke class eik key word he
      className="photo"
     />
    <ul className='myul'>
      <li>Invent new traffic lights </li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
      <li><span className='mySpan'>Sum</span> :{sum}</li>
      <li><span className='mySpan'>Min</span> :{min}</li>
      <li><span className='mySpan'>FirstName</span> :{arr[0]}</li>
      <li><span className='mySpan'>lastName</span> :{arr[1]}</li>
    </ul>


  </div>

{/*
   agar hum text close nahi karen ge to error aye ga
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   >
  <ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
  
</> */}



  </>
  )
}

export default App
