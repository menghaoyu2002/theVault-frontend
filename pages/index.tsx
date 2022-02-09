import axios from '../config/axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import IImage from '../types/IImages';
import { ImageCarosel } from '../components/ImageCarosel';

const Home: NextPage = () => {
    const [images, setImages] = useState<IImage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchImages = async () => {
            const res = await axios.get('/images?limit=20&page=1');
            setImages(res.data);
            setLoading(false);
        };
        fetchImages().catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1> Welcome to the Vault</h1>
            {loading ? <p>Loading</p> : <ImageCarosel images={images} />}
        </div>
    );
};

export default Home;
