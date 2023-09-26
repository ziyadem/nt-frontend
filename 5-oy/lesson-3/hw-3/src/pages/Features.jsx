import React from 'react'

const Features = () => {
  return (
    <section className='feature'>
       <div className="container">
           <h2>App features</h2>
           <div className='d-flex justify-content-center'>
            <p className='future-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
           </div>
           <div className='d-flex justify-content-center mt-5'>
           <div className='future-top'>
            <img src="/comment.png" alt="" />
            <h3>Full free chat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
           </div>

          <div className="d-flex justify-content-between future-body ">
            <div className='d-flex flex-column justify-content-between w-25 future-hero '>
              <div className='future-item'>
                <div className="d-flex justify-content-end">
                    <img className='h3' src="/browser.png" alt="" />
                </div>
                  <h3 className='h3'>unlimiter features</h3>
                  <p className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='future-item'>
                <div className="d-flex justify-content-end">
                    <img className='h3' src="/torozi.png" alt="" />
                </div>
                  <h3 className='h3'>awsome ui design</h3>
                  <p className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
                
            <img className='future-img w-50' src="/feature.png" alt="" />

            <div className='d-flex flex-column justify-content-between w-25 future-hero'>
              <div className=' future-item'>
                <div>
                    <img className='h3' src="/cell-phone.png" alt="" />
                </div>
                  <h3>awsome ui design</h3>
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className=' future-item'>
                <div >
                    <img src="/eye-scanner.png" alt="" />
                </div>
                  <h3 >retina ready greaphics</h3>
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            </div>

           <div className='d-flex justify-content-center'>
           <div className='future-top'>
            <img src="/male.png" alt="" />
            <h3>24/7 support by real pepole</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
           </div>
       </div>
    </section>
  )
}

export default Features
