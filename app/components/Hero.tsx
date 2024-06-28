"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Griffin!", "Currently Looking for Work!"],
    loop: false,
    delaySpeed: 2500,
  });

  return (
    <div className="z-10 flex flex-col h-screen items-center justify-center">
      <h1 className="text-5xl font-bold  pb-2">
        <span>{text}</span>
        <Cursor cursorColor="#935FA7" />
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.8,
            },
          },
        }}
      >
        <h2 className="text-l pt-2 uppercase pb-2 tracking-[5px]">
          Front-End Developer
        </h2>
      </motion.div>
      <motion.div
        className="pt-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 2.2,
            },
          },
        }}
      >
        <Link href="about">
          <button className="heroButton">About</button>
        </Link>

        <Link href="experience">
          <button className="heroButton">Experience</button>
        </Link>

        <Link href="projects">
          <button className="heroButton">Projects</button>
        </Link>
      </motion.div>

      <motion.div 
        className="flex justify-center items-center mt-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden:{
            // scale: 0.8,
            opacity: 0,
            y: 100,
          },
          visible: {
            // scale: 1,
            opacity: 1,
            y: 0,
            transition:{
              delay: 2.5
            }
          }
        }}
        >
        <Link href="https://github.com/ffirgin/" target="_blank">
          <FaGithub className="mx-2" size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/grffn/" target="_blank">
          <FaLinkedin color="" className="mx-2" size={30} />
        </Link>
      </motion.div>
    </div>
  );
}
