'use client';

import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ChartBar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
            // Target the actual card elements
            const workCards = gsap.utils.toArray('.image-card');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    // "top 85%" means when the top of the section is 85% down the viewport
                    start: 'top 120%',
                    toggleActions: 'play none none none',
                },
            });

            // Header Scramble
            // 3. Add Scramble Animation
            split.chars.forEach((char) => {
                const htmlChar = char as HTMLElement;
                tl.to(
                    htmlChar,
                    {
                        duration: 0.5,
                        scrambleText: {
                            // ADD THIS LINE:
                            text: htmlChar.innerText,
                            chars: '01#@*&%',
                            revealDelay: 0.05,
                            speed: 0.5,
                        },
                    },
                    '<0.05',
                );
            });
            // Card Entrance
            tl.from(
                workCards,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                },
                '-=0.2',
            );

            // Hover Logic (MatchMedia)
            const mm = gsap.matchMedia();
            mm.add('(min-width: 769px)', () => {
                workCards.forEach((card: any) => {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.05,
                            zIndex: 10,
                            duration: 0.3,
                        });
                    });
                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, { scale: 1, zIndex: 1, duration: 0.3 });
                    });
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
            <h1 className="work-header uppercase font-bold text-xl flex gap-margin-sm justify-center md:text-3xl md:items-center mb-4">
                <ChartBar /> WORK I HAVE DONE
            </h1>

            {/* Grid fix: Use items-stretch to keep heights uniform in a row */}
            <div
                ref={boxRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            >
                <Card
                    title="E-commerce Project"
                    tech="Next JS, MongoDB, Node JS, TypeScript, ShadCn"
                    imageName="emart.png"
                    link="https://advanced-e-commerce-client.vercel.app/"
                />
                <Card
                    title="YouTube Clone"
                    tech="Next JS, Postgresql, Prisma, ShadCN"
                    imageName="youtube-clone.png"
                    link="https://you-tube-clone-rose-alpha.vercel.app/"
                />
                <Card
                    title="Calendra"
                    tech="Next JS, Postgresql, Prisma, ShadCN"
                    imageName="calendra.png"
                    link="https://calendra-project-gzty.vercel.app/"
                />
            </div>
        </section>
    );
};

// Helper Component to keep code clean and handle varying content
const Card = ({
    title,
    tech,
    imageName,
    link,
}: {
    title: string;
    tech: string;
    imageName: string;
    link: string;
}) => (
    <div className="image-card flex flex-col h-full overflow-visible bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)] rounded-xl p-6 border border-transparent hover:border-primary-color transition-colors">
        <div className="grow">
            <Image
                src={`/project-img/${imageName}`}
                alt="thumb"
                width={800}
                height={600}
                className="rounded-lg"
            />
            <h1 className="font-bold text-xl text-primary-color mt-4">
                {title}
            </h1>
            <p className="text-sm mt-2 font-bold">
                Tech: <span className="font-normal">{tech}</span>
            </p>
        </div>
        <Button
            className="mt-6 w-full bg-button-color hover:bg-primary-color"
            asChild
        >
            <Link href={link}>View Project</Link>
        </Button>
    </div>
);
