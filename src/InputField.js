import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function InputField({ label }) {
  return (
    <Form.Group controlId='exampleForm.ControlInput1' className='input-field'>
      <Form.Label className='label gold-text'>{label}</Form.Label>
      <Form.Control type='email' placeholder={label} />
    </Form.Group>
  );
}

export default InputField;
