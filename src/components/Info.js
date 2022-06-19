import React from "react"
import Ledeysha from "../images/Ledeysha.jpeg"
export default function Info() {
    return (
        <div>
            <img src={Ledeysha} alt="Ledeysha"></img>
            <section className="info">

                <h1>Ledeysha Reid</h1>
                <h3>Frontend Developer & UX Designer</h3>
                <a href="https://ledyley.netlify.app/"><h4>ledyley.netlify</h4></a>
                <button className="email">Email</button>
            </section>
        </div>
    )
}   
