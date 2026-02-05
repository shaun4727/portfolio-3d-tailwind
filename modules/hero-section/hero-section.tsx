'use client';

import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
// --- ADD THESE IMPORTS ---
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register the plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}
// --

export const HeroSection = () => {
    const heroText = useRef(null);

    useGSAP(
        () => {
            const split = new SplitText('h1, h4, h5, h6', { type: 'chars' });
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // 1. Hero Text Animation
            tl.from(split.chars, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.01,
            })
                // 2. Button "Pop"
                // Change your button animation to this:
                .from(
                    '.hero-button',
                    {
                        y: 20,
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.5,
                        clearProps: 'all', // This clears GSAP styles once the animation finishes
                    },
                    '-=0.3',
                );
            // 3. Hero Image Entrance
            tl.fromTo(
                '.hero-image',
                {
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', // Hidden (vertical slice)
                    opacity: 0,
                    scale: 1.4,
                },
                {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Fully revealed
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power4.inOut',
                },
                '-=1', // Overlap with the text animation
            )
                // 4. About Me Section (Fade + Slide Up)
                .from(
                    '.about-section',
                    {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        // scrollTrigger: '.about-section' // Uncomment this if you want it to trigger on scroll
                    },
                    '-=0.4',
                );
        },
        { scope: heroText },
    );

    return (
        <div
            ref={heroText}
            className="md:bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(208,234,232,0.76)_17%,rgba(219,248,244,0.7625)_89%,rgba(205,248,242,0.485)_88%,rgba(255,255,255,1)_100%)]"
        >
            <section className="px-sm-gutter md:px-gutter md:flex md:justify-between md:items-center mt-14">
                <div className="mt-margin-section-regular flex flex-col items-center md:flex md:flex-col md:items-start md:w-1/2 md:gap-5">
                    <h5 className="md:text-xl font-bold">HI THERE</h5>
                    <div className="flex flex-col justify-center text-center md:text-start">
                        <h1 className="text-2xl md:text-4xl font-bold text-primary-color mb-1">
                            <span className="text-black">I&#39;m</span> SHAUN
                            HOSSAIN
                        </h1>
                        <h6 className="relative ml-7 w-fit md:text-2xl font-bold text-primary-color before:content-[''] before:absolute before:w-9 before:h-0.5 before:-left-11.25 before:top-1/2 before:-translate-y-1/2 before:bg-primary-color after:content-[''] after:absolute after:w-9 after:h-0.5 after:-right-11.25 after:top-1/2 after:-translate-y-1/2 after:bg-primary-color md:ml-11.25">
                            FULL STACK DEVELOPER
                        </h6>
                        <h4 className="md:text-3xl font-bold my-margin-elements-regular">
                            BRINGING{' '}
                            <span className="text-primary-color">
                                IMAGINATION
                            </span>{' '}
                            TO
                            <span className="text-primary-color"> LIFE </span>
                        </h4>
                        <Button className="bg-button-color hero-button">
                            Download Resume
                        </Button>
                    </div>
                </div>
                <div className="hidden md:w-1/2 md:flex justify-end overflow-hidden">
                    {' '}
                    {/* Added overflow-hidden */}
                    <Image
                        src="/images/hero-thumbnail.png"
                        className="w-1/2 hero-image" // Corrected: class is now here
                        alt="hero-thumbnail" // Corrected: alt is clean
                        width="500"
                        height="500"
                    />
                </div>
            </section>
            <section className="about-section px-sm-gutter mt-margin-section-regular md:flex md:px-gutter md:mt-32 ">
                <div className="flex justify-center md:bg-white md:p-margin-elements-regular md:border-l-white md:border-l md:rounded-l-xl">
                    <Image
                        src="/images/profile-img-group.png"
                        alt="hero-thumbnail"
                        width="100"
                        height="100"
                        className="w-3/4 md:w-160 "
                    />
                </div>
                <div className="md:bg-white md:p-margin-elements-regular md:flex md:flex-col md:justify-between md:border-r-white md:border-r md:rounded-r-xl">
                    <div className="md:flex md:flex-col md:justify-center md:h-3/4">
                        <h1 className="font-bold text-xl mb-margin-sm">
                            ABOUT ME
                        </h1>
                        <p className="text-justify">
                            I'm Shaun Hossain, a fullstack developer with 4
                            years of diverse experience. I'm expert in
                            JavaScript related framework/libraries such as Next
                            JS, React JS, Vue JS, Nuxt JS, Express JS, Node JS
                            etc. I also know CSS related work with Bootstrap,
                            Tailwind etc. and I'm familiar with UI/UX. My
                            passion lies in tackling diverse challenges and
                            creating amazing product with clean code that makes
                            it scalable for future.
                        </p>
                    </div>
                    <div className="flex gap-margin-sm justify-end mt-margin-sm md:mt-margin-elements-regular ">
                        <Image
                            src="/images/github-icon.png"
                            alt="github-icon"
                            width="100"
                            height="100"
                            className="w-6.25 h-6.25"
                        />
                        <Image
                            src="/images/gmail-icon.png"
                            alt="gmail-icon"
                            width="100"
                            height="100"
                            className="w-6.25 h-6.25"
                        />
                        <Image
                            src="/images/linkedIn-icon.png"
                            alt="linkedIn-icon"
                            width="100"
                            height="100"
                            className="w-6.25 h-6.25"
                        />
                    </div>
                </div>
            </section>
            <Image
                src="/images/Section Separator.png"
                alt="section-separator"
                className="section-separator ml-sm-gutter mt-margin-sm md:ml-gutter md:w-100 md:mt-margin-section-large"
                width="200"
                height="200"
            />
        </div>
    );
};
