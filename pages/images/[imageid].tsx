import axios from '../../config/axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import IImage from '../../types/IImages';
import Image from 'next/image';
import { relative } from 'path';

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
                <div style={{ display: 'flex' }}>
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
                            objectFit="cover"
                            layout="fill"
                            quality="100"
                        />
                    </div>
                    <div>
                        <h1>{image.title}</h1>
                        <h2>{image.author.username}</h2>
                        <p> {image.description}</p>
                        <p>{image.uploadDate}</p>
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
