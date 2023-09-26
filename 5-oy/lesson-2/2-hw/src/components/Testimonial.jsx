import React from "react";
import cara from "../assets/images/cara.png"
import albert from "../assets/images/albert.png"
import elanor from "../assets/images/elanor.png"
import esther from "../assets/images/esther.png"
import rebert from "../assets/images/rebert.png"
import kathrun from "../assets/images/kathrun.png"
import star from "../assets/images/star.png"


function Testimonial(){
    return(
        <>

        <section className="testimonial">
            <p className="p">TESTIMONIAL</p>
            <h2>See what they’re saying about us</h2>
            <div className="d-flex flex-wrap justify-content-between container">
                <div className="testimonial-card">
                <div className="test-div d-flex align-items-center gap-2">
                    <img className="img" src={cara} alt="" />
                    <div >
                        <p>Cara Bedford</p>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                 <p>I have been using Wakanda for quite some time now and I have to say it has been the best freelance hiring platform that I've used. The quality of freelancers on this site is very high and they're totally reliable. I would highly recommend it!</p>
                </div>
                <div className="testimonial-card">
                <div className="test-div d-flex align-items-center gap-2">
                    <img className="img" src={rebert} alt="" />
                    <div >
                        <p>Robert Fox</p>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                 <p>I’m so happy because the freelance talent we work with are more productive than we have ever thought. Recommend for people who want to find professional freelancer on this platform.</p>
                </div>
                <div className="testimonial-card">
                <div className="test-div d-flex align-items-center gap-2">
                    <img className="img" src={albert} alt="" />
                    <div >
                        <p>Albert Flores</p>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                 <p>I am happy to say that I have hired a couple of freelancers through Wakanda and they are high-quality ones. Working with them is not just easier; it has also been more effective. Having found a great freelance team, I cannot imagine switching to any other hiring platform.</p>
                </div>
                <div className="testimonial-card">
                <div className="test-div d-flex align-items-center gap-2">
                    <img className="img" src={kathrun} alt="" />
                    <div >
                        <p>Kathryn Murphy</p>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                 <p>One of the best things about Wakanda is that it really simplifies the process of finding and hiring people. The quality is good as well, every freelancer I've hired has been high-quality and professional. I would recommend this to anyone who needs a freelancer.</p>
                </div>
                <div className="testimonial-card">
                <div className="test-div d-flex align-items-center gap-2">
                    <img className="img" src={esther} alt="" />
                    <div >
                        <p>Esther Howard</p>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                 <p>One of the best things about Wakanda is that it really simplifies the process of finding and hiring people. The quality is good as well, every freelancer I've hired has been high-quality and professional. I would recommend this to anyone who needs a freelancer.</p>
                </div>
                <div className="testimonial-card">
                <div className="test-div d-flex align-items-center gap-2">
                    <img className="img" src={elanor} alt="" />
                    <div >
                        <p>Eleanor Pena</p>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                 <p>I have used a number of different freelance hiring platforms and none come close to Wakanda. The quality of the freelancers on here is top notch and it's easy to browse through the listings. I've been using it for six months now and I've found my perfect freelancer without any regrets whatsoever.</p>
                </div>

            </div>
        </section>
        </>

    )
}

export default Testimonial;