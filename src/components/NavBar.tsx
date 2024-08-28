// "use client";
// import Head from "next/head";
import Image from "next/image";
// import { useState } from "react";
// import { title } from "process";
interface Props {
  title: string;
}

export default function NavBar(children: Props) {
  //   const title = useState("Parallel Intersect");
  return (
    <>
      {/* <Head>
        <title>{children.title}</title>
      </Head> */}

      <header className="fixed bg-gray-300 w-full top-0 font-bold">
        <a href="/" className="text-2xl px-2 absolute top-2 m-auto left-2">
          <div className="w-10 inline-block">
            <Image src="logo.svg" alt="PI" width={100} height={100} />
          </div>
          <h1 className="inline-block p-1 align-top">Parallel Intersect</h1>
        </a>
        <div className="flex flex-row justify-end p-4">
          <nav className="flex flex-row items-center sm:visible invisible">
            <div className="px-2">
              <a href="/blog">Blog</a>
            </div>
            <div className="px-2">
              <a href="/game">Games</a>
            </div>
            <div className="px-2">
              <a href="/market">Market Place</a>
            </div>
            <div className="px-2">
              <a href="/project">Projects</a>
            </div>
            <div className="px-2">
              <a href="https://discord.gg/QvPTddkA6H" target="_blank">
                Join Community
              </a>
            </div>
          </nav>
          <button className="rounded-lg p-2 bg-gray-500 m-px">Sign Up</button>
          <button className="top-2 right-2 rounded-lg p-2 bg-gray-500 m-px absolute sm:static">
            Log In
          </button>
        </div>
        <button
          className="absolute right-2 top-2 sm:invisible visible"
          type="button"
          id="show-nav"
        >
          =
        </button>
      </header>
    </>
  );
}
