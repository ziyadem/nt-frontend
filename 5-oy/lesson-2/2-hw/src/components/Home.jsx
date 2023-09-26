import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.svg";
import img4 from "../assets/images/img4.svg";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.svg";

function Home(){
    return(
     <>
     <section className="home container d-flex align-items-center justify-content-between flex-wrap">
        <div className="home-name">
           <h1>Recruit top talented freelancer for your business</h1>
           <p>Connect you to thoudsands of talented freelancer from any industry. You can have the best people in just few simple steps.</p>
           <button>Get Started</button>
        </div>
        <div className="home-img">
            <img src={img1} alt="" />
        </div>
        <span className="d-flex w-100  justify-content-between gap-5">
            <a href="#">
              <img src={img2} alt="" />
            </a>
            <a href="#">
              <img src={img3} alt="" />
            </a>
            <a href="#">
              <img src={img4} alt="" />
            </a>
            <a href="#">
              <img src={img5} alt="" />
            </a>
            <a href="#">
              <img src={img6} alt="" />
            </a>
            
        </span>
     </section>
     </>
    )
}

export default Home;