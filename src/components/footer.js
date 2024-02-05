import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-pink-600 grid grid-cols-2 lg:grid-cols-4 p-12">
        <div className="flex flex-col p-10 space-y-5">
          <Image src={"/images/cropped-logo.webp"} height={200} width={200} />
          <h1 className="text-white text-2xl">Serves beauty Trends</h1>
        </div>
        <div className="flex flex-col p-10 space-y-1">
          <h1 className="text-white text-2xl font-bold">Shop All</h1>
          <h2 className="text-white text-xl">About</h2>
          <h2 className="text-white text-xl">Contact Us</h2>
          <h2 className="text-white text-xl">Privacy Policy</h2>
          <h2 className="text-white text-xl">Terms And Conditions</h2>
          <h2 className="text-white text-xl">Refund Policy</h2>
        </div>
        <div className="flex flex-col p-10 space-y-1">
          <h1 className="text-white text-2xl font-bold">Customer Support</h1>
          <h2 className="text-white text-xl">Cart</h2>
          <h2 className="text-white text-xl">Checkout</h2>
          <h2 className="text-white text-xl">My Account</h2>
        </div>
        <div className="flex flex-col p-10 space-y-5">
          <h1 className="text-white text-2xl font-bold">Subscribe</h1>
          <input
            type="text"
            placeholder="Your email address"
            className="px-4 py-2"
          />
          <button className="bg-pink-400 text-white w-32 p-2">Subscribe</button>
        </div>
      </div>
      <div className="flex bg-orange-200 p-5 justify-between">
        <h1 className="ml-48">
          Copyright © 2024 Glitter Galaxy Cosmetics | Powered by Ultimate Coder
        </h1>
        <div className="flex  mr-20 space-x-3">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
