import styled from 'styled-components'

export const Footer = styled.div`
  margin-top: 20rem;
  background-color: #222222 !important;
  color: whitesmoke;
  padding: 3.5rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  line-height: 24px;

  h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }

  a, li {
    color: #737373;
  }

  a {
    &:hover {
      color: #3366cc;
      text-decoration: none;
    }
  }

  span{
    font-size: 15px;
    line-height: 24px;
    color: #737373;
  }
`
export const Links = styled.div`
  padding-left: 0;
  list-style: none;

  li {
    display: block;
  }

  a {
    color: #737373;

    &:active, &:focus, &:hover {
      color: #3366cc;
      text-decoration: none;
    }
  }

  .inline li {
    display: inline-block;
  }

  ul {
    padding-left: 0;
  }
`

export const Icons = styled.div`
  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
    text-align: center;

    &:active, &:hover, &:focus {
      color: black;
      background-color: #f7ebce;
    }
  }

  ul{
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    margin-bottom: 4px;
  }

`

export const Copyright = styled.div`
  margin: 0;
  color: #737373;
`

export const Divide = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbb;
  margin-bottom: 40px;
  opacity: 0.5;
  margin-top: 20px;
  margin-left: 1rem;
`
