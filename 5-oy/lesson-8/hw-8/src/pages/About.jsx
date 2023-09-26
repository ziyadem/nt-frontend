import React from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'

const About = () => {
let [token,setToken]=useState('')
useEffect(()=>{
  fetch('https://opentdb.com/api_token.php?command=request')
            .then(res=>res.json())
            .then(json=>setToken(json))
},[])
console.log(token.token);
fetch(`https://opentdb.com/api.php?amount=7&category=10&difficulty=easy&type=boolean&token=${token.token}`)
            .then(res=>res.json())
            .then(json=>console.log(json.results))
 
  return (
    <section className="about container mt-2 border rounded pt-3 pb-3">
      <div className="nomer-time d-flex justify-content-between">
        <h2 className='item'>Question No. <span>1</span> of 5</h2>
        <span className='d-flex '>
          <p className='itemtime'>00</p>
          <p className='itemtime time2'>00</p>
          <p className='itemtime time3'>00</p>
        </span>
      </div>
      <h4 className='item mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, dignissimos?</h4>
      <h6 className='text-secondary mt-5 answer pb-2'>Please choose one of the following answers:</h6>
      <div>
        <p className='item'>A. Lorem, ipsum.</p>
        <p className='item'>B. Lorem, ipsum.</p>
        <p className='item'>C. Lorem, ipsum.</p>
        <p className='item'>D. Lorem, ipsum.</p>
        <span className='w-100 d-flex justify-content-end'>

        <Link className='next d-flex align-items-center justify-content-center' to='/about'><h3>Next</h3><img  src="/play.jpg" alt="" /></Link>
        </span>
       
</div>
    </section>
  )
}

export default About
