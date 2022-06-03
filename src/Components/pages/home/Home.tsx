import React from "react"
import Slider from "./slider/slider"
import WhoWeAre from "./whoWeAre/whoWeAre"

function Home() {
    const wines = [
        {
            nombre: 'Ginebra Jodhpur',
            precioUnitario: '11,000',
            litros: '700 ML',
            imagen: 'assets/wines/Ginebraa-Jodhpur.jpg',
        },
        {
            nombre: 'Vodka Krova',
            precioUnitario: '9,000',
            litros: '700 ML',
            imagen: 'assets/wines/Vodka-Krova.jpg',
        },
        {
            nombre: 'Ron Relicario Superior',
            precioUnitario: '15,000',
            litros: '700 ML',
            imagen: 'assets/wines/Ron-Relicario-Superior-700ml.jpg',
        },
    ]

    return (
        <div>
            <div>
                <Slider
                    wines={wines}
                />
            </div>
            <div>
                <WhoWeAre />
            </div>
        </div>
    )
}

export default Home