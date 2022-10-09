import React from "react"
import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"

export default function About() {
    const clickLinkHendler = () => {
        Router.push('/')
    } // переход на главную страницу

    return (    
    <MainLayout title={'About Page'}>
        <h1>About Page</h1>
        <button onClick={clickLinkHendler}>Go back to home</button>
        <button onClick={() => Router.push('/posts')}>Go back to posts</button>
    </MainLayout>
    )
}