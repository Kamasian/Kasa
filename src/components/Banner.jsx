import React from "react"
import { useLocation } from "react-router-dom"
import bannerHome from "../assets/home_pic.jpg"
import bannerAbout from "../assets/about_pic.jpg"

export default function Banner() {
    const location = useLocation()

    return (
        <section className="banner">
            <img src={location.pathname === "/" ? bannerHome : bannerAbout} alt="Bannière" />
            {location.pathname === "/" ? <h1>Chez vous, partout et ailleurs</h1> : ""}
        </section>
    )
}