import Image from "next/image";
import Header from "../../components/header";
import Link from "next/link";
import Footer from "../../components/footer";
import {
  Facebook,
  Instagram,
  ShoppingBagIcon,
  Twitter,
  User,
} from "lucide-react";

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
        {/* <Header /> */}
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
        {/* <Footer /> */}
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
            <button className="bg-pink-400 text-white w-32 p-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex bg-orange-200 p-5 justify-between">
          <h1 className="ml-48">
            Copyright © 2024 Glitter Galaxy Cosmetics | Powered by Ultimate
            Coder
          </h1>
          <div className="flex  mr-20 space-x-3">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </>
  );
}
