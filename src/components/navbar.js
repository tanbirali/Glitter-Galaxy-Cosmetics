import { ShoppingBagIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="h-12 w-full bg-white grid grid-cols-2 lg:grid-cols-3 items-center">
        <div></div>
        <Link href={"/"}>
          <Image
            src={"/images/cropped-logo.webp"}
            width={310}
            height={200}
            alt="logo"
          />
        </Link>
        <div className="flex  flex-row space-x-5 items-center">
          <Link
            href={"/carts"}
            className="flex space-x-5 font-bold hover:text-pink-300 items-center"
          >
            <p className="font-bold">₹ 0.00</p>
            <div className="block relative p-3 rounded-lg ">
              <ShoppingBagIcon />
              <div className="absolute top-0 right-0 w-6 h-6 flex items-center justify-center">
                <p className=" text-white text-sm bg-black  hover:bg-pink-300 rounded-full px-1">
                  0
                </p>
              </div>
            </div>
          </Link>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
