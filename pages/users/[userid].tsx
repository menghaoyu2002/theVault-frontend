import { useRouter } from 'next/router';

const UserProfile = () => {
    const { userid } = useRouter().query;
    return <h1>{userid}</h1>;
};

export default UserProfile;
