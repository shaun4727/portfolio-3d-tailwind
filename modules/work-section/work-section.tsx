'use client';

import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ChartBar } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);
}

gsap.registerPlugin(ScrollTrigger);

export const WorkSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const split = new SplitText('.work-header', {
                type: 'chars, words',
            });
            const workCards = gsap.utils.toArray(boxRef.current!.children);

            // 1. Setup initial states
            gsap.set(split.chars, { display: 'inline', position: 'relative' });

            // 2. Create a single Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current, // Triggering based on the section
                    start: 'top 80%',
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
                            revealDelay: 0.2,
                            speed: 0.5,
                        },
                    },
                    '<0.05', // Overlap characters for the "computing" flow
                );
            });

            // 4. Add Skill Cards Animation
            // Using "-=0.2" makes the cards start appearing just before the text finishes scrambling
            tl.from(
                workCards,
                {
                    opacity: 0,
                    y: 100, // Increased Y for a more dramatic entrance
                    scale: 0.5, // Starts at half size for a "zoom in" effect
                    duration: 1, // Slightly longer duration for smoothness
                    stagger: 0.15, // Slightly more time between cards
                    ease: 'back.out(1.7)', // 'back' ease creates a slight "pop" at the end
                },
                '-=0.2',
            );

            gsap.set('.project-image', {
                display: 'block',
                position: 'relative',
                zIndex: 1,
            });

            const cards = gsap.utils.toArray('.image-card');

            cards.forEach((card) => {
                const el = card as HTMLElement;
                const img = el.querySelector('.project-image');

                if (!img) return;

                // Simple scale animation centered on the image's original position
                const hoverAnim = gsap.to(el, {
                    scale: 1.6,
                    zIndex: 100,
                    duration: 0.5,
                    paused: true,
                    ease: 'power2.out',
                    // transformOrigin: "center center" is default,
                    // but you can specify it if needed
                    transformOrigin: 'center center',
                });

                el.addEventListener('mouseenter', () => {
                    // We raise the z-index of the whole card container so the
                    // scaled image overlaps neighboring cards
                    gsap.set(el, { zIndex: 50 });
                    hoverAnim.play();
                });

                el.addEventListener('mouseleave', () => {
                    // Reset z-index so it returns to the normal document flow
                    gsap.set(el, { zIndex: 1 });
                    hoverAnim.reverse();
                });
            });
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            className="px-sm-gutter mt-margin-section-large md:px-gutter"
        >
            <h1 className="work-header uppercase font-bold text-xl flex gap-margin-sm justify-center md:text-3xl md:items-center mb-margin-section-regular">
                <ChartBar />
                WORK I HAVE DONE
            </h1>
            <div ref={boxRef} className="md:grid md:grid-cols-3 gap-4">
                <div className="image-card overflow-visible bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular hover:border-primary-color hover:border-2">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100 project-image mx-auto"
                        width="800"
                        height="600"
                    />
                    <div className="mt-margin-elements-regular">
                        {' '}
                        <h1 className="font-bold text-xl text-primary-color">
                            E-commerce Project
                        </h1>
                        <h4 className="font-bold mt-2">
                            Technology Used:{' '}
                            <span className="font-normal">
                                Next JS, Node JS, Express, Mongo DB
                            </span>
                        </h4>
                        <div className="flex justify-center mt-3">
                            <Button className="bg-button-color w-3/4 hero-button hover:bg-primary-color transition-colors duration-300">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image-card overflow-visible bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular hover:border-primary-color hover:border-2">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100 project-image mx-auto"
                        width="800"
                        height="600"
                    />
                    <div className="mt-margin-elements-regular">
                        {' '}
                        <h1 className="font-bold text-xl text-primary-color">
                            E-commerce Project
                        </h1>
                        <h4 className="font-bold mt-2">
                            Technology Used:{' '}
                            <span className="font-normal">
                                Next JS, Node JS, Express, Mongo DB
                            </span>
                        </h4>
                        <div className="flex justify-center mt-3">
                            <Button className="bg-button-color w-3/4 hero-button hover:bg-primary-color transition-colors duration-300">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image-card overflow-visible bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular hover:border-primary-color hover:border-2">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100 project-image mx-auto"
                        width="800"
                        height="600"
                    />
                    <div className="mt-margin-elements-regular">
                        {' '}
                        <h1 className="font-bold text-xl text-primary-color">
                            E-commerce Project
                        </h1>
                        <h4 className="font-bold mt-2">
                            Technology Used:{' '}
                            <span className="font-normal">
                                Next JS, Node JS, Express, Mongo DB
                            </span>
                        </h4>
                        <div className="flex justify-center mt-3">
                            <Button className="bg-button-color w-3/4 hero-button hover:bg-primary-color transition-colors duration-300">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image-card overflow-visible bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular hover:border-primary-color hover:border-2">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100 project-image mx-auto"
                        width="800"
                        height="600"
                    />
                    <div className="mt-margin-elements-regular">
                        {' '}
                        <h1 className="font-bold text-xl text-primary-color">
                            E-commerce Project
                        </h1>
                        <h4 className="font-bold mt-2">
                            Technology Used:{' '}
                            <span className="font-normal">
                                Next JS, Node JS, Express, Mongo DB
                            </span>
                        </h4>
                        <div className="flex justify-center mt-3">
                            <Button className="bg-button-color w-3/4 hero-button hover:bg-primary-color transition-colors duration-300">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image-card overflow-visible bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular hover:border-primary-color hover:border-2">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100 project-image mx-auto"
                        width="800"
                        height="600"
                    />
                    <div className="mt-margin-elements-regular">
                        {' '}
                        <h1 className="font-bold text-xl text-primary-color">
                            E-commerce Project
                        </h1>
                        <h4 className="font-bold mt-2">
                            Technology Used:{' '}
                            <span className="font-normal">
                                Next JS, Node JS, Express, Mongo DB
                            </span>
                        </h4>
                        <div className="flex justify-center mt-3">
                            <Button className="bg-button-color w-3/4 hero-button hover:bg-primary-color transition-colors duration-300">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
