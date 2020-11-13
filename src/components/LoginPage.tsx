import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios'

export const LoginPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        axios.post('http://localhost:4001/api/user/login', { email, password }).then(res => {
            console.log(res)
        })
    }
    return <Container>
        <h1>Login</h1>
        <Form method='post' onSubmit={(e: any) => { onSubmit(e) }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
}