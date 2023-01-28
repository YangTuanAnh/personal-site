import Section from "../../Section/section";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import useSWR from 'swr'

const fetcher = async(args:any) => {
    const res = await fetch(args)
    return res.json()
}

const BlogCard = ({ post }: { post: any }) =>
{
    const {data} = useSWR(`/api/views/${post.slug}`, fetcher)
    const views = new Number(data?.total)

    return (
        <div className="my-2">
            <Link href={"/posts/" + post.slug} className="h-40 min-h-full flex">
                <div className="w-80 p-2">
                    <img src={post.data.thumbnail} alt={post.data.title} className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="p-3 flex flex-col justify-between">
                    <div>
                        <h3 className="mb-1">{post.data.title}</h3>
                        <p className="w-11/12 text-sm opacity-75 mb-1">{post.data.desc}</p>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm opacity-90">{post.data.publishedAt}</span>
                        <span className="text-sm opacity-90"><AiOutlineEye className="inline mr-2"/>{views.toLocaleString()}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;