import { useEffect, useRef, useState } from "react";
import { Post } from "./interfaces/Post";

export function useLazyLoad<T extends Post>(fetchData: (page: number) => Promise<T[]>) {
    const [data, setData] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                loadMorePosts();
            }
        }, { threshold: 1.0 });

        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [page, loading]);

    const loadMorePosts = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const newData = await fetchData(page);
            setData((prev) => [...prev, ...newData]);
            setPage((prev) => prev + 1);
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            setLoading(false);
        }
    };

    return { data, loaderRef, loading };
}
