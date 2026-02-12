'use client';

import { sendEmail } from '@/app/actions/sendmail';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { Mail, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import { useActionState, useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);
}

gsap.registerPlugin(ScrollTrigger);

export const MessageSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const [state, formAction, isPending] = useActionState(sendEmail, null);

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
                    <form
                        action={formAction}
                        className="md:w-1/2 bg-white mt-margin-section-large border-white rounded-xl"
                    >
                        <div className="p-4">
                            <h5 className="text-xl font-bold text-center">
                                Contact Me
                            </h5>

                            {/* Full Name */}
                            <div className="bg-[#f1f1f1] flex gap-2 p-2 border rounded-xl mb-4">
                                <img
                                    src="/images/mdi_contact.png"
                                    alt="icon"
                                    className="w-6 h-6"
                                />
                                <input
                                    name="name" // IMPORTANT
                                    type="text"
                                    required
                                    className="w-full bg-transparent focus:outline-none"
                                    placeholder="Full Name"
                                />
                            </div>

                            {/* Email */}
                            <div className="bg-[#f1f1f1] flex gap-2 p-2 border rounded-xl mb-4">
                                <img
                                    src="/images/basil_gmail-solid.png"
                                    alt="icon"
                                    className="w-6 h-6"
                                />
                                <input
                                    name="email" // IMPORTANT
                                    type="email"
                                    required
                                    className="w-full bg-transparent focus:outline-none"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Message */}
                            <div className="bg-[#f1f1f1] flex gap-2 p-2 border rounded-xl mb-4">
                                <img
                                    src="/images/mdi_message.png"
                                    alt="icon"
                                    className="w-6 h-6"
                                />
                                <textarea
                                    name="message" // IMPORTANT
                                    className="w-full bg-transparent focus:outline-none"
                                    placeholder="Tell me your product and goal"
                                    rows={7}
                                    required
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="bg-button-color w-full py-3 rounded-lg text-white hover:bg-primary-color transition-colors duration-300"
                            >
                                {isPending ? 'Sending...' : 'Send Message'}
                            </Button>
                            {state?.success && (
                                <p className="text-primary-color mt-4 text-center">
                                    Email sent successfully!
                                </p>
                            )}
                            {state?.success === false && (
                                <p className="text-red-500 mt-4 text-center">
                                    Failed to send email.
                                </p>
                            )}
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
};
