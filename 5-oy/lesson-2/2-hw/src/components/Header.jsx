import React from "react";
import Logo from "../assets/images/Logo.png";


function Header(){
    return (
        <header>
            <nav className="container d-flex justify-content-between align-items-center py-4">
            <img src={Logo} alt="" />
            <ul className="d-flex gap-5 align-items-center ">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About As</a>
                </li>
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#">For Freelancer</a>
                </li>
                <li>
                    <button>Get Started</button>
                </li>
            </ul>

            </nav>
        </header>
    )
}

export default Header;