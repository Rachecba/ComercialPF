import React from "react"
import { Col, Container, Row } from "reactstrap"
import { Link } from "react-router-dom";

import * as Style from './Footer.style'

function Footer() {
  return (
    <Style.Footer>
      <Container>
        <Row>
          <Col sm='12' md='4'>
            <h6>Accesos rápidos</h6>
            <Style.Links>
              <ul className="shortcuts">
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/product'}>Productos</Link></li>
                <li><Link to={'/contact'}>Contáctenos</Link></li>
              </ul>
            </Style.Links>
          </Col>
          <Col sm='6' md='4'>
            <h6>Contacto</h6>
            <Style.Links>
              <ul>
                <li><span><i className="fas fa-phone"></i></span> +506 2224-3645</li>
                <li><span><i className="fas fa-envelope"></i></span> hazel@comercialpf.com</li>
                <li><span><i className="fas fa-envelope"></i></span> tperez@comercialpf.com</li>
              </ul>
            </Style.Links>
          </Col>
          <Col sm='6' md='4'>
            <h6>Síguenos</h6>
            <Style.Icons>
              <ul>
                <li><a href='https://www.facebook.com/comercialpf'><i className="fab fa-facebook-f"></i></a></li>
                <li><a href='https://www.instagram.com/comercial.pf/?hl=es-la'><i className="fab fa-instagram"></i></a></li>
              </ul>
            </Style.Icons>
          </Col>
          <hr />
        </Row>
        <Row>
          <Style.Divide />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md='8' sm="6" xs="12">
            <Style.Copyright>
              <p>Copyright &copy; 2021 All Rights Reserved by
              Comercial PF.
            </p>
            </Style.Copyright>
          </Col>
        </Row>
      </Container>
    </Style.Footer>
  )
}

export default Footer