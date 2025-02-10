import LazyPosts from "./components/LazyPosts";
import { useLazyLoad } from "./useLazyLoad";

async function fetchPosts(page: number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );

    return response.json();
}

function App() {
    const { data: posts, loaderRef, loading } = useLazyLoad(fetchPosts);

    return (
        <div className="w-2/3 mx-auto my-5">
            <h1 className="text-4xl text-center my-5">Lazy Loading</h1>
            <LazyPosts loaderRef={loaderRef} posts={posts} />
            {loading && <p className="text-center">Cargando más posts...</p>}
        </div>
    )
}

export default App;