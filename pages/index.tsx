import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Section from '../components/Section/section'
import Link from 'next/link'
import StyledLink from '../components/StyledLink'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillMail  } from "react-icons/ai";
import SocialMediaLink from '../components/SocialMediaLink'
const inter = Inter({ subsets: ['latin'] })
import Banner from "/public/images/banner.png"

export default function Home()
{
  return (
    <div className="mt-10">
      <Image src={Banner} alt="Minecraft base" className="w-full aspect-[7/2] object-cover object-center"/>
      <div className="rounded-lg dark:bg-neutral-700 bg-neutral-200 p-3 my-6 text-center">
        Delusion. Convince yourself. - Jinkx Monsoon
      </div>

      <main className="md:flex">
        <div className="grow">
          <h2>
            Yang Tuan Anh
          </h2>
          <p>
            APCS21 @ VNU-HCM University of Science
          </p>
        </div>
        <div className="shrink-0 mt-8 md:mt-0 md:ml-6 text-center">
          <img src="/images/profile.jpeg" alt="Profile Image" className="outline outline-white outline-2 w-24 inline-block rounded-full" />
        </div>
      </main>

      <Section delay={0.1}>
        <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
          Works
        </h3>
        <p className="text-justify indent-4 break-words">
          Hello there! I grew up in Saigon, Vietnam and I am part of the&nbsp;<StyledLink href="https://www.hcmus.edu.vn/">VNU-HCM University of Science</StyledLink>&nbsp;as a sophomore.
          I am now looking for internships and research opportunities in the fields of Software Engineering, Machine Learning and Project Management that will allow me to apply my programming, project management, and creative expertise to the professional sphere. I have a background in Computer Science and have managed student-run organizations.
        </p>
        <p className="text-justify indent-4 break-words">
          Currently, I am working as a Software Engineer for an edutech startup called&nbsp; 
          <StyledLink href="https://lean.social/">LEAN Social</StyledLink>
          &nbsp;and a Teaching Assistant for <StyledLink href="https://www.steamforvietnam.org/">STEAM For Vietnam</StyledLink>.
        </p>
        <div className="flex justify-center m-6 gap-6">
          <Link href="/works">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              My portfolio&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
          <a href="YangTuanAnh_SWEResume_2023.pdf" download>
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              My resume&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </a>
        </div>
      </Section>

      <Section delay={0.4}>
        <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
          Bio
        </h3>
        <div className="flex">
          <span className="font-bold pr-6 ">2003</span>
          <span>Born in Ho Chi Minh City, Vietnam</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2018</span>
          <span>Started high school at the VNU-HCM High school for the Gifted</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2021</span>
          <span>Started Bachelor&apos;s degree in Computer Science at the VNU-HCM University of Science, Advanced Program in Computer Science</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2022</span>
          <span>Interned in Fullstack Engineering at Tiki</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2022 to present</span>
          <span>Working at LEAN Social</span>
        </div>
      </Section>

      <Section delay={0.6}>
        <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
          I ♥
        </h3>
        <p className="text-justify indent-4 break-words">
          Software Engineering, Machine Learning, Competitive Programming, Mathematics, Art, Music, Languages
        </p>
      </Section>

      <Section delay={0.8}>
        <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
          On the web
        </h3>
        <SocialMediaLink href="https://github.com/YangTuanAnh">
          <AiFillGithub className="mr-2"/> YangTuanAnh
        </SocialMediaLink>
        <SocialMediaLink href="https://www.facebook.com/tuananh.yang.73/">
          <AiFillFacebook className="mr-2"/> Yang Tuấn Anh
        </SocialMediaLink>
        <SocialMediaLink href="https://www.linkedin.com/in/yang-tuan-anh-375759218/">
          <AiFillLinkedin className="mr-2"/> Yang Tuấn Anh
        </SocialMediaLink>
        <SocialMediaLink href="mailto:yangtuananh2003@gmail.com" noBlank>
          <AiFillMail className="mr-2"/> yangtuananh2003@gmail.com
        </SocialMediaLink>

        <div className="text-center m-6">
          <Link href="/posts">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              Check out my blog posts&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
