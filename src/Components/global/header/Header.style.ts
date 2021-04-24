import styled from 'styled-components'

export const NavBar = styled.div`

  background-image: radial-gradient(#53001d 36%, #330112 73%);
  width: 100%;

  ${(props) => props.theme.breakpoints.down('md')} {
    .collapse:not(.show){
      display: none !important;
    }
  }

  .nav-link {
    color: whitesmoke;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.1rem;
    margin-right: 1rem;
    transition: 0.4s;

    &:hover {
      font-weight: bold;
      color: whitesmoke;
      text-shadow: 5px 1px 5px #b1b1b1;
      font-size: 1.2rem;
    }
  }

  nav {
    display: flex;
    justify-content: center;
  }

  .navbar-toggler {
    color: whitesmoke;
  }

  .navbar-collapse{
    display: flex;
    justify-content: center;
  }

  .current{
    font-weight: bold;
    color: whitesmoke;
    text-shadow: 5px 1px 5px #b1b1b1;
    font-size: 1.2rem;
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Allura", cursive;
  color: whitesmoke;
  background-color: black;
  padding-top: 1rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 0 !important;
    text-shadow: 5px 1px 5px #808080;

    ${(props) => props.theme.breakpoints.down('md')} {
      font-size: 3rem;
    }
  }
`