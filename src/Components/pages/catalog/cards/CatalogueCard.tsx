import React from 'react'
import { Link } from 'react-router-dom'
import { Props } from './CatalogueCard.interface'
import * as Style from './CatalogueCard.style'

function CatalogueCard({ amount, image, title, price, sale }: Props) {

  return (
    <Style.CardContainer>
      <Style.Product>
        <Link to="#">
          <img src={image} alt='' />
        </Link>
      </Style.Product>
      <Style.Caption>
        <h5>{title}</h5>
        <h6>Caja de {amount} unidades</h6>
        <p>	₡{price} <span><i className="fas fa-tag"></i></span></p>
      </Style.Caption>
    </Style.CardContainer>
  )
}

export default CatalogueCard