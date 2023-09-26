import React from "react";
import Wakandaimg from "../assets/images/Wakanda.png";

function Wakanda(){
    return(
        <section className="wakanda container"> 
            <img src={Wakandaimg} alt="" />
            <div>
                <h2>Wakanda is an easy platform to find talent</h2>
                <span>1</span> <p>Sign in to our website</p> <br />
                <span>2</span> <p>Fill out neccesary information</p> <br />
                <span>3</span> <p>Discover thoudsands of freelancers</p> <br />
                <span>4</span> <p>View freelancer’s profile and hire</p> <br />
                <span>5</span> <p>Complete payment & it’s time to work!</p>
            </div>
        </section>

    )
}

export default Wakanda;

