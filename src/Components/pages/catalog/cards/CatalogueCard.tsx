import React from 'react'
import { Link } from 'react-router-dom'
import { Props } from './CatalogueCard.interface'
import * as Style from './CatalogueCard.style'

function CatalogueCard({ image, title, price, sale }: Props) {

  return (
    <Style.CardContainer>
      <Style.Product>
        <Link to="#">
          <img src={image} alt='' />
        </Link>
      </Style.Product>
      <Style.Caption>
        <h5>{title}</h5>
        <h6>	₡{price} <span><i className="fas fa-tag"></i></span></h6>
      </Style.Caption>
    </Style.CardContainer>
  )
}

export default CatalogueCard