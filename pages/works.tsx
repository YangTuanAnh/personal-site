import GridItem from "../components/GridItems";
import Section from "../components/Section/section";

import thumbTest from "../public/images/waffle_logo.png";

import thumbThorch from "../public/images/works/projects/mythorch.webp"
import thumbTrassify from "../public/images/works/projects/trassify.png"
import thumbCrashCourse from "../public/images/works/projects/crashcourse.png"
import thumbBanner from "../public/images/banner.png"
import thumbDictionary from "../public/images/works/projects/dictionary.png"

import thumbLEAN from "../public/images/works/projects/lean.png"
import thumbCS101 from "../public/images/works/projects/cs101.png"
import thumbTCF from "../public/images/works/projects/thecodefoundation.png"

import thumbSketch from "../public/images/works/publications/sketch.png"
import thumbText from "../public/images/works/publications/text.png"
import thumbGamification from "../public/images/works/publications/gamification.png"
import thumbTelea from "../public/images/works/publications/telea.png"

import thumbSplash from "../public/images/works/projects/splashforest.png"
import thumbEverLast from "../public/images/works/projects/everlast.png"
import thumbSBShuttle from "../public/images/works/projects/sbshuttle.png"
import thumbCMS from "../public/images/works/projects/CMS.png"
import thumbMinesweeper from "../public/images/works/projects/minesweeper.png"

import thumbGraphics from "../public/images/works/graphics.png"
import Image from "next/image";
const Works = () =>
{
    return (
        <div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12">
                <Section delay={0.2}>
                    <GridItem href="https://lablab.ai/event/openai-hackathon/hcmuwus/mythorch-revolutionary-documents-interaction" title="MyThorch" thumbnail={thumbThorch}>
                        A revolutionary document interaction app that leverages user behavior to embed vectors and store them in a Redis vector database. This process creates a long-term memory AI that truly understands the user&apos;s needs and preferences.<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>React, NodeJS, Flask, Redis, GPT-3</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/CS202_Project" title="CS202 Crash Course" thumbnail={thumbCrashCourse}>
                        Inspired by Crossy Road, a 3D video game that lets players avoid obstacles such as cars and dinosaurs, on their way across the streets. Some special features include various lane types, traffic lamps and endless gameplay.<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>C/C++, CMake, Raylib</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/13-HCMUwUS" title="Trassify" thumbnail={thumbTrassify}>
                        A recyclable trash detection app, with monetized incentives to encourage recycling, an award-winning submission to GameUIT Hackathon 2022.<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>Flutter, TensorflowLite</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="/" title="Portfolio Website" thumbnail={thumbBanner}>
                        This website, where I present my ideas, projects and personal updates. Acts as a portfolio.<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>TypeScript, NextJS, TailwindCSS, MDX, NodeJS, Express, Firebase</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/CS163-Dictionary-project" title="CS163 Dictionary" thumbnail={thumbDictionary}>
                        A popular application to look up the meanings of words. Because the number of words in a dictionary goes to the thousands, students should design suitable data structures & algorithms. <br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>C/C++, CMake, Raylib (Generate Eng-Vie with Python & Google Translate API)</em></span>
                    </GridItem>
                </Section>


            </div>

            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Collaborations
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12">
                <Section delay={0.2}>
                    <GridItem href="https://lean.social/" title="LEAN Social" thumbnail={thumbLEAN}>
                        Engineered alongside an MVP for LEAN Social - an early-stage Edutech startup, organized by university students across Asia.
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://gdscxsab.github.io/CS101/index.html" title="GDSCxSAB CS101" thumbnail={thumbCS101}>
                        A collaborated effort between SAB in HCMUS and HCMUS’ Google Developer Student Club to create a website on providing students with additional soft skills in Computer Science
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://tcf-website.vercel.app/" title="The Coding Foundation" thumbnail={thumbTCF}>
                        Learned and utilized React, Next.js and Chakra UI to design front-end mechanics. Developed jumbotron components, scroll animations, website content, creating a complete user experience.<br />
                    </GridItem>
                </Section>
            </div>

            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Publications & Appearances
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12">
                <Section delay={0.2}>
                    <GridItem href="https://paperswithcode.com/paper/sketchanimar-sketch-based-3d-animal-fine"
                        title="SketchANIMAR: Sketch-based 3D Animal Fine-Grained Retrieval"
                        thumbnail={thumbSketch}>
                        Top 2 of the SketchANIMAR track on SHREC 2023 
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://paperswithcode.com/paper/textanimar-text-based-3d-animal-fine-grained"
                        title="TextANIMAR: Text-based 3D Animal Fine-Grained Retrieval"
                        thumbnail={thumbText}>
                        Top 2 of the TextANIMAR track on SHREC 2023 
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://drive.google.com/file/d/13FuSjxEisztc1M7ZZhk2iemE1NoMFmQ2/view?usp=sharing"
                        title="Gamified solution to enhance students' interest in History - Immersion Learning and Gamification"
                        thumbnail={thumbGamification}>
                        Best Paper at the International Student Science Forum 2022
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://youtu.be/z4lavJuLGEM"
                        title="Speaker: “Diamond Time Seminar 19 - Productivity & Organization”, Telea Networking "
                        thumbnail={thumbTelea}>
                        idk lol what happened
                    </GridItem>
                </Section>
            </div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Old works
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12">
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/hcmuwus" title="EverLast" thumbnail={thumbEverLast}>
                        A webapp that aids the cronically ill with end-of-life logistics and acts as a digital memorial for loved ones to add onto (conceptual), an award-winning submission to GDSC-IU&apos;s IT Hackathon 2022<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>Javascript, React, TailwindCSS</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://youtu.be/hyYEWD2tYzg" title="SBShuttle" thumbnail={thumbSBShuttle}>
                        A package-delivery service based on Tiki’s Transportation services, top-30 semi-finalist submission for Tiki Hacking Trail 2022<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>TiniApp, TiniStudio</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/CS162-project" title="CS162 Student Management System" thumbnail={thumbCMS}>
                        A Learning Management System, accessible by students and faculty members to create, read, update and delete student and learning information. <br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>C/C++, CMake, Raylib</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/MinesweeperCS161" title="CS161 Minesweeper" thumbnail={thumbMinesweeper}>
                        Simple Minesweeper game, includes mechanics, game difficulty, high scores, game customization, settings and saving/loading.<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>C/C++, CMake, Raylib</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://arcade.makecode.com/15786-25714-46377-44307" title="SplashForest" thumbnail={thumbSplash}>
                        An 8-bit video game for a hackathon by the U.S Consulate General - Ho Chi Minh City, inspired by Bomberman<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>Microsoft MakeCode Arcade</em></span>
                    </GridItem>
                </Section>
            </div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Graphic Design
            </h3>
            <Section delay={0.2}>
                <Image src={thumbGraphics} alt="Graphic Design" className="mx-auto md:w-1/2 rounded-lg hover:scale-110 transition duration-150 hover:shadow-lg dark:shadow-highlight/25 mb-6" />
                <h3 className="hover:text-highlight transition duration-150 text-center">Collage</h3>
                <p className="text-center">
                    Some posts I&apos;ve designed for organizations and personal projects.<br/>
                    <span><b className="text-pink-600">Tools:</b> <em>Adobe Illustrator, Figma, Blender</em></span>
                </p>
            </Section>
        </div>
    )
}

export default Works;