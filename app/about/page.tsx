"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="z-10 flex flex-col">
        {/* Mobile Profile Icon */}
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.7,
                ease: "easeIn",
              },
            },
          }}
        >
          <Image
            src="/images/andy-griffin-dory-space-justgriffin.png"
            width={200}
            height={200}
            alt="Black and white picture of Griffin holding a camera"
            className="object-none mb-4 w-36 h-36 rounded-full object-top bg-zinc-800/55 sm:hidden "
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          <div className="pb-4 uppercase text-4xl font-bold tracking-[2px]">
            Who is Griffin?
          </div>
        </motion.div>
        <motion.div
          className=" flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              // scale: 0.8,
              opacity: 0,
            },
            visible: {
              // scale: 1,
              opacity: 1,
              transition: {
                ease: "easeIn",
                delay: 0.7,
              },
            },
          }}
        >
          {/* Desktop Profile Icon */}
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 1.5,
                  ease: "easeIn",
                },
              },
            }}
          >
            <Image
              src="/images/andy-griffin-dory-space-justgriffin.png"
              width={200}
              height={200}
              alt="Black and white picture of Griffin holding a camera"
              className="absolute mr-[190px] object-none w-36 h-36 rounded-full object-top bg-zinc-800/55 hidden sm:block "
            />
          </motion.div>
          <div className="border border-zinc-600/85 lg:w-[500px] md:w-[500px] w-[300px] rounded-lg bg-zinc-800/55">
            <div className="px-4 py-2 text-center">
              A full stack developer focusing on front end development with a
              passion in creating beautiful, user-friendly digital experiences.
              I received my certificate in full stack development from the
              University of California Irvine&apos;s Coding Bootcamp. I&apos;m a
              highly motivated, fast learner who is always looking to improve my
              skills and learn new technologies. I have a background in SEO, SQL
              databases, Shopify site development.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}