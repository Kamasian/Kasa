import React from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li>
                    <Link to={"/"}>Accueil</Link>
                </li>
                <li>
                    <Link to={"/a-propos"}>A Propos</Link>
                </li>
            </ul>
        </nav>
    )
}