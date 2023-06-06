import { React, useEffect, useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Register() {

    const textFields = [
      {
        label: 'Email address',
        placeholder: 'Input Email',
        type: 'text',
        id: '1'
      },
      {
        label: 'Password',
        placeholder: 'Password',
        type: 'Password',
        id: '2'
      }
    ];  

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    
    

    const displayEmail = () =>{
      alert('Your email address is ' + emailAddress + '\nYour password is ' + password)
    }

    return (
        <Form>
          {textFields.map((fields)  => {
            return(
              <Form.Group className='mb-3' controlId={fields.id}>
                
                <Form.Label>{fields.label}</Form.Label>
                <Form.Control type={fields.type} placeholder={fields.placeholder}
                onChange={(e) =>{ 
                setEmailAddress(document.getElementById('1').value)
                setPassword(document.getElementById('2').value)
                }}/>
                
              </Form.Group>
            )            
          })}
        <br/>
        <Button class="btn btn-success w-100" onClick={() => displayEmail()}>Submit</Button>
        <h2>Email: {emailAddress}</h2>
        <h2>Password: {password}</h2>
        </Form>
        
    )

}