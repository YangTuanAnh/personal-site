import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import Section from '../../components/Section/section'
import useSWR from 'swr'
import { useEffect } from 'react'

interface IParams extends ParsedUrlQuery
{
    slug: string
}

export const getStaticPaths: GetStaticPaths = async () =>
{
    const POSTS_PATH = path.join(process.cwd(), 'data', 'posts')
    const files = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) =>
{
    const POSTS_PATH = path.join(process.cwd(), 'data', 'posts')
    const { slug } = context.params as IParams
    const source = fs.readFileSync(path.join(POSTS_PATH, slug + '.mdx'), 'utf8')

    const { content, data } = matter(source)
    const mdxSource = await serialize(content)

    return {
        props: { data, slug, mdxSource }
    }
}

const fetcher = async(args:any) => {
    const res = await fetch(args)
    return res.json()
}

const PostPage = ({ ...props }) =>
{
    const {data} = useSWR(`/api/views/${props.slug}`, fetcher)
    const views = new Number(data?.total)

    useEffect(() => {
            fetch(`/api/views/${props.slug}`, {
            method: 'POST'
        })
        }
    , [props.slug])

    return (
        <div className="mt-10">
            <Section delay={0.2}>
                <span className="text-4xl">{props.data.icon}</span>
                <h1 className="text-4xl mb-6">{props.data.title}</h1>
                <div className="flex justify-between">
                    <span>{props.data.publishedAt}</span>
                    <span>{`${Number(views) > 1 ? views.toLocaleString() : '–––'} views`}</span>
                </div>
                <Image src={props.data.thumbnail} alt={props.data.title} width={2000} height={2000} className="object-cover w-full p-6 aspect-video" />
                
                
                <MDXRemote {...props.mdxSource} components={{
                    a: (props) => <a className="text-pink-400 hover:underline underline-offset-4 dark:brightness-100 brightness-90"{...props} />,
                    ul: (props) => <ul className="list-disc list-inside indent-6 "{...props} />,
                    ol: (props) => <ol className="list-decimal list-inside indent-6"{...props} />,
                    blockquote: (props) => <blockquote className="dark:bg-neutral-700 bg-neutral-200 p-3 rounded-lg mb-3 italic" {...props} />,
                    p: (props) => <p className="mb-3 indent-6" {...props} />,
                    img: (props) => <img className="mx-auto p-6" {...props} />,
                    hr: (props) => <hr className="border border-black dark:border-white opacity-50 m-6" {...props}/>
                }} />
            </Section>
        </div>

    )
}

export default PostPage;