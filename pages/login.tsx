import axios from '../config/axios';
import { NextPage } from 'next';
import React, { FormEvent, useState } from 'react';

const Login: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        try {
            const res = await axios.post('/login', {
                email: email,
                password: password,
            });
            if (res.status == 200) {
                localStorage.setItem('access_token', res.data.access_token);
            }
        } catch (err: any) {
            if (err.response.data) {
                setError(err.response.data.message);
            }
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email"> Email </label>
            <br />
            <input
                type="email"
                name="email"
                id="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                type="password"
                name="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                }}
            />
            <br />
            <input type="submit" />
            <p>{error}</p>
        </form>
    );
};

export default Login;
