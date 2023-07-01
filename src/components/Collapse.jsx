import React, { useState, useRef } from "react"
import arrow_up from "../assets/arrow_up.png"
import arrow_down from "../assets/arrow_down.png"

export default function Collaspe({title, content}) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)

    const handleToggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div
                onClick={handleToggleCollapse}
                className={`collapse ${isOpen ? "open" : ""}`}>
                <p>{title}</p>
                <img src={isOpen ? arrow_up : arrow_down}
                    alt={isOpen ? "fermer" : "ouvrir"} />
            </div>
        {isOpen && (
            <div
                ref={contentRef}
                className={`collapsible-content ${isOpen ? "open" : ""}`}>
                <p>{content}</p>
            </div>
        )}
        </div>
    )
}