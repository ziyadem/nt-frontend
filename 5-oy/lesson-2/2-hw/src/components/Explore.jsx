import React from "react";
import Graphio from "../assets/images/graphio.png"

function Explore(){
    return(
         <section className="explore">
            <div className="container d-flex expl align-items-center">
                <div>
                    <h2>Explore and hire talent from our platform</h2>
                    <p>We've got experts for every industry - all under one roof! You can find everything from WordPress developers to Graphic designers to copywriters and many more at Wakanda.</p>
                    <button>Explore now</button>
                </div>
                <div>
                    <img src={Graphio} alt="" />
                </div>
            </div>

         </section>
    )
}

export default Explore;