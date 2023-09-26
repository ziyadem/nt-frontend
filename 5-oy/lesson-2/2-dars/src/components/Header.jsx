import React from "react";
import imgages from "../assets/img/img.png";

function Header(){
    return( 
            <header>
                <div className="container">
                <nav className="d-flex justify-content-between p-4  ">
                    <a className="text-white " href="#">Start Bootstrap</a>
                    <div className="d-xl-flex gap-5 d-none">
                        <a className="text-white " href="#home">Home</a>
                        <a className="text-white-50 a" href="#about">About</a>
                        <a className="text-white-50 a" href="#contact">Contact</a>
                        <a className="text-white-50 a" href="#services">Services</a>
                            
                    </div>
                    <div className=" d-xl-none border border-3 p-1 bg-dark">
                        <img className="w-10" src={imgages} alt="" />
                    </div>
        
                </nav>
                </div>
        </header>
    );
}

export default Header;