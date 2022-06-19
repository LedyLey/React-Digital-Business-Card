import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faBehance, } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="footer-icons">
            <a href="https://github.com/LedyLey"><FontAwesomeIcon icon={faGithub} className="footerIcons-G" /></a>
            <a href="https://www.linkedin.com/in/ledeysha-reid-morris/"><FontAwesomeIcon icon={faLinkedin} className="footerIcons-L" /></a>
            <a href="https://www.behance.net/ledeyshareidm"><FontAwesomeIcon icon={faBehance} className="footerIcons-P" /></a>
        </footer>
    )
}