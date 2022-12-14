import { useRouter } from "next/router"
import { MainLayout } from "../../components/MainLayout"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Post({post: serverPost}) {

    const [post,setPost] = useState(serverPost)
    const router = useRouter()
    console.log("Router ",router)

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await res.json()
            setPost(data)
        }
        if (!serverPost) {
            load()
        }
    },[])

    if (!post) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
    <MainLayout>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <Link href={`/posts`}><a>Back to all posts</a></Link>
    </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {post:null}
    }
    const res = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await res.json()
    return { post }

}