import Image from 'next/image';
import IImage from '../types/IImages';

interface ImageCarouselProps {
    images: IImage[];
}
export const ImageCarosel = ({ images }: ImageCarouselProps) => {
    return (
        <div style={{ display: 'flex', width: '80%', height: '100%' }}>
            {images.map((image: IImage) => (
                <div
                    key={image._id}
                    style={{
                        width: '80%',
                        height: '80%',
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
                    />
                </div>
            ))}
        </div>
    );
};
