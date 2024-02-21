"use client";
import Cards from "@/components/cards";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

const Store = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://glittergalaxycosmetics.com/wp-json/wc/v2/products?consumer_key=ck_b36e04324636e54e8c08097024a63eafe7c06d8e&consumer_secret=cs_d07434523fdae1e9a5a9fb4d575ca6f4a9c604a4"
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        console.log(res);
        console.log(res.images[0].src);
      });
  }, []);
  const fetchData = async () => {};

  return (
    <div>
      <div className="h-12 w-full bg-black flex items-center">
        <marquee className="text-violet-600 text-xl">
          Free Shipping above Rs 1499 &amp; more. Sale on hydraliners and
          blush&nbsp;,&nbsp;flat&nbsp;30%&nbsp;off.
        </marquee>
      </div>
      <Navbar />
      <div className="flex bg-violet-100 justify-center">
        <Header />
      </div>
      <div className="flex bg-pink-100 p-7 space-x-14">
        <div className="flex flex-col space-y-4">
          <div className="flex items-end space-x-3">
            <div className="flex flex-col">
              <label className="text-violet-400 text-xl">Search</label>
              <input
                type="text"
                placeholder="search product"
                className="p-2 border-red-800 border-2 rounded-md"
              />
            </div>
            <button
              className="bg-purple-400 p-2 rounded text-white font-semibold"
              onClick={fetchData}
            >
              Search
            </button>
          </div>
          <label className="text-violet-400 text-xl font-semibold">
            Filter By Price
          </label>
        </div>
        <div className="border-red-800 border"> </div>
        <div className=" w-full p-6 space-y-6 space-x-2">
          <h1 className="font-bold text-black text-5xl"> Store</h1>
          <div className="border-red-800 w-full  border"> </div>
          <div className="w-full flex items-center justify-between">
            <div className="">
              <label>Showing Results of 1-16 of 28 results</label>
            </div>
            <div>
              <select className="p-2 text-semibold text-sm rounded-md bg-inherent">
                <option>Default Sorting</option>
                <option>Default Sorting</option>
                <option>Default Sorting</option>
                <option>Default Sorting</option>
                <option>Default Sorting</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((p) => (
              <div key={p.id} className="grid grid-cols-2">
                <Cards image={p.images[1].src} title={p.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
