import { Backpack } from 'lucide-react';
import Image from 'next/image';

export const SkillsSection = () => {
    return (
        <section className="px-sm-gutter mt-margin-section-large">
            <h1 className="uppercase font-bold text-xl flex gap-margin-sm justify-center md:text-3xl md:items-center">
                <Backpack />
                Skills I Have
            </h1>
            <div className="mt-margin-section-regular md:grid md:grid-cols-4 md:px-gutter gap-4">
                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/cib_next-js.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>NEXT JS</h5>
                </div>

                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/devicon_vuejs.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>VUE JS</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/skill-icons_bootstrap.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>BOOTSTRAP 5</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/javascript.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>JAVASCRIPT</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular ">
                    <Image
                        src="/images/logos_nodejs-icon.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>NODE JS</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/skill-icons_mongodb.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>MONGODB</h5>
                </div>
                <div className="bg-[linear-gradient(35deg,_rgba(72,197,180,0.45)_65%,_rgba(255,255,255,1)_98%)] h-62.5 flex flex-col gap-4 justify-center items-center border border-primary-color/30 rounded-xl mb-margin-elements-regular">
                    <Image
                        src="/images/redux-js.png"
                        alt="skill-logo"
                        className="skill-logo"
                        width="100"
                        height="100"
                    />
                    <h5>REDUX JS</h5>
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
