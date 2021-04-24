import styled from 'styled-components'

export const CatalogueContainer = styled.div`
    display: flex;
    text-align: center;
    margin-right: 10rem;
    margin-left: 10rem;

    ${(props) => props.theme.breakpoints.down('md')} {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
    }
    
    ${(props) => props.theme.breakpoints.down('xl')} {
        margin-right: 0;
        margin-left: 0;
    }
`

export const Empty = styled.div`
    
`
