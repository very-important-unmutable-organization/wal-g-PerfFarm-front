import {Anchor, Button, Form} from "react-bootstrap";
import {login} from "../../api/requests";

import './login-form.css'
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../utils/userContext";
import {browserHistory} from "../utils/browserHistory";

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const userContext = useContext(UserContext);
    console.log(userContext);
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return;

        const resp = await login(username, password);
        if (resp.err) {
            alert(resp.err)
        }
        else {
            userContext.setUser({username, accessToken: resp.accessToken});
            browserHistory.push('/login');
            navigate("/runs");
        }
    }

    return (
        <Form className={'login-form'}>
            <h3>Log in</h3>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    name="username"
                    title="username"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    title="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </Form.Group>
            <Button
                className={'mb-3 submit-button'}
                onClick={onSubmit}
                variant="primary"
                type="submit">
                Submit
            </Button>
            <p className={'text-right'}>Don't have an account? <Anchor href={'/signup'}>Sign up</Anchor></p>
        </Form>
    )
}