import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item {
        text-align: center;
      
        img {
            width: 35%;
            padding-bottom: 40px;

            ${(props) => props.theme.breakpoints.down('md')} {
                 width: 100%;
            }

        }
    }

   
`