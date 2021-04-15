import React from 'react'
import "./about.css";
import resim from "./indir.jpg"

function ABOUT() {
    return (
        <div className="about">
            <div className="about-bg">
                <h2 style={{fontSize:"40px", color:"white"}}>ABOUT ME</h2>
                <div className="alan">
                    <div className="resim">
                        <img className="foto" src={resim} alt="foto" />
                    </div>
                    <div className="bilgi">
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ABOUT;
