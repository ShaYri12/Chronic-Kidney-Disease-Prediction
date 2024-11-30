import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Images/logo-white.png";

const Footer = () => {
  return (
    <footer className="text-white bg-[#0b9444] body-font">
      <div className="container px-5 pt-24 pb-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="text-center flex flex-col lg:w-1/3  w-full items-center pb-8">
            <div className="flex flex-col items-center">
              <img src={logo} alt="" className="text-white h-24" />
              <h2 className=" title-font text-white text-2xl font-bold pt-5">
                Disease Prediction System
              </h2>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus ratione error reiciendis.
              </p>
              <nav className="list-none mt-4 space-y-4 font-normal flex flex-col items-center">
                <li>
                  <Link className="text-white hover:text-white my-auto flex align-center space-x-1">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                    </svg>
                    <span className="my-auto flex align-center">
                      +92 1234567890
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white flex align-center space-x-1">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                    <span> DPS@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white flex align-center space-x-1">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                    </svg>
                    <span>123 Location, Karachi</span>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-full w-full px-4">
            <div className="flex flex-col items-center">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-8">
                Quick Links
              </h2>
              <nav className="list-none mb-10 space-y-4 font-normal">
                <li>
                  <Link className="text-white hover:text-white">Link One</Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white">Link Two</Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white">
                    Link Three
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white">Link Four</Link>
                </li>
                <li>
                  <Link className="text-white hover:text-white">Link Five</Link>
                </li>
              </nav>
            </div>
          </div>
          <div className="lg:w-2/6 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-lg lg:mb-8 mb-3">
              Subscribe
            </h2>
            <p className="text-white text-md lg:mb-6 mb-3 md:text-left text-center font-normal">
              Sign up for our newsletter and get all the updates first.
            </p>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="flex justify-center items-center p-4 bg-transparent border-white border focus-within:border-black rounded-full w-full  mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  aria-label="Email address"
                  className="bg-transparent border-none text-white placeholder-white focus:ring-0 focus:outline-none w-full"
                />
                <button className="ml-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-xs mt-4 md:text-left text-center font-normal">
              By subscribing you agree to with our{" "}
              <Link className="underline" href="#">
                {" "}
                Privacy Policy{" "}
              </Link>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0b9444]">
        <div className="max-w-[1440px] w-full h-[2px] mx-auto bg-white"></div>
        <div className="container px-5 py-6 pb-10 mx-auto flex items-center md:flex-row flex-col bg-gray">
          <p className=" text-sm text-white sm:ml-6 sm:mt-0 mt-4 sm:text-left text-center">
            © 2024 Disease Prediction System. All rights reserved.
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-white underline mx-1"
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-white underline mx-1"
              target="_blank"
            >
              Terms of Services
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="text-white underline mx-1"
              target="_blank"
            >
              Cookies Settings
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="facebook.com" className="text-white">
              <img src="/Facebook.svg" />
            </Link>
            <Link href="instagram.com" className="ml-3 text-white">
              <img src="/Instagram.svg" />
            </Link>
            <Link href="x.com" className="ml-3 text-white">
              <img src="/X.svg" />
            </Link>
            <Link href="Linkedin.com" className="ml-3 text-white">
              <img src="/LinkedIn.svg" />
            </Link>
            <Link href="youtube.com" className="ml-3 text-white">
              <img src="/Youtube.svg" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
