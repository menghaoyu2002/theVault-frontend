import Image from 'next/image';
import IImage from '../types/IImages';

interface ImageCarouselProps {
    images: IImage[];
}
export const ImageCarosel = ({ images }: ImageCarouselProps) => {
    if (!images.length) {
        return <h2>No Images Found</h2>;
    }
    return (
        <div
            style={{
                display: 'flex',
                width: '90%',
                height: '90%',
            }}
        >
            {images.map((image: IImage) => (
                <div
                    key={image._id}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        margin: '0.5%',
                    }}
                >
                    <Image
                        src={image.source}
                        alt={image.title}
                        objectFit="cover"
                        layout="fill"
                        quality="100"
                        onClick={() =>
                            (document.location.href = `/images/${image._id}`)
                        }
                    />
                </div>
            ))}
        </div>
    );
};
