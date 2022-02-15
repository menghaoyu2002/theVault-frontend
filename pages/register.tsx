import axios from '../config/axios';
import React, { FormEvent, FormEventHandler } from 'react';
import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const registerUser = (event: FormEvent) => {
        event.preventDefault();
        axios
            .post('/register', {
                username: username,
                email: email,
                password: password,
            })
            .then((res) => (document.location.href = '/login'))
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form
                style={{ display: 'inline-block', textAlign: 'left' }}
                onSubmit={registerUser}
            >
                <label>Username</label> <br />
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    required={true}
                    maxLength={32}
                    minLength={2}
                    type="text"
                />{' '}
                <br />
                <label>Email</label> <br />
                <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                />{' '}
                <br />
                <label>Password</label> <br />
                <input
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    required={true}
                    minLength={6}
                />{' '}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;
