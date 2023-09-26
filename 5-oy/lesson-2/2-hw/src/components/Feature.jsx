import React from "react";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";

function Feature(){
    return(
       <>
       <section className="feature">
           <p className="text-center">FEATURE</p>
           <h2 className="text-center">The benefit of using our platform</h2>
           <div className="feature-body d-flex container">
           <div className="feature-card px-4">
               <img src={icon1} alt="" />
               <h4>Professional & Fast</h4>
               <p>Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you.</p>
           </div>
           <div className="feature-card px-4">
               <img src={icon2} alt="" />
               <h4>Professional & Fast</h4>
               <p>Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you.</p>
           </div>
           <div className="feature-card px-4">
               <img src={icon3} alt="" />
               <h4>Professional & Fast</h4>
               <p>Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you.</p>
           </div>

           </div>
       </section>
       
       </>
    )
}

export default Feature;