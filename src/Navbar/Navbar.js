import React ,{ useState } from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";



function Navbar() {
    const [navbar ,setNavbar] = useState(false);

    const changeColor = () =>{
        if(window.scrollY >= 50){
            setNavbar(true)
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeColor);
    return (
        <>
        <div className="header">
            <nav className={navbar ? "navbar active" : "navbar"}>
                <h1 style={{marginLeft:"10px"}}>LESSCHAR</h1>
                <ul>
                    <li><Link className="Link" to="/">HOME</Link></li>
                    <li><Link className="Link" to="/about">ABOUT</Link></li>
                    <li><Link className="Link" to="/work">SKILLS</Link></li>
                    <li><Link className="Link" to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="description">
                <h2 style={{fontSize:"55px"}}>Hİ I'M LESSCHAR</h2>
            </div>
        </div>
        </>
    )
}

export default Navbar
