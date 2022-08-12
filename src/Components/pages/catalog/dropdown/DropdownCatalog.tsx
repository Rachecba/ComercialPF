import React from 'react'
import { Dropdown } from "react-bootstrap";
import { Col, Row } from 'reactstrap'
import { Props } from './Dropdown.interface';
import * as Style from './Dropdown.style'

function DropdownCatalog({ setSelected }: Props) {

    const handleSelect = (event: any) => {
        const { text } = event.currentTarget
        setSelected(text.toLowerCase())
    }

    return (
        <div>
            <Row>
                <Style.Container>
                    <Col sm='6'>
                        <Style.DropdownContainer>
                            <Style.Wines>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Vinos
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleSelect}>Tintos</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Rosados</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Blancos</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Style.Wines>
                            <Style.Liquor>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Licores
                            </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleSelect}>Ron</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Ginebra</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Tequila</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Vodka</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Licor</Dropdown.Item>
                                        <Dropdown.Item onClick={handleSelect}>Brandy</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Style.Liquor>
                        </Style.DropdownContainer>
                    </Col>
                </Style.Container>
            </Row >
        </div >
    )
}

export default DropdownCatalog