import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Cards = ({ image, title }) => {
  return (
    <div>
      <div className="flex flex-col justify-center border-black border-2 p-5 w-96 rounded-md space-y-9">
        <Image src={image} width={400} height={400} alt={"store-images"} />

        <h1 className="m-auto text-violet-700 font-semibold">{title}</h1>
        <div className="flex justify-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <button className="bg-pink-400 text-white rounded-md m-auto p-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
