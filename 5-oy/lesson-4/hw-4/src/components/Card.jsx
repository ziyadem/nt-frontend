import React from 'react'
import {Link} from 'react-router-dom'

const Card = ( {producte}) => {
  return (
    
           <div className='w-25 p-4'>
                <div className="card card-product" >
                  <img src={producte.image} className="card-img-top img" alt="..." />
                  <div className="card-body">
                      <h5 className="card-title">{producte.title}</h5>
                      <div className='d-flex align-items-center py-3'>
                        <img src="/dolor.png" className='card-image' alt="" />
                        <p className="card-text">{producte.price}</p>
                      </div>
                      <Link to={`/product/${producte.id}`} className=" btn btn-primary w-100">More</Link>
                  </div>
              </div>
         </div>
  )
}

export default Card


   

    // id, title, price, description, category, image, rating