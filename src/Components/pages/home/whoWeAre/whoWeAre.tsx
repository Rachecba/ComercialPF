import React from "react"
import { Col, Row } from "reactstrap"

import * as Style from './whoWeAre.style'

function WhoWeAre() {
  return (
    <div>
      <Row>
        <Style.Block>
          <h2>¿Quiénes somos?</h2>
        </Style.Block>
      </Row>
      <Col sm="12">
        <Style.Intro>
          <p>
            <b>Comercial PF</b>, reúne las características que cualquier aficionado al vino quisiera encontrar: <b><i>”Relación Calidad-Precio,
                    botellas únicas, incomparables y otras simplemente normales”.</i></b>

                    Así somos en todos y cada uno de nuestros Vinos y Licores, además de nuestra gran pasión por ofrecer cada día un
                    esmerado servicio a nuestros mejores aliados: Nuestros Clientes.
                </p>
          <p>
            Creada en 1997, Comercial PF inició sus operaciones en Costa Rica con el deseo de llevar a sus clientes un producto
            con calidad en el increíble y cada vez más creciente mundo de los vinos, un precio moderado y un servicio de excelencia.

            Hoy llevamos a todo el país marcas de vinos de regiones de España, Alemania, Italia y de Chile. Licores de purísima
            calidad, botellas de colección (Licores), y Productos para el área de Hostelería y Restauración.
                </p>
          <Style.Slogan>
            <h2 className="slogan"><i>"Exclusivos, incomparables, variados… así somos en <b>Comercial PF.</b> Así son nuestros vinos y licores"</i></h2>
          </Style.Slogan>
        </Style.Intro>
      </Col>
    </div>
  )
}

export default WhoWeAre