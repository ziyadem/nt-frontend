import React from 'react'

const Download = () => {
  return (
    <section className="download-section container mb-5 d-flex justify-content-between">
      <div className='one-download'>
      <h2>Download App Now</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
      <div>
        <img className='me-5' src="/play.png" alt="" />
        <img src="appstore.png" alt="" />
      </div>
      <div className='d-flex justify-content-between mt-5'>
        <div className='download-card '>
          <img src="/download-fil.png" alt="" />
          <h3 className='pt-3'>59865</h3>
          <h4>DOWNLOAD</h4>
        </div>
        <div className='download-card '>
          <img src="/like.png" alt="" />
          <h3 className='pt-3'>29852</h3>
          <h4>LIKE</h4>
        </div>
        <div className='download-card '>
          <img src="/star-fill.png" alt="" />
          <h3 className='pt-3'>1500</h3>
          <h4>5 STAR RATING</h4>
        </div>
      </div>
      </div>
      <div className="two-download">
        <img src="/two-download.png" alt="" />
      </div>
    </section>
  )
}

export default Download
