import React from 'react'
import {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
const [count, setCount]=useState(0);
function handelClickPlus(){
    setCount(count +1)
}
function handelClickMinus(){
    setCount(count - 1)
}



  return (
    <div>
      <Header/>
      <button onClick={handelClickMinus}>-</button>
      {count}
      <button onClick={handelClickPlus}>+</button>
      
      <Footer/>
    </div>
  )
}

export default Home
