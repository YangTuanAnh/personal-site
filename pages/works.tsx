import GridItem from "../components/GridItems";
import Section from "../components/Section/section";

import thumbTest from "../public/images/waffle_logo.png";

import thumbMnemeAI from "../public/images/works/projects/mnemeai.png"
import thumbYOLOCLIP from "../public/images/works/projects/yoloclip.png"
import thumbFoodfeed from "../public/images/works/projects/foodfeed.png"
import thumbTranslation from "../public/images/works/projects/translation.png"
import thumbCoffeeApp from "../public/images/works/projects/coffee_app.png"
import thumbIm2Katex from "../public/images/works/projects/im2katex.png"
import thumbThorch from "../public/images/works/projects/mythorch.webp"
import thumbTrassify from "../public/images/works/projects/trassify.png"
import thumbCrashCourse from "../public/images/works/projects/crashcourse.png"
import thumbBanner from "../public/images/banner.png"
import thumbDictionary from "../public/images/works/projects/dictionary.png"
import thumbSNORD from "../public/images/works/projects/snord.png"
import thumbSCUDEM from "../public/images/works/projects/scudem.png"

import thumbLEAN from "../public/images/works/projects/lean.png"
import thumbCS101 from "../public/images/works/projects/cs101.png"
import thumbTCF from "../public/images/works/projects/thecodefoundation.png"
import thumbProjectX from "../public/images/works/projects/projectx.png"

import thumbSketch from "../public/images/works/publications/sketch.png"
import thumbText from "../public/images/works/publications/text.png"
import thumbSperm from "../public/images/works/publications/medico.png"
import thumbGamification from "../public/images/works/publications/gamification.png"
import thumbTelea from "../public/images/works/publications/telea.png"
import thumbPlant from "../public/images/works/publications/soict.png"

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
                    <GridItem href="https://github.com/htamlive/MnemeAI---Smart-Note-Assistant" title="MnemeAI Smart Note Assistant Public" thumbnail={thumbMnemeAI}>
                    Smart-Note-Assistant is a web application designed to assist users with note-taking, task management, and calendar integration. It leverages various APIs to provide a seamless user experience.<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>Google Tasks, Telegram, Notion APIs, Celery, Langchain, Redis, PostgreSQL, pgvector, Flask, OpenAI Embeddings, Llama 3, AWS S3, Docker, Caddy</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/doraemonidol/SNORD" title="SNORD: Smart Nicotine Oversight and Regulation Device" thumbnail={thumbSNORD}>
                        SNORD is an intelligent electronic cigarette product designed to assist users in monitoring and modifying their smoking habits.<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>Flutter, Golang, Firebase, GCP, Docker</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://www.youtube.com/watch?v=rrICk3Ldjtk" title="SCUDEM 2023 - Problem A: Kangaroo Care" thumbnail={thumbSCUDEM}>
                        Using differential equation modelling for Kangaroo Mother Care interactions, finding out important factors of KMC and impacts of irregular care patterns. Won Outstanding Award and placed 4th out of 30+. <br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>Python (numpy, matplotlib, scipy, odeint), Latex (Beamer)</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="#" title="Clip The Trigger: YOLO-CLIP for Gunpoint Gaze" thumbnail={thumbYOLOCLIP}>
                        NUS CS4243 Final Project - a YOLOv8 and CLIP ensemble to solve weapon presence binary classification, with a novel data augmentation technique. Received 4.75/5 for Methodology, and 5/5 for Results.<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>PyTorch, OpenCV, LabelStudio, HuggingFace Transformers, Ultralytics, sklearn</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/foodfeed_django_backend" title="FoodFeed" thumbnail={thumbFoodfeed}>
                        CS426 Final Project - an Android app that can help people share food locations and help them make reasonable decisions for their eating.<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>Android Studio, Jetpack Compose, Django, AWS EC2, Docker, PostgreSQL, S3, Redis, Selenium, BeautifulSoup</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/phkhanhtrinh23/translation_layoutrecovery" title="Document Translation with Layout Recovery" thumbnail={thumbTranslation}>
                        Translates a .pdf file, preserving the original layout of that .pdf file. Achieved Second Prize of the Cinnamon AI Bootcamp 2023.<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>NextJS, TailwindCSS, Django, PostgreSQL, Firebase, Docker Compose, envit5-translation, MaskRCNN, EasyOCR </em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://lablab.ai/event/openai-hackathon/hcmuwus/mythorch-revolutionary-documents-interaction" title="MyThorch" thumbnail={thumbThorch}>
                        A revolutionary document interaction app that leverages user behavior to embed vectors and store them in a Redis vector database. This process creates a long-term memory AI that truly understands the user&apos;s needs and preferences.<br />
                        <span><b className="text-pink-600">Tech stack:</b> <em>React, NodeJS, Flask, Redis, GPT-3</em></span>
                    </GridItem>
                </Section>
            </div>

            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Collaborations
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12">
                <Section delay={0.2}>
                    <GridItem href="https://www.projectxvietnam.org/" title="Project X Vietnam Tech Community" thumbnail={thumbProjectX}>
                        Connecting tech startups with young Vietnamese talents and offer mentorship, career orientations, and technical/soft-skills training through events/workshops and building communities for high-caliber students.
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://lean.social/" title="LEAN Social" thumbnail={thumbLEAN}>
                        Engineered alongside an MVP for LEAN Social - an early-stage Edutech startup, organized by university students across Asia.
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://gdscxsab.github.io/CS101/index.html" title="GDSCxSAB CS101" thumbnail={thumbCS101}>
                        A collaborated effort between SAB in HCMUS and HCMUS&apos; Google Developer Student Club to create a website on providing students with additional soft skills in Computer Science
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
                    <GridItem href="https://2023.multimediaeval.com/paper15.pdf"
                        title="Optimizing Sperm Detection and Tracking in Fluids
                        with Equalize Class Representation Augmentation"
                        thumbnail={thumbSperm}>
                        Distinctive Mention for MediaEval 2023 for the Medico Track. 
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://doi.org/10.1145/3628797.3629016"
                        title="Deep Learning Hierarchical Methods for Insect Pest Recognition on Plants"
                        thumbnail={thumbPlant}>
                        Conference Submission for SoICT 2023, SC203 & WR407 research project 
                    </GridItem>
                </Section>
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
            </div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Old works
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12">
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/midterms_coffee_app" title="Coffee Ordering App" thumbnail={thumbCoffeeApp}>
                        A Cofee ordering app made with Flutter - CS426 Midterms @ APCS HCMUS<br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>Flutter, Dart</em></span>
                    </GridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem href="https://github.com/YangTuanAnh/Im2KaTeX-Notion-Plugin" title="Im2KaTeX Notion Integration" thumbnail={thumbIm2Katex}>
                        A Streamlit app takes in the user&apos;s Notion page ID and an image with math notation. An Pix2Tex model converts the math notation into the equivalent KaTeX notation, then creating a new equation block for that page via a PATCH call to Notion&apos;s API. <br/>
                        <span><b className="text-pink-600">Tech stack:</b> <em>Python, Streamlit, Notion API, Pix2Tex</em></span>
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