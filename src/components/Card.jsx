import React from "react"
import { Link } from "react-router-dom"
import data from "../data/data.json"

export default function Card() {
    return (
        <section className="cardsContainer">
            {data.map((location, index) => (
                <Link to={"/fiche-logement/" + location.id}
                key={index + "" + location.id}>
                    <article>
                        <img src={location.cover}
                        alt={location.title}
                        />
                    <h2>{location.title}</h2>
                    </article>
                </Link>
            ))}
        </section>
    )
}