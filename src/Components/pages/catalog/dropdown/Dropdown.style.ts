import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    button{
        background-color: #343434 !important;
        border-color: #343434 !important;
        border-radius: 30px;
        font-weight: bold;
        
        &:hover, &:active, &:focus{
            background-color: #343434;
            border-color: #343434;
            box-shadow: 0 0 0 0.2rem rgba(222, 201, 176, 0.5) !important;
        }
        
    }

     .dropdown-menu {
        background-color: black !important;
        border: 2px solid #343434 !important;
        border-radius: 8px !important;
        min-width: 6rem !important;
    }

    .dropdown-item {
        color: whitesmoke !important;
        &:hover {
            color: #DEC9B0 !important;
            background-color: black !important;
            font-style: italic !important;
            font-weight: bold !important;
        }
    }
`

export const Wines = styled.div`
    display: inline-block;

`

export const Liquor = styled.div`
    display: inline-block;
`