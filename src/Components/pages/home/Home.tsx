import React from "react"
import Slider from "./slider/slider"
import WhoWeAre from "./whoWeAre/whoWeAre"

function Home() {
    const wines = [
        {
            nombre: 'Corona de Aragon Crianza',
            precioUnitario: '5,900',
            litros: '750 ML',
            imagen: 'assets/wines/Corona-de-Aragon-Crianza.jpg',
        },
        {
            nombre: 'Castillo Monte La Reina Cuveé Privee',
            precioUnitario: '16,000',
            litros: '750 ML',
            imagen: 'assets/wines/Castillo-Monte-la-Reina-Cuvee-Privee.jpg',
        },
        {
            nombre: 'Sardá Reserva',
            precioUnitario: '8,000',
            litros: '750 ML',
            imagen: 'assets/wines/Sarda-Reserva.jpg',
        }
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