import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='p-5  footer-top'>
            
           <div className="container footer-email d-flex justify-content-between">
            <div className='d-flex gap-3 align-items-center'>
                <div className='foter-img d-flex align-items-center justify-content-center'>
                   <img  src="/email.png" alt="" />
                </div>
                <p>info@youremail.com</p>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <div className='foter-img d-flex align-items-center justify-content-center'>
                   <img  src="/phone.png" alt="" />
                </div>
                <p className='c'>+880 321 655 9985</p>
            </div>
           </div>
        </div>
        <div className="container">
        <div className=" d-flex justify-content-between">
            <div className='d-flex gap-5'>
                  <ul className='w-25'>
                    <li><h2>LOGO</h2></li>
                    <li><p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p></li>
                    <li className='d-flex justify-content-between'>
                        <a href="#"><img src="/facebook.png" alt="" /></a>
                        <a href="#"><img src="/insta.png" alt="" /></a>
                        <a href="#"><img src="/twiter.png" alt="" /></a>
                        <a href="#"><img src="/youtube.png" alt="" /></a>
                    </li>
                  </ul>
                  <ul>
                    <li><h2>QUICK LINK</h2></li>
                    <li><a className='text-reset text-decoration-none ' href="#">About</a></li>
                    <li><a className='text-reset text-decoration-none ' href="#">Screenshot</a></li>
                    <li><a className='text-reset text-decoration-none ' href="#">Feature</a></li>
                    <li><a className='text-reset text-decoration-none ' href="#">Blog</a></li>
                  </ul>
            </div>
            <div>
                <ul>
                    <li><h2>NEWS LETTER</h2> </li>
                    <li><p className='mb-4'>Subscribe our newsletter to get our latestupdate & news</p></li>
                    <div className='input'>
                        <input type="email" placeholder='Your email adres' />
                        <img className='otpravit' src="/opravi.png" alt="" />
                    </div>
                </ul>
            </div>
        </div>
          <div className='pt-1 bg-light'></div>
          <div className='text-center pt-3'>
          <img src="/line.png" alt="" />
          <p className='d-inline-block ps-3'>Copyright 2021 .Ojjomedia. All Right Reserved.</p>
            
          </div>

        </div>
    </footer>
  )
}

export default Footer
