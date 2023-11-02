import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import sudo from "../Imgs/sudo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto lg:flex items-center lg:justify-between p-4">
        <div className="flex items-center mb-4 justify-center">
          <a href="/signin">
            <img src={sudo} alt="Your Logo" className="w-12 h-12 mr-2" />
          </a>
          <h1 className="text-2xl font-bold tracking-wider">SUDO ❤</h1>
        </div>

        <div className="flex space-y-4 mb-4 flex-col items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className=" mr-2" beat />
            <p>(+91) 123-456</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className=" mr-2" beat />
            <p>info@example.com</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            <p>123 Srinagar, J&K, India</p>
          </div>
        </div>

        <div className="">
          <div className="flex space-y-4 flex-col items-center font-semibold tracking-wider">
            <a
              href="/"
              className="text-black hover:text-white transition-all duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/"
              className="text-black hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="text-black hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <hr className="md:hidden mt-2" />
        <div className="mt-4">
          <div className="flex space-x-4 justify-center">
            <a href="/" className=" hover:text-black ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="lg:h-8 lg:w-8 w-6 h-6"
              />
            </a>
            <a href="/" className=" hover:text-black">
              <FontAwesomeIcon
                icon={faTwitter}
                className="lg:h-8 lg:w-8 w-6 h-6"
              />
            </a>
            <a href="/" className=" hover:text-black">
              <FontAwesomeIcon
                icon={faInstagram}
                className="lg:h-8 lg:w-8 w-6 h-6"
              />
            </a>
            <a href="/" className=" hover:text-black">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="lg:h-8 lg:w-8 w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
