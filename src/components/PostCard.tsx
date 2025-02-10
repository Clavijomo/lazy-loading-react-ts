import { Post } from "../interfaces/Post";

function PostCard({ title, body }: Post) {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-400">{body}</p>
        </div>
    )
}

export default PostCard;