import React from 'react'

const About = () => {
  return (
    <section className='about'>
        <h2>About Our App</h2>
        <div className='d-flex justify-content-center'>
        <p className='about-paragrf'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        </div>
        <div className='d-flex justify-content-between container'>
            <img className='about-img' src="/about.png" alt="" />
            <div className='about-card'>
                <div className=' d-flex gap-4 mb-5'>
                <img className='vector' src="/Vector.png" alt="" />
                <div>
                    <h3>Creative design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                </div>

                </div>
                <div className=' d-flex gap-4 mb-5'>
                <img className='vector' src="/Vector.png" alt="" />
                <div>
                    <h3>Creative design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                </div>

                </div>
                <div className=' d-flex gap-4 mb-5'>
                <img className='vector' src="/Vector.png" alt="" />
                <div>
                    <h3>Creative design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
                </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About
