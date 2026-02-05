import { Button } from '@/components/ui/button';
import { ChartBar } from 'lucide-react';
import Image from 'next/image';

export const WorkSection = () => {
    return (
        <section className="px-sm-gutter mt-margin-section-large md:px-gutter">
            <h1 className="uppercase font-bold text-xl flex gap-margin-sm justify-center md:text-3xl md:items-center mb-margin-section-regular">
                <ChartBar />
                WORK I HAVE DONE
            </h1>
            <div className="md:grid md:grid-cols-3 gap-4">
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100"
                        width="100"
                        height="100"
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
                            <Button className="bg-button-color w-3/4">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100"
                        width="100"
                        height="100"
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
                            <Button className="bg-button-color w-3/4">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100"
                        width="100"
                        height="100"
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
                            <Button className="bg-button-color w-3/4">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100"
                        width="100"
                        height="100"
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
                            <Button className="bg-button-color w-3/4">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-[linear-gradient(35deg,rgba(72,197,180,0.45)_65%,rgba(255,255,255,1)_98%)]  rounded-xl p-margin-elements-regular mb-margin-elements-regular">
                    <Image
                        src="/images/project-img.png"
                        alt="project-thumbnail"
                        className="w-80 md:w-100"
                        width="100"
                        height="100"
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
                            <Button className="bg-button-color w-3/4">
                                View Project
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
