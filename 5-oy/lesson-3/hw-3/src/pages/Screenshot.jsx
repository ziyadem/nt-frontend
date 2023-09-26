import React from 'react'
import Carausell from '../components/Carausel'

const Screenshot = () => {
  return (
    <>
     <section className='costumer'>
          <h2 className='text-light'>Our Happy Customers</h2>
           <div className='d-flex justify-content-center'>
            <p className='future-p text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
           </div>

           <div className="carousel-costumer p-5">

           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active  ">
      <div className=' m-5 px-5 d-flex justify-content-center'>
        <div className='carousel-style'>
                <div className='d-flex justify-content-center'>
                <img className='img-c' src="/Profile4.png" alt="" />
                </div>
                <h3 className='text-center'>Ann Lubin</h3>
                <h4 className='text-center'>Co-Founder</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat..</p>

        </div>
 
      </div>
    </div>
    <div class="carousel-item ">
    <div className=' m-5 px-5 d-flex justify-content-center'>
        <div className='carousel-style'>
                <div className='d-flex justify-content-center'>
                <img src="/Profile2.png" alt="" />
                </div>
                <h3 className='text-center'>Craig Gouse</h3>
                <h4 className='text-center'>UI/UX Designer</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>

        </div>
 
      </div>
    </div>
    <div class="carousel-item ">
    <div className=' m-5 px-5 d-flex justify-content-center'>
        <div className='carousel-style'>
                <div className='d-flex justify-content-center'>
                <img src="/Profile3.png" alt="" />
                </div>
                <h3 className='text-center'>Jocelyn Septimus</h3>
                <h4 className='text-center'>Website developer</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>

        </div>
 
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden previous">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           </div>
    </section>
    <section className="screenshot container">
        
          <h2>Our reative team</h2>
           <div className='d-flex justify-content-center'>
            <p className='future-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
           </div>
           <div className="d-flex justify-content-between my-5">
              <div className="screenshot-card p-4">
                <div className='d-flex justify-content-center'>
                <img src="/Profile1.png" alt="" />
                </div>
                <h3 className='text-center'>Carla Press</h3>
                <h4 className='text-center'>App Developer</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                <div className='d-flex justify-content-between px-5'>
                        <a className='screen-icon' href="#"><img src="/facebook.png" alt="" /></a>
                        <a className='screen-icon'  href="#"><img src="/insta.png" alt="" /></a>
                        <a className='screen-icon' href="#"><img src="/twiter.png" alt="" /></a>
                        <a className='screen-icon' href="#"><img src="/youtube.png" alt="" /></a>
                </div>
              </div>
              <div className="screenshot-card p-4">
                <div className='d-flex justify-content-center'>
                <img src="/Profile2.png" alt="" />
                </div>
                <h3 className='text-center'>Craig Gouse</h3>
                <h4 className='text-center'>UI/UX Designer</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                <div className='d-flex justify-content-between px-5'>
                        <a className='screen-icon' href="#"><img src="/facebook.png" alt="" /></a>
                        <a className='screen-icon'  href="#"><img src="/insta.png" alt="" /></a>
                        <a className='screen-icon' href="#"><img src="/twiter.png" alt="" /></a>
                        <a className='screen-icon' href="#"><img src="/youtube.png" alt="" /></a>
                </div>
              </div>
              <div className="screenshot-card p-4">
                <div className='d-flex justify-content-center'>
                <img src="/Profile3.png" alt="" />
                </div>
                <h3 className='text-center'>Jocelyn Septimus</h3>
                <h4 className='text-center'>Website developer</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                <div className='d-flex justify-content-between px-5'>
                        <a className='screen-icon' href="#"><img src="/facebook.png" alt="" /></a>
                        <a className='screen-icon'  href="#"><img src="/insta.png" alt="" /></a>
                        <a className='screen-icon' href="#"><img src="/twiter.png" alt="" /></a>
                        <a className='screen-icon' href="#"><img src="/youtube.png" alt="" /></a>
                </div>
              </div>
           </div>
    </section>
    <Carausell/>
   
    </>
  )
}

export default Screenshot
