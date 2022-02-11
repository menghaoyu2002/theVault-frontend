import { useRouter } from 'next/router';

const ImagePage = () => {
    const { imageid } = useRouter().query;
    return <h1>{imageid}</h1>;
};

export default ImagePage;
