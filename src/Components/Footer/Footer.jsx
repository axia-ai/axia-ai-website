import React from "react";
import { CgInstagram } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CgYoutube } from "react-icons/cg";
import { BsSend } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-[#f8f8f8] px-10 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row lg:items-start px-5">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <a href="/" className="flex items-center mb-4">
            <span className="font-bold text-2xl">Nexcent</span>
          </a>
          <p className="text-sm text-gray-400">
            Copyright © 2020 Nexcent Itd. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="/" className="rounded-full bg-gray-700 p-2">
              <CgInstagram />
            </a>
            <a href="/" className="rounded-full bg-gray-700 p-2">
              <CgFacebook />
            </a>
            <a href="/" className="rounded-full bg-gray-700 p-2">
              <AiFillTwitterCircle />
            </a>
            <a href="/" className="rounded-full bg-gray-700 p-2">
              <CgYoutube />
            </a>
          </div>
        </div>
        <div className=" mx-25  flex justify-between sm:pr-10 sm:justify-between">
          <div className="m-6 flex flex-col md:ml-10">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="m-6 flex flex-col md:ml-10">
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help-center" className="hover:underline">
                  Help center
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:underline">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:underline">
                  Legal
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/status" className="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:ml-10   ">
          <h3 className="font-bold text-lg mb-4">Stay up to date</h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder=" Enter your email address"
              className="px-4 py-2 rounded-md border text-white bg-[#515b60] border-[#515b60] "
            />
            <button
              href="/submit"
              type="submit"
              className=" ml-2 py-3 px-4 rounded-md bg-[#515b60] hover:bg-[#41484c]"
            >
              <BsSend />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
