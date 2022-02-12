export default interface IImage {
    _id: string;
    public_id: string;
    title: string;
    description: string;
    uploadDate: Date;
    viewCount: number;
    source: string;
    author: { _id: string; username: string };
}
