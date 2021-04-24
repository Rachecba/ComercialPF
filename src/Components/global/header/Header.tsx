import React, { useState } from "react";
import {
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Col,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

import * as Styled from './Header.style'
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Col sm={12}>
        <Styled.Logo>
          <h1>
            Comercial PF
          </h1>
        </Styled.Logo>
      </Col>
      <Row>
        <Styled.NavBar>
          <Navbar expand="md">
            <NavbarToggler onClick={toggle} ><span><i className="fas fa-ellipsis-h"></i>
            </span></NavbarToggler>
            <Collapse isOpen={!isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" activeClassName="current" exact={true} className='nav-link'>Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/us" activeClassName="current" className='nav-link'>Nosotros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/product" activeClassName="current" className='nav-link'>Productos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact" activeClassName="current" className='nav-link'>Contáctenos</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Styled.NavBar>
      </Row>
    </div>
  );
};

export default Header;
