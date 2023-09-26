import React from "react";
import Girl from "../assets/images/girl.png"


function Grow(){
    return(
       <section className="grow container d-flex align-items-center">
        <div>
            <img src={Girl} alt="" />
        </div>
        <div>
            <p>WHAT ARE YOU WAITING FOR?</p>
            <h2>Find the talent to get your business growing</h2>
            <button>Get Started</button>
        </div>
       </section>
    )
}

export default Grow;