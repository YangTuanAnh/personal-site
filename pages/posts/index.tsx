import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import BlogCard from '../../components/Blog/BlogCard'
import Link from 'next/link'
import Section from '../../components/Section/section'

const Posts = ({ ...props }) =>
{

    return (
        <div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Posts
            </h3>
            <Section delay={0.2}>
                <div className="divide-y divide-black dark:divide-white">
                {
                    props.posts.map((post: any) =>
                    {
                        return (
                            <BlogCard post={post} key={post.slug} />
                        )
                    })
                }
                </div>
            </Section>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () =>
{
    const POSTS_PATH = path.join(process.cwd(), 'data', 'posts')
    const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

    const posts = postFilePaths.map((filePath) =>
    {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const { content, data } = matter(source)
        const slug = filePath.split('.')[0]

        return {
            content, data, filePath, slug
        }
    })
    return { props: { posts } }
}

export default Posts;
