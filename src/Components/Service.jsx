import React from "react";
import serviceImage from "../assets/image1.png";
import serviceImage1 from "../assets/image2.png";
import Button from "./Button";
import Title from "./Title";

const ServiceSection = () => {
    return (
        <>
            <div className="w-full px-6 mt-0 md:px-16 lg:px-24 py-12">
                <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">

                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <img src={serviceImage} alt="Service" className="w-3/4 md:w-full h-auto" />
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <Title>Web & Mobile App<br /> Development</Title>
                        <p className="text-gray-700 mb-4 font-bold">
                            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                        </p>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 mt-0 md:px-6 lg:px-24 py-6">
                <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">

                <div className="w-full md:w-1/2 text-center md:text-left sm:flex-row-reverse">
                        <Title>Digital Strategy Consulting</Title>
                        <p className="text-gray-700 mb-4 font-bold">
                        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                        </p>
                        <Button>LEARN MORE</Button>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <img src={serviceImage1} alt="Service" className="w-3/4 md:w-full h-40px" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;
