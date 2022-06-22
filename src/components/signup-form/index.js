import {Anchor, Button, Form} from "react-bootstrap";
import {useState} from "react";

import {signup} from "../../api/requests";

import './signup-form.css'

export function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const resp = await signup(username, password);
    }

    return (
        <Form className={'signup-form'}>
            <h3>Sign Up</h3>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" title="username" type="text" onChange={handleUsernameChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" title="password" type="password" onChange={handlePasswordChange}/>
            </Form.Group>
            <Button className={'mb-3 submit-button'} onSubmit={onSubmit} variant="primary" type="submit">Submit</Button>
            <p className={'text-right'}>Already registered? <Anchor href={'/login'}>Log in</Anchor></p>
        </Form>
    )
}