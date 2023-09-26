import React from 'react'

const Carausel = () => {
  return (
    <section className='m-5 pb-5'>
         

         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className="d-flex justify-content-center">
          <img src="/carousel1.png" class="d-block " alt="..." />
        </div>
    </div>
    <div class="carousel-item">
        <div className="d-flex justify-content-center">
          <img src="/two-download.png" class="d-block " alt="..." />
        </div>
    </div>
    <div class="carousel-item">
        <div className="d-flex justify-content-center">
             <img src="/carousel3.png" class="d-block " alt="..." />
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
  )
}

export default Carausel
