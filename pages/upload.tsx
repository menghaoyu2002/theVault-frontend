import axios from '../config/axios';
import { useState, useEffect, FormEvent } from 'react';

const Upload = () => {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setLoginStatus] = useState(false);

    useEffect(() => {
        axios
            .get('/checkauth', {
                headers: {
                    Authorization:
                        'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .then(() => setLoginStatus(true))
            .catch(() => setLoginStatus(false))
            .finally(() => setLoading(false));
    }, []);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(document.querySelector('form')!);
        axios
            .post('/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization:
                        'Bearer ' + localStorage.getItem('access_token'),
                },
            })
            .catch((err) => console.log(err));
    };

    if (!loading) {
        if (isLoggedIn) {
            return (
                <div>
                    <h1> Upload an Image</h1>
                    <form encType="multipart/form-data" onSubmit={onSubmit}>
                        <label htmlFor="title">Title</label>
                        <br />
                        <input
                            type="text"
                            required={true}
                            maxLength={32}
                            minLength={1}
                            name="title"
                        />
                        <br />
                        <label htmlFor="description">Description</label>
                        <br />
                        <input type="text" name="description" maxLength={300} />
                        <br />
                        <label htmlFor="image">Image</label>
                        <br />
                        <input type="file" name="image" required={true} />{' '}
                        <br />
                        <input type="submit"></input>
                    </form>
                </div>
            );
        } else {
            return <h1>Please Log in To Upload and Image</h1>;
        }
    } else {
        return <h1>Loading</h1>;
    }
};

export default Upload;
