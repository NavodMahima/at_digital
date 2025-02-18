import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white px-6 py-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="col-span-4">
            <div className="mb-4">
              <img src={logo} alt="at digital" className="h-8" />
            </div>
            <p className="text-sm pr-8">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>

          <div className="col-span-4">
            <h3 className="text-lg font-medium mb-4">Our Technologies</h3>
            <ul className="space-y-2">
              <li><a href="/technologies/reactjs" className="hover:underline">ReactJS</a></li>
              <li><a href="/technologies/gatsby" className="hover:underline">Gatsby</a></li>
              <li><a href="/technologies/nextjs" className="hover:underline">NextJS</a></li>
              <li><a href="/technologies/nodejs" className="hover:underline">NodeJS</a></li>
            </ul>
          </div>

          <div className="col-span-4">
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/social-media" className="hover:underline">Social Media Marketing</a></li>
              <li><a href="/services/web-mobile" className="hover:underline">Web & Mobile App Development</a></li>
              <li><a href="/services/data-analytics" className="hover:underline">Data & Analytics</a></li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="mb-6">
            <img src={logo} alt="at digital" className="h-8 mb-4" />
            <p className="text-sm mb-8">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium mb-4">Our Technologies</h3>
              <ul className="space-y-2">
                <li><a href="/technologies/reactjs" className="hover:underline">ReactJS</a></li>
                <li><a href="/technologies/gatsby" className="hover:underline">Gatsby</a></li>
                <li><a href="/technologies/nextjs" className="hover:underline">NextJS</a></li>
                <li><a href="/technologies/nodejs" className="hover:underline">NodeJS</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/social-media" className="hover:underline">Social Media Marketing</a></li>
                <li><a href="/services/web-mobile" className="hover:underline">Web & Mobile App Development</a></li>
                <li><a href="/services/data-analytics" className="hover:underline">Data & Analytics</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mb-6">
            <img src={logo} alt="at digital" className="h-8" />
          </div>
          
          <p className="text-sm mb-8">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Our Technologies</h3>
            <ul className="space-y-2">
              <li><a href="/technologies/reactjs" className="hover:underline">ReactJS</a></li>
              <li><a href="/technologies/gatsby" className="hover:underline">Gatsby</a></li>
              <li><a href="/technologies/nextjs" className="hover:underline">NextJS</a></li>
              <li><a href="/technologies/nodejs" className="hover:underline">NodeJS</a></li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/social-media" className="hover:underline">Social Media Marketing</a></li>
              <li><a href="/services/web-mobile" className="hover:underline">Web & Mobile App Development</a></li>
              <li><a href="/services/data-analytics" className="hover:underline">Data & Analytics</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-indigo-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-4 text-sm">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
