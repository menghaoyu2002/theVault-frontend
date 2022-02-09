import Image from 'next/image';
import IImage from '../types/IImages';

interface ImageCarouselProps {
    images: IImage[];
}
export const ImageCarosel = ({ images }: ImageCarouselProps) => {
    return (
        <div>
            {images.map((image: IImage) => (
                <Image
                    key={image._id}
                    src={image.source}
                    alt={image.title}
                    height="500"
                    width="500"
                />
            ))}
        </div>
    );
};
