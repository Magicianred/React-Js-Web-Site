import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h1 style={{color:"crimson"}}>FOOTER</h1>
            <Link className="Li" to="/">HOME</Link>
            <Link className="Li" to="/about">ABOUT</Link>
            <Link className="Li" to="/contact">CONTACT</Link>
            <Link className="Li" to="/work">SKILLS</Link>
        </footer>
    )
}

export default Footer
