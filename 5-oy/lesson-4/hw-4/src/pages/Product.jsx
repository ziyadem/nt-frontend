import React from 'react'
import {useState, useEffect} from 'react'
import Card from '../components/Card'

const Product = () => {
        const [product,setProduct]=useState([]);
        useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))

        },[])

  return (
    <>
    <div className='d-flex justify-content-center flex-wrap container'>
     {product.length===0 ? <img src="/loading.gif"/> : product.map(p => <Card producte={p}/>)}
    </div>
    </>
  )
}

export default Product

