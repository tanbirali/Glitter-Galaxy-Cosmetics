import Image from "next/image";

import Link from "next/link";

import {
  Facebook,
  Instagram,
  ShoppingBagIcon,
  Twitter,
  User,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="h-12 w-full bg-black flex items-center">
        <marquee className="text-violet-600 text-xl">
          Free Shipping above Rs 1499 &amp; more. Sale on hydraliners and
          blush&nbsp;,&nbsp;flat&nbsp;30%&nbsp;off.
        </marquee>
      </div>
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
        <div>
          <div className="flex space-x-5">
            <Link
              href={"/carts"}
              className="flex space-x-5 font-bold hover:text-pink-300"
            >
              <p className="font-bold">₹ 0.00</p> <ShoppingBagIcon />
            </Link>
            <User />
          </div>
        </div>
      </div>
      <div className="h-14 bg-pink-200 flex justify-center items-center">
        <Header />
      </div>

      <div className="bg-pink-800 h-96"></div>
      <div className="h-24 w-full bg-yellow-400 flex items-center">
        <marquee className="text-violet-800 text-xl">
          Vegan | cruelty free | no paraben | one swipe pigmentation | India's
          first glitter brand | always on point | International&nbsp;quality||
          Skincare infused| No SLS| No Rules||Mistake-Proof|| Serious Clean| Get
          Stuff Done|Multi Mode.
        </marquee>
      </div>
      <div>
        <Image
          src={"/images/below-banner.webp"}
          width={3000}
          height={3000}
          alt="banner"
        />
      </div>
      <div className="flex flex-col bg-white items-center p-12">
        <Image
          src={"/images/shop-now.webp"}
          width={500}
          height={500}
          alt="shop-now"
        />
        <h1 className="text-5xl text-extrabold font-family">
          Limited Time Offer!
        </h1>
        <span className="border border-fuchsia-300 w-28 mt-12"></span>
      </div>
      <div>
        <Image
          src={"/images/testimonials.webp"}
          width={3000}
          height={3000}
          alt="testomonials"
        />
      </div>
      <div className="bg-violet-200 flex p-12">
        <div className="flex justify-between">
          <div className="flex items-center space-x-8 ">
            <Image
              src={"/images/insta-logo.jpg"}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h1>Glitter Galaxy Cosmetics™</h1>
              <p>83 posts</p>
            </div>
          </div>
          <div className="flex">
            <button className="text-white bg-blue-400 p-4">Follow</button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
