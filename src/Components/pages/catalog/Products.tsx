import React from "react";
import { Col, Row} from "reactstrap";
import SearchBar from "../../global/search/SearchBar";
import CatalogueCard from "./cards/CatalogueCard";
import DropdownCatalog from "./dropdown/DropdownCatalog";
import { catalogoVinos, catalogoRon, catalogoVodka, catalogoGin, catalogoTequila, catalogoLicores, catalogoBrandy } from '../../../utils/constants/winesCatalog'

import * as Style from './Products.style'

function Products() {
  const showProducts = (product: any, index: number) => {
    if (product.imagen) {
      return (
        <Col sm='12' md='6' lg='4'>
          <CatalogueCard
            title={product.nombre}
            price={product.precioUnitario}
            image={product.imagen}
            key={index}
          />
        </Col>
      )
    }
  }

  const showEmpty = () => {
    return (
      <Style.Empty>
        <h3>NO HAY PRODUCTOS DISPONIBLES</h3>
      </Style.Empty>
    )
  }

  const allProducts = catalogoVinos.concat(catalogoRon, catalogoGin, catalogoLicores, catalogoTequila, catalogoVodka, catalogoBrandy)

  const [typeFilter, setTypeFilter] = React.useState('tintos');

  const [searchFilter, setSearchFilter] = React.useState('');

  console.log(allProducts)

  return (
    <div>
      <DropdownCatalog setSelected={setTypeFilter} />
      <SearchBar search={setSearchFilter} current={typeFilter} />
      <Style.CatalogueContainer>
        <Row>
          {allProducts.filter((item) => {
            if (typeFilter)
              return item.tipo.includes(typeFilter)

            return true
          }).filter((element) => {
            if (typeFilter)
              return element.nombre.toLowerCase().includes(searchFilter)

            return true
          }).map((product, index) =>
            showProducts(product, index)
          )}
        </Row>
      </Style.CatalogueContainer>
    </div>
  )
}

export default Products