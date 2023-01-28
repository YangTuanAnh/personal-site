import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    const waffleImg = '/images/waffle_logo.png';
    return (
        <Link href="/" className="font-bold inline-flex align-center h-30 leading-5 p-2 mr-6">
            <Image src={waffleImg} width={40} height={20} alt="logo" className="hover:rotate-[30deg] transition ease-in-out mr-2"/>
            <h1>Yang Tuan Anh</h1>
        </Link>
    )
}

export default Logo