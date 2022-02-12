import axios from '../../config/axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import IImage from '../../types/IImages';
import Image from 'next/image';

const ImagePage = () => {
    const { imageid } = useRouter().query;
    const [image, setImage] = useState<IImage>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/images/${imageid}`)
            .then((res) => {
                setImage(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [imageid]);

    if (!loading) {
        if (image) {
            return (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8rem',
                        height: '100vh',
                        width: '100vw',
                    }}
                >
                    <div
                        style={{
                            width: '40rem',
                            height: '40rem',
                            position: 'relative',
                        }}
                    >
                        <Image
                            src={image.source}
                            alt={image.title}
                            objectFit="contain"
                            layout="fill"
                            quality="100"
                        />
                    </div>
                    <div
                        style={{
                            width: '20vw',
                            height: '50vh',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                        }}
                    >
                        <h1>{image.title}</h1>
                        <h2>{image.author.username}</h2>
                        <p>
                            Uploaded on{' '}
                            {new Date(image.uploadDate).toLocaleDateString()}
                        </p>
                        <p> {image.description}</p>
                    </div>
                </div>
            );
        } else {
            return <h1>No image Found with id {imageid}</h1>;
        }
    } else {
        return <h1>Loading Image...</h1>;
    }
};

export default ImagePage;
