import React from "react";
import Logo from "../assets/images/Logo.png"
import instagram from "../assets/images/instagram.svg"
import path from "../assets/images/path.svg"
import twiter from "../assets/images/twiter.svg"
import youtub from "../assets/images/youtub.svg"



function Footer(){
    return(
        <footer>
            <div className="d-flex container justify-content-between">
            <div className="d-flex flex-column gap-3">
                <img id="logo" src={Logo} alt="" />
                <div className="d-flex gap-2 foter-img">
                    <img src={instagram} alt="" />
                    <img src={path} alt="" />
                    <img src={twiter} alt="" />
                    <img src={youtub} alt="" />
                </div>
                <p>Copyright © 2022 Wakanda. All rights reserved</p>
            </div>
            <div className="d-flex gap-5">
                <div>
                    <ul>
                    <h4>Company</h4>
                        <li><a href="#">About as</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">For freelancer</a></li>                      
                    </ul>
                </div>
                <div>
                    <ul>
                    <h4>Support</h4>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Status</a></li>                      
                    </ul>
                </div>
                <div>
                    <h4>Subscribe to our newsletter</h4>
                    <form action="#">
                        <input type="email" placeholder="Your email address" />
                    </form>
                </div>

            </div>

            </div>
        </footer>

    )
}

export default Footer;