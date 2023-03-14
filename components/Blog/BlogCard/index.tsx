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
            <Link href={"/posts/" + post.slug} className="md:h-40 h-20 min-h-full flex" rel="noopener">
                <div className="aspect-square p-2 hidden md:block ">
                    <img src={post.data.thumbnail} alt={post.data.title} className="h-full w-full object-cover rounded-lg " />
                </div>
                <div className="px-3 flex flex-col w-full justify-between items-center">
                    <div className="w-full">
                        <h3 className="mb-1">{post.data.title}</h3>
                        <p className="hidden md:block w-11/12 text-sm opacity-75 mb-1">{post.data.desc}</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <span className="text-sm opacity-90">{post.data.publishedAt}</span>
                        <span className="text-sm opacity-90"><AiOutlineEye className="inline mr-2"/>{views.toLocaleString()}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;