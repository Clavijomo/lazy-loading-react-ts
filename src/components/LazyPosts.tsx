import { Suspense, lazy } from "react";
import { Post } from "../interfaces/Post";

const PostCard = lazy(() => import('./PostCard'));

export interface Props {
    posts: Post[];
    loaderRef: React.RefObject<HTMLDivElement>;
}

const LazyPosts = ({ posts, loaderRef }: Props) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {posts && posts.map(post => (
                <Suspense fallback={<p>Cargando...</p>} key={post.id}>
                    <PostCard {...post} />
                </Suspense>
            ))}
            <div ref={loaderRef} className="h-10"></div>
        </div>
    )
}

export default LazyPosts;