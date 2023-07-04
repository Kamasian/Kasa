import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function Card({ location, index }) {
    return (
        <Link to={"/fiche-logement/" + location.id}
            key={index + "" + location.id}>
            <article>
                <img src={location.cover}
                    alt={location.title} />
                <h2>{location.title}</h2>
            </article>
        </Link>
    )
}

Card.propTypes = {
    location: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
}