"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function About() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center select-none">
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
            alt="Drawn picture of Griffin as a Space Engineer"
            className="object-none mb-4 w-36 h-36 rounded-full object-top bg-zinc-800/55"
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
            Who am I?
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
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
                  ease: "easeIn",
                  delay: 0.7,
                },
              },
            }}
          >
            <motion.div
              className="p-[2px] rounded-xl bg-gradient-to-r from-[#935FA7] via-[#000000] to-[#935FA7] animate-borderPan bg-[length:200%_200%] lg:w-[500px] md:w-[500px] w-[300px]"
            >
              <div className="bg-zinc-800 border border-zinc-600/85 rounded-lg px-4 py-4 text-center">
                A full stack developer focusing on front end development with a
                passion in creating beautiful, user-friendly digital experiences.
                I received my certificate in full stack development from the
                University of California Irvine&apos;s Coding Bootcamp. I&apos;m a
                highly motivated, fast learner who is always looking to improve my
                skills and learn new technologies. I have a background in SEO, SQL
                databases, Shopify site development.
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
