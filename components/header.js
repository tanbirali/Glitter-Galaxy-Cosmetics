import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex space-x-5 items-center">
      <div className="m-6 h-10 bg-gradient-to-b from-violet-200 to-white flex items-center">
        <Link href={"/"} className="p-2 hover:bg-gray-300">
          Home
        </Link>
        <Link href={"/store"} className="p-2 hover:bg-gray-300">
          Shop All
        </Link>
        <Link href={"/store"} className="p-2 hover:bg-gray-300">
          GLITTERS
        </Link>
        <Link href={"/store"} className="p-2 hover:bg-gray-300">
          PALLETES
        </Link>
        <Link href={"/store"} className="p-2 hover:bg-gray-300">
          HYDRALINER
        </Link>
        <Link href={"/store"} className="p-2 hover:bg-gray-300">
          BLUSH
        </Link>
        <Link href={"/store"} className="p-2 hover:bg-gray-300">
          SALE
        </Link>
      </div>

      <Link href={"/track-order"}>TRACK ORDER</Link>
    </div>
  );
};

export default Header;
