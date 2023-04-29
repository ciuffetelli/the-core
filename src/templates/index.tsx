import Head from 'next/head';
import React, { useEffect } from 'react';

type TemplateProps = {
    title: string,
    description?: string,
    className?: string,
    children?: React.ReactNode
}
export default function Template(props: TemplateProps) {

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').matches ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [])
    return (
        <>
            <Head>
                <title>{ props.title }</title>
                <meta name="description" content={ props.description || '' } />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`p-8 ${props.className || ''}`}>
                {props.children}
            </div>
        </>
    )
}