'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Backpack } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);
}

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const split = new SplitText('.skill-header', {
                type: 'chars, words',
            });
            const skillCards = gsap.utils.toArray(boxRef.current!.children);

            // 1. Setup initial states
            gsap.set(split.chars, { display: 'inline', position: 'relative' });

            // 2. Create a single Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current, // Triggering based on the section
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
            });

            // 3. Add Scramble Animation (Loop)
            split.chars.forEach((char) => {
                const htmlChar = char as HTMLElement;
                tl.to(
                    htmlChar,
                    {
                        duration: 0.5,
                        scrambleText: {
                            text: htmlChar.innerText,
                            chars: '01#@*&%',
                            revealDelay: 0.05,
                            speed: 0.5,
                        },
                    },
                    '<0.05', // Overlap characters for the "computing" flow
                );
            });

            // 4. Add Skill Cards Animation
            // Using "-=0.2" makes the cards start appearing just before the text finishes scrambling
            tl.from(
                skillCards,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                },
                '-=0.2',
            );
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            className="px-sm-gutter mt-margin-section-large"
        >
            <h1 className="skill-header uppercase font-bold text-xl flex gap-margin-sm justify-center md:text-3xl md:items-center">
                <Backpack />
                Skills I Have
            </h1>
            <div
                ref={boxRef}
                className="skill-section mt-margin-section-regular md:grid md:grid-cols-4 md:px-gutter gap-4"
            >
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/cib_next-js.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>NEXT JS</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/skill-icons_typescript.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>TYPESCRIPT</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/react-js.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>REACT</h5>
                </div>

                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/devicon_vuejs.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>VUE JS</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/vscode-icons_file-type-tailwind.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>TAILWIND</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/skill-icons_bootstrap.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>BOOTSTRAP 5</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/javascript.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>JAVASCRIPT</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/logos_nodejs-icon.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>NODE JS</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/skill-icons_mongodb.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>MONGODB</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/logos_postgresql.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>POSTGRESQL</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/prisma.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>PRISMA</h5>
                </div>

                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/redux-js.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>REDUX JS</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/docker.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>DOCKER</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/figma.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>FIGMA</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/git.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>GIT</h5>
                </div>
            </div>
            <section className="flex justify-end">
                <Image
                    src="/images/section-separator-reverse.png"
                    alt="section-separator-reverse"
                    width="100"
                    height="100"
                    className="section-separator w-1/2 ml-sm-gutter mt-margin-sm md:ml-gutter md:w-100 md:mt-margin-section-large md:mr-gutter"
                />
            </section>
        </section>
    );
};
