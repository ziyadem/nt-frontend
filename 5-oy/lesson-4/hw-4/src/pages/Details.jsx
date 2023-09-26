import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Details = () => {
        const {productId}=useParams();
        const [newCard,cardRender]=useState([]);
useEffect(()=>{
    
            fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>cardRender(json))

},[])

     return (
         
      <div className="card mb-3 container m-5 p-5">
      <div className="row g-0">
          <div className="col-md-4">
          <img src={newCard.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">TITLE:{newCard.title}</h5>
              <p className="card-text">DESCRIPTION:{newCard.description}</p>
              <p className="card-text">PRICE:{newCard.price}</p>
              <p className="card-text"><small className="text-muted">CATEGORIA:{newCard.category}</small></p>
          </div>
          </div>
      </div>
</div>
     )
 }
export default Details
