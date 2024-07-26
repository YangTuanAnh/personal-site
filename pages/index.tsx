import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Section from '../components/Section/section'
import Link from 'next/link'
import StyledLink from '../components/StyledLink'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillMail  } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa"
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
            Yang Tuấn Anh 
          </h2>
          <p>
            APCS21 @ VNUHCM - University of Science
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
        <p className="indent-4 break-words">
          I grew up in Ho Chi Minh City, Vietnam, I&apos;m Vietnamese-Taiwanese, and I&apos;m currently a senior at &nbsp;<StyledLink href="https://www.hcmus.edu.vn/">VNUHCM - University of Science</StyledLink>&nbsp;. I&apos;m pursuing positions in both industry and academia within Software Engineering and Data Science. My interests include <span className="transition ease-in-out delay-150 brightness-75 dark:brightness-100 text-highlight hover:underline hover:underline-offset-4">Multimedia Retrieval, Image Understanding, Graph Neural Networks for AI4Sci</span>, and developing robust software systems, alongside a strong focus on <span className="transition ease-in-out delay-150 brightness-75 dark:brightness-100 text-highlight hover:underline hover:underline-offset-4">MLOps</span>.
        </p>
        <p className="indent-4 break-words">
          Currently, I am working as a Research Assistant for  &nbsp;<StyledLink href="https://github.com/HySonLab/">HySonLab</StyledLink>&nbsp; & &nbsp;<StyledLink href="https://daolab.weebly.com/">Dao HyperAI Lab</StyledLink>, and as an AI Engineer for &nbsp;<StyledLink href="https://www.autonomous.ai/">Autonomous Inc</StyledLink>.
        </p>
        <div className="flex justify-center my-6 gap-4">
          <Link href="/works">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              My portfolio&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
          <Link href="/resume">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              My resume&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
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
          <span>Started Bachelor&apos;s degree in Computer Science at the VNUHCM - University of Science, Advanced Program in Computer Science</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2022</span>
          <span>Interned in Fullstack Engineering at Tiki<br/>Worked at LEAN Social</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2023</span>
          <span>Interned in Algorithmic Design at Autonomous Inc.<br/>Offered the NUS ASEAN Master&apos;s Scholarship</span>
        </div>
        <div className="flex">
          <span className="font-bold pr-6 ">2024</span>
          <span>Working as a Research Assistant at HySonLab & Dao HyperAI Lab<br/>Working as an AI Engineer at Autonomous Inc.</span>
        </div>
      </Section>

      <Section delay={0.6}>
        <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
          I ♥
        </h3>
        <p className="indent-4 break-words">
        <StyledLink href="https://github.com/dangkhoasdc/awesome-vector-database">Multimedia Retrieval</StyledLink>, <StyledLink href="https://www.youtube.com/watch?v=40riCqvRoMs">Computer Vision</StyledLink>, <StyledLink href="https://huyenchip.com/mlops/">MLOps</StyledLink>, <StyledLink href="https://www.uber.com/en-VN/blog/h3/">Databases</StyledLink>, <StyledLink href="https://oj.vnoi.info/">Competitive Programming</StyledLink>, <StyledLink href="https://hanvdao.com/">Design</StyledLink>, Music (<StyledLink href="https://youtu.be/FyG21rXCxlY">Kpop</StyledLink>, <StyledLink href="https://youtu.be/HYfkxX4PFyw">Europop</StyledLink>, <StyledLink href="https://youtu.be/WaKdPgkTZ7M">Soviet Classical Orchestral</StyledLink>, <StyledLink href="https://youtu.be/Bl-YMD6yePc">Video Game OSTs</StyledLink>, <StyledLink href="https://www.youtube.com/watch?v=L5q4uYj-gyg">Breakcore</StyledLink>, <StyledLink href="https://youtu.be/rViCS8i0JxI">played the piano years ago</StyledLink>), Languages (Vietnamese, English, Mandarin, Spanish), <StyledLink href="https://www.projectxvietnam.org/">Communities, Career Prep</StyledLink>, sharing about my idols (like these links).
        </p>
      </Section>

      <Section delay={0.8}>
        <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
          Reach me through
        </h3>
        <SocialMediaLink href="https://github.com/YangTuanAnh">
          <AiFillGithub className="mr-2"/> YangTuanAnh - Github
        </SocialMediaLink>
        <SocialMediaLink href="https://www.facebook.com/tuananh.yang.73/">
          <AiFillFacebook className="mr-2"/> Yang Tuấn Anh - Facebook
        </SocialMediaLink>
        <SocialMediaLink href="https://www.linkedin.com/in/yang-tuan-anh-375759218/">
          <AiFillLinkedin className="mr-2"/> Yang Tuấn Anh - Linkedin
        </SocialMediaLink>
        <SocialMediaLink href="mailto:yangtuananh2003@gmail.com" noBlank>
          <AiFillMail className="mr-2"/> yangtuananh2003@gmail.com
        </SocialMediaLink>
        <SocialMediaLink href="https://ko-fi.com/yangtuananh" noBlank>
          <FaCoffee className="mr-2"/> Yang Tuấn Anh - Kofi (broke ahh bih)
        </SocialMediaLink>

        <div className="text-center m-6">
          <Link href="/posts">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              Check out my blog posts&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <p className="text-sm my-1.5 text-neutral-500">(*incoherent bilingual utterances)</p>
          </Link>
        </div>
      </Section>
    </div>
  )
}
