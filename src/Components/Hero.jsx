import React from "react";
import heroImage from "../assets/HeroImage.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto md:h-screen object-cover"
        />
        <div className="absolute inset-0 hidden md:flex items-center px-6 md:px-16 lg:px-24">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 md:p-8 lg:p-12 max-w-lg text-white rounded-lg">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <Button href="https://www.youtube.com">GET FREE CONSULTATION</Button>
          </div>
        </div>
      </div>
      <div className="px-6 md:hidden py-6 flex justify-center w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="p-6 w-full text-left">
          <h1 className="text-4xl font-bold mb-4">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
