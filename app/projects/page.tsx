"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    project: "Valo-EZ",
    title: "Aggregated information for VALORANT",
    description:
      "Using a public API, this site brings all kinds of helpful information about the game VALORANT.",
    tech: ["Next.js", "Tailwind CSS", "REST API"],
    link: "https://valo-ez.vercel.app/",
  },
  {
    project: "Valorant Strategy Randomizer",
    title: "Tactical Strat Generator",
    description:
      "Web tool for generating random strats for VALORANT. Built with React and Tailwind.",
    tech: ["React", "Next.js", "Tailwind", "Vercel"],
    link: "https://valorantstrategyrandomizer.github.io/StratRandomizer/",
  },
  {
    project: "LLM (Love Letter to Myself)",
    title: "Personal journal and idea dump",
    description:
      "Where my inner monologue meets the real world. This project is under construction.",
    tech: ["Next.js", "Obsidian.MD", "Tailwind CSS"],
    link: "",
  },
];

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

export default function ProjectCarousel() {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);

  const goToSlide = (index: number) => {
    if (index === current) return;
    setCurrent([index, index > current ? 1 : -1]);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white px-4">
      <div className="relative max-w-xl w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={projects[current].project}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // Outer wrapper with animated gradient border
            className="relative p-[3px] rounded-xl bg-gradient-to-r from-[#935FA7] via-[#000000] to-[#935FA7] animate-borderPan bg-[length:200%_200%]"
          >
            {/* Inner card with solid background and rounded corners */}
            <div className="bg-zinc-800 rounded-lg p-8">
              {projects[current].link ? (
                <a
                  href={projects[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl font-bold mb-2  hover:text-[#935FA7]"
                >
                  {projects[current].project}
                </a>
              ) : (
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {projects[current].project}
                </h2>
              )}
              <p className="text-[#935FA7]/80 mb-4">
                {projects[current].title}
              </p>
              <p className="mb-4">{projects[current].description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {projects[current].tech.map((tech, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-zinc-700 rounded-xl text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-4 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-8 rounded-lg transition-colors ${
                current === index
                  ? "bg-[#935FA7]/70"
                  : "bg-[#3d2746]/70 hover:bg-[#5c3c69]"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
