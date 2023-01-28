import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const GridItem = ({children, href, title, thumbnail}:{children:any, href:string, title:string, thumbnail:StaticImageData}) => {
    return (
        <div className="w-full text-center">
            <a href={href} target="_blank" className="hover:text-highlight transition duration-150">
                <Image  src={thumbnail}
                        alt={title}
                        placeholder="blur"
                        loading="lazy" 
                        className="rounded-lg mb-6 w-full aspect-video object-cover object-center hover:scale-110 transition duration-150 hover:shadow-lg dark:shadow-highlight/25"/>
                <h3 >{title}</h3>
            </a>
            <p>{children}</p>
        </div>
    )
}

export default GridItem;