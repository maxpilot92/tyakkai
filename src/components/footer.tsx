import React from "react";
import { MapPin, Phone } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Footer = () => {
  return (
    <footer className=" mx-10 ">
      {/* Main footer with dark background */}
      <div className="bg-black text-white rounded-4xl">
        {/* Call to action section */}
        <div className="mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-8 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 mb-2">
              Ready to Transform Your
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business with Tyakkai?
            </h3>
          </div>
          <AnimatedButton className="border-[1px] border-[#ffc700]">
            Book a call with us!{" "}
          </AnimatedButton>
        </div>

        {/* Footer content section */}
        <div className="flex gap-10 mx-auto px-6 md:px-12 lg:px-16 py-12">
          <div className="md:col-span-1 w-[40%]">
            <p className="text-sm text-gray-400 mb-6">
              Unlock unlimited digital solutions with Tyakkai — from
              eye-catching design to powerful SEO, impactful social media
              strategies, and so much more. Request what you need, exactly when
              you need it — your all-in-one digital partner, ready to deliver
              results on demand.
            </p>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <MapPin size={16} className="mr-2" /> KMC 10 Sankhamul, Kathmandu
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Phone size={16} className="mr-2" /> Phone: 01-5920722
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[60%]">
            {/* Logo and about */}

            {/* Info links */}
            <div>
              <h4 className="text-gray-500 font-medium mb-4 uppercase text-sm tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources links */}
            <div>
              <h4 className="text-gray-500 font-medium mb-4 uppercase text-sm tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Website Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    SEO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    SEM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Designing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Video Editing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Content Creation
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="text-gray-500 font-medium mb-4 uppercase text-sm tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    KMC 10 Sankhamul
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Phone: 01-5920722
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    tyakkaisolution@tyakkai.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
