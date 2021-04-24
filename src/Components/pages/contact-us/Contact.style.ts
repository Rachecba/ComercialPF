import styled from 'styled-components'

export const Container = styled.div`
  form {
    margin-top: 3rem;
    width: 100%;

    label {
      color: whitesmoke;
    }
  }

  button {
    color: white;
    background-color: #53001d;
    width: 100%;
    text-transform: uppercase;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;

    &:hover {
      border: 1px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.2);
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #050505;
      background-color: #c8a882;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Block = styled.div`
  background-color: #222222 !important;
  color: whitesmoke;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 100%;
  margin-top: 3rem;

  ${(props) => props.theme.breakpoints.down('md')} {
     margin-top: 2rem;

  }

  h2 {
    font-family: "Playfair Display", serif;
    text-shadow: 5px 1px 8px #b1b1b1;
    padding-left: 4rem;
  }
`
export const Contact = styled.div`
  margin-top: 2rem;
  color: whitesmoke;

  .fa-phone {
    margin-bottom: 2rem;
    color: whitesmoke;
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
      color: black !important;
      background-color: #f7ebce;
    }
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    margin-bottom: 4px;

    i {
      color: whitesmoke;

      &:hover {
        color: black;
      }
    }
  }
`
export const MessageSendContainer = styled.div`
  background-color: #222222;
  color: whitesmoke;
  width: 50%;
  height: 12rem;
  margin: auto;
  margin-top: 7rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`
export const Message = styled.div``
