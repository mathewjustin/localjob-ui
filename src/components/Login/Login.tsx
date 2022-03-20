import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Button, Container, Form , Row,Col} from 'react-bootstrap';

import PropTypes from 'prop-types';

import styles from './login.module.css';
 
export function Login() {
    
  return (
    

    <div>
      
    <Container>
      
       <Row class="d-flex justify-content-center">
      <Col> </Col>
      <Col> 
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Col>
  <Col> </Col>
  </Row>
  </Container>
  </div>
  );
}
 



