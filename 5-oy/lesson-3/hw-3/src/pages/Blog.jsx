import React from 'react'

const Blog = () => {
  return (
    <section className="blog mt-5 mb-5 container">
      <h2>Our recent blog</h2>
      <div className='d-flex justify-content-center'>
            <p className='future-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
           </div>
      <div className=" d-flex flex-wrap">
        <div className="blog-card p-2 mb-5">
          <img src="/blog1.png" alt="" />
          <div className="card-body px-3">
            <h3>The Snap Pixel: How It Works and How to Install </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="blog-card p-2 mb-5">
          <img src="/blog2.png" alt="" />
          <div className="card-body px-3">
            <h3>Global Partner Solutions: A Partnership of Innovation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div className="blog-card p-2 mb-5">
          <img src="/blog3.png" alt="" />
          <div className="card-body px-3">
            <h3>2021: An opportunity for Snapchatters to start fresh</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
