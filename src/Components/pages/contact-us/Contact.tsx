import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

import * as Style from './Contact.style'

function Contact() {
  const [state, handleSubmit] = useForm("mnqrqdew");

  if (state.succeeded) {
    return (
      <Style.MessageSendContainer>
        <Style.Message>
          <h4>¡Gracias por su mensaje!</h4>
          <h5>Le estaremos contestando a su correo electrónico lo más pronto posible</h5>
        </Style.Message>
      </Style.MessageSendContainer>
    )
  }

  return (
    <div>
      <Style.Container>
        <Row>
          <Style.Block>
            <h2>Contáctenos</h2>
          </Style.Block>
        </Row>
        <Col sm="12">
          <Style.FormContainer>
            <Col sm='6'>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Nombre</Label>
                  <Input type='text' placeholder="Ingrese su nombre y apellidos" name="Nombre" id='name' />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Correo electrónico</Label>
                  <Input type='email' placeholder="Ingrese su correo electrónico" name="Correo electrónico" id='email' />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Mensaje</Label>
                  <Input type='textarea' placeholder="Ingrese su mensaje" name="Mensaje" id='message' />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </FormGroup>
                <Button type='submit' disabled={state.submitting}>Enviar</Button>
              </Form>

              <Col sm='12'>
                <Style.Contact>
                  <span>
                    <i className="fas fa-phone"></i>
                  </span>
                    +506 2224-3645
                    <Style.Icons>
                    <ul>
                      <li><a href='https://www.facebook.com/comercialpf'><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href='https://www.instagram.com/comercial.pf/?hl=es-la'><i className="fab fa-instagram"></i></a></li>
                      <li><a href='https://api.whatsapp.com/send?phone=50687217373'><i className="fab fa-whatsapp"></i></a></li>
                    </ul>
                  </Style.Icons>
                </Style.Contact>
              </Col>
            </Col>
          </Style.FormContainer>
        </Col>
      </Style.Container>
    </div>
  )
}

export default Contact