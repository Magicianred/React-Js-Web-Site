import React from 'react'
import  "./Contact.css";

function Contact() {
    return (
        <div className="contact">
            <h2 style={{color:"white",fontSize:"35px"}}>CONTACT</h2>
            <form onSubmit={() => alert("Gonderiliyor")}>
                <input type="email" placeholder="place email" required/>
                <input type="password" placeholder="place password" required/>
                <button type="submit" className="button">SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact
