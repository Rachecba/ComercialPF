import React from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import { Row } from "reactstrap"
import { Props } from "./SearchBar.interface"

import * as Style from './SearchBar.style'

function SearchBar({ search, current }: Props) {

    const handleChange = (event: any) => {
        const { value } = event.currentTarget
        search(value.toLowerCase())
    }

    const concatName = () => {
        const toUpper = current.charAt(0).toUpperCase() + current.slice(1)

        if (current === 'tintos' || current === 'blancos' || current === 'rosados')
            return `Buscar producto en Vinos ${toUpper}`
        else
            return `Buscar producto en ${toUpper}`
    }

    return (
        <div>
            <Style.Container>
                <Row>
                    <Style.SearchInput>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text><i className="fas fa-search"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder={concatName()}
                                aria-label="Buscar"
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Style.SearchInput>
                </Row>
            </Style.Container>
        </div>
    )
}

export default SearchBar