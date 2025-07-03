"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const projects = [
  {
    project: "Valo-EZ",
    title: "Aggregated information for VALORANT",
    description:
      "Using a public API, this site brings all kinds of helpful information about the game VALORANT.",
    tech: ["Next.js", "Tailwind CSS", "REST API"],
  },
  {
    project: "Valorant Strategy Randomizer",
    title: "Tactical Strat Generator",
    description:
      "Web tool for generating random strats for competitive Valorant play. Built with React and Tailwind.",
    tech: ["React", "Next.js", "Tailwind", "Vercel"],
  },
  {
    project: "Brain Dump",
    title: "Personal journal and Brain Dump",
    description:
      "A minimalist journaling app using my personal Obsidian Locker and Next.js.",
    tech: ["Next.js", "Obsidian.MD", "Tailwind CSS"],
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {projects[current].project}
              </h2>
              <p className="text-[#935FA7]/55 mb-4">{projects[current].title}</p>
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
              className={`h-4 w-4 rounded-full transition-colors ${
                current === index
                  ? "bg-[#935FA7]"
                  : "bg-[#3d2746] hover:bg-[#5c3c69]"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
