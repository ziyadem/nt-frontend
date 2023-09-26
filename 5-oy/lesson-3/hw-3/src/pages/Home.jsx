import React from 'react'

const Home = () => {
  return (
    <section className='home'>
        <div className="container d-flex home-body justify-content-between align-items-center flex-wrap">
            <div className='div '>
              {/* <img className='ramka' src="/ramka.png" alt="" /> */}
              <div className='card-div'>
                <h1>A Great App Makes Your Life Better</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <h2>Download App Now</h2>
                <img className='text-dark' src='/play.png' alt="" />
                <img src='/appstore.png' alt="" />

              </div>
            </div>
            <div className='div'>
                <img className='w-100' src='/tel.png' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Home
