import { Post } from "../interfaces/Post";

function PostCard({ title, body }: Post) {
    return (
        <div className="p-4 rounded-xl bg-zinc-800 shadow-md space-y-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-400">{body}</p>
        </div>
    )
}

export default PostCard;