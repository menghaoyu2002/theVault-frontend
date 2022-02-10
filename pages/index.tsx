import axios from '../config/axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import IImage from '../types/IImages';
import { ImageCarosel } from '../components/ImageCarosel';

const Home: NextPage = () => {
    const [images, setImages] = useState<IImage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchImages = async () => {
            const res = await axios.get('/images?limit=16&page=1');
            setImages(res.data);
            setLoading(false);
        };
        fetchImages().catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div style={{ width: '100vw', textAlign: 'center' }}>
                <h1> The Vault</h1>
                <h3>An NFT Museum - Internet History from 2022</h3>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100vw',
                    height: '50vh',
                }}
            >
                {loading ? <p>Loading...</p> : <ImageCarosel images={images} />}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>Enter The Vault</button>
            </div>
        </div>
    );
};

export default Home;
