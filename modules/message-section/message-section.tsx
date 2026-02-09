'use client';

import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { Mail, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);
}

gsap.registerPlugin(ScrollTrigger);

export const MessageSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const split = new SplitText('.contact-header', {
                type: 'chars, words',
            });
            const contactCards = gsap.utils.toArray(boxRef.current!.children);

            // 1. Setup initial states
            gsap.set(split.chars, { display: 'inline', position: 'relative' });

            // 2. Create a single Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current, // Triggering based on the section
                    start: 'top 160%',
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
                contactCards,
                {
                    opacity: 0, // Starts fully transparent
                    y: 30, // Subtle slide up
                    duration: 1.2, // Longer duration makes the "fade" look smoother
                    stagger: 0.2, // More time between each card for a clear sequence
                    ease: 'power1.inOut', // A gentle ease that makes the fade look more natural
                },
                '-=0.3', // Starts slightly earlier for better flow
            );
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            className="px-sm-gutter mt-margin-section-large md:px-gutter"
        >
            <div className="bg-[linear-gradient(to_bottom,rgba(21,9,99,1),rgba(48,27,179,0.7))] border-white rounded-xl md:bg-[linear-gradient(to_right,rgba(21,9,99,1),rgba(48,27,179,0.7))] p-margin-elements-regular">
                <h1 className="contact-header uppercase font-bold text-xl flex gap-margin-sm justify-center md:text-3xl md:items-center text-white ">
                    <MessageSquareText className="text-white" />
                    Get In Touch
                </h1>
                <section
                    ref={boxRef}
                    className="md:flex md:justify-between md:items-center md:p-margin-elements-regular"
                >
                    <div className="flex flex-col">
                        <h4 className="text-2xl font-bold text-white text-center mt-margin-section-regular md:text-start">
                            HAVE A PROJECT?
                        </h4>
                        <h4 className="text-2xl font-bold text-white text-center md:text-start">
                            Let's talk!
                        </h4>

                        <ul className="mt-margin-section-regular">
                            <li className="flex gap-3 text-white justify-start">
                                <Image
                                    src="/images/mouse-pointer-square.png"
                                    alt="contact-icon"
                                    className="w-6.25 h-6.25"
                                    width={100}
                                    height={100}
                                />
                                Let's collaborate something amazing together
                            </li>
                            <li className="flex gap-3 text-white justify-start">
                                <Image
                                    src="/images/mouse-pointer-square.png"
                                    alt="contact-icon"
                                    className="w-6.25 h-6.25"
                                    width={100}
                                    height={100}
                                />
                                A message away from building modern, responsive
                                website
                            </li>
                            <li className="flex gap-3 text-white justify-start">
                                <Image
                                    src="/images/mouse-pointer-square.png"
                                    alt="contact-icon"
                                    className="w-6.25 h-6.25"
                                    width={100}
                                    height={100}
                                />
                                I'll get back to you within 24 hours
                            </li>
                        </ul>
                        <div className="mt-16 hidden md:block">
                            <div className="text-white flex gap-2">
                                <Mail className="text-white" />
                                <span className="email-address">
                                    shaunhossain655@gmail.com
                                </span>
                            </div>
                            <div className="text-white flex gap-2">
                                <Image
                                    src="/images/linked-in.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-6.25 h-6.25"
                                />
                                <span>
                                    https://www.linkedin.com/in/shaun-hossain-4361b4135
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mt-margin-section-large border-white rounded-xl p-2">
                        <div className="">
                            <h5 className="text-xl font-bold text-center">
                                Contact Me
                            </h5>
                            <div className="bg-[#f1f1f1] flex gap-2 p-2 border rounded-xl mb-4">
                                <Image
                                    src="/images/mdi_contact.png"
                                    alt="contact-icon"
                                    width={100}
                                    height={100}
                                    className="w-6.25 h-6.25"
                                />
                                <input
                                    type="text"
                                    className="w-full focus:outline-none focus:ring-0 focus:border-transparent"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="bg-[#f1f1f1] flex gap-2 p-2 border rounded-xl mb-4">
                                <Image
                                    src="/images/basil_gmail-solid.png"
                                    alt="gmail-icon"
                                    width={100}
                                    height={100}
                                    className="w-6.25 h-6.25"
                                />
                                <input
                                    type="text"
                                    className="w-full focus:outline-none focus:ring-0 focus:border-transparent"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="bg-[#f1f1f1] flex gap-2 p-2 border rounded-xl mb-4">
                                <Image
                                    src="/images/mdi_message.png"
                                    alt="message-icon"
                                    width={100}
                                    height={100}
                                    className="w-6.25 h-6.25"
                                />
                                <textarea
                                    name=""
                                    id=""
                                    className="w-full focus:outline-none focus:ring-0 focus:border-transparent"
                                    placeholder="Tell me your product and goal"
                                    rows={7}
                                    cols={40}
                                ></textarea>
                            </div>
                        </div>
                        <Button className="bg-button-color w-full hover:bg-primary-color transition-colors duration-300">
                            Send Message
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    );
};
