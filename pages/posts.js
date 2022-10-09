import Head from "next/head"
import { MainLayout } from "../components/MainLayout"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Posts({posts}) {
    
//    const [posts, setPosts] = useState([])
//    useEffect(() => {
//       async function load() {
//            const response = await fetch('http://localhost:4200/posts')
//            const json = await response.json()
//            setPosts(json) //передали набор новых загруженных постов
//        }
//        load()
//    }, []) не увидим в коде страницы, поэтому другой способ через getInitialProps

    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const res = await fetch('http://localhost:4200/posts')
    const posts = await res.json()
    return { posts }
}



  