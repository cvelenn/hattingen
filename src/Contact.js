import React from 'react';
import { Helmet } from 'react-helmet';
import Circles from './Circles';
import Slide from './Slide';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InputField from './InputField';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name='description'
          content='This is what you want to show as the page content in the Google SERP Listing'
        />
      </Helmet>
      <div className='wide'>
        <img className='wide-img' src='./images/shutterstock_-35.png' alt='' />
        <div className='white-text text-background'>
          Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
        </div>
      </div>
      <div className='wide form-container'>
        <div className='form slider-container'>
          <Form>
            <Row>
              <Col>
                <InputField label='label' />
              </Col>
              <Col>
                <InputField label='label' />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputField label='label' />
              </Col>
              <Col>
                <InputField label='label' />
              </Col>
            </Row>

            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label className='label gold-text'>
                Example textarea
              </Form.Label>
              <Form.Control as='textarea' rows='3' />
            </Form.Group>
            <Form.Group className='button-container'>
              <Button
                className='button gold-text '
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      <Slide />

      <Circles />
    </div>
  );
}

export default Contact;
