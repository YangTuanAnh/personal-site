import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../Logo'
import DarkMode from '../DarkMode'

const LinkItem = ({ href, path, children }: { href: string, path: string, children: any }) =>
{
    return (
        <Link href={href} className={`${href == path ? 'text-white bg-pink-600' : ''} p-2 hover:underline underline-offset-4`}>
            {children}
        </Link>
    )
}

const HamburgerButton = ({ path }: { path: string }) =>
{
    const [pressed, setPressed] = useState(false);
    return (
        <button className=" md:hidden rounded-lg outline outline-neutral-400 outline-2 w-12 h-12 flex justify-center items-center
                                        hover:bg-neutral-100 hover:outline-4 hover:text-neutral-900"
            onClick={() => setPressed(!pressed)}

        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className={`${!pressed && 'hidden'} fixed top-16 right-0 mr-6 w-60 bg-white rounded-lg outline outline-1 outline-neutral-200`}
                onClick={() => setPressed(true)}
                onBlur={() => setPressed(false)}
            >
                <ul>
                    <li className={`${"/works" == path ? 'bg-pink-600' : 'hover:bg-neutral-300'} p-2  hover:underline underline-offset-4 text-neutral-900 rounded-t-lg`}>
                        <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                    </li>
                    <li className={`${"/posts" == path ? 'bg-pink-600' : 'hover:bg-neutral-300'} p-2  hover:underline underline-offset-4 text-neutral-900`}>
                        <LinkItem href="/posts" path={path}>
                            Posts
                        </LinkItem>
                    </li>
                    <li className={`${"/news" == path ? 'bg-pink-600' : 'hover:bg-neutral-300'} p-2  hover:underline underline-offset-4 text-neutral-900 rounded-b-lg`}>
                        <LinkItem href="/news" path={path}>
                            News
                        </LinkItem>
                    </li>
                </ul>
            </div>
        </button>

    )
}

const Navbar = ({ path }: { path: string }) =>
{

    return (
        <nav className="fixed w-full backdrop-blur z-50">
            <ul className="flex p-4 flex-wrap align-center justify-between items-center">
                <li>
                    <Logo />
                </li>
                <ul className="flex-col md:flex-row
                                hidden md:flex gap-6
                                w-full md:w-fit
                                items-center
                                grow
                                mt-2 md:mt-0">
                    <li>
                        <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                    </li>
                    <li>
                        <LinkItem href="/posts" path={path}>
                            Posts
                        </LinkItem>
                    </li>
                    <li>
                        <LinkItem href="/news" path={path}>
                            News
                        </LinkItem>
                    </li>
                </ul>
                
            </ul>
            <div className="flex align-right inline-block md:none gap-3 p-4 absolute top-0 right-0">
                    <DarkMode/>
                    <HamburgerButton path={path} />
                </div>
        </nav>
    )
}

export default Navbar;