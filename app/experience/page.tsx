"use client";
import React, { useState } from "react";
import Link from "next/link";
import Background from "../components/Background";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const workExperience = [
  {
    place: "Dealer Inspire",
    title: "Website Optimization Specialist",
    dates: "JAN 2019 - MAR 2021",
    details: {
      detailsOne:
        "Facilitated the transfer of critical organic authority-generating pages across domains.",
      detailsTwo:
        "Ensured existing SEO authority was transferred from one website platform to another.",
      detailsThree:
        "Coordinated with website production teams to flex to specific client needs, dependent on client goals and preferences with their new site platform.",
      detailsFour:
        "Given the opportunity to do self learning to implement Google App Scripts that would impact the team and help save time.",
    },
  },
  {
    place: "US Bank",
    title: "Retail Payment Solutions AML Analyst",
    dates: "AUG 2017 - DEC 2018",
    details: {
      detailsOne:
        "Responsible for researching and risk mitigation associated with credit card applications and existing accounts using business lines to review and maintain an effective risk management framework.",
      detailsTwo:
        "Researched business and customer information to adhere to local, state, and federal laws and regulations.",
      detailsThree:
        "Added to a secondary team of specialists to uplift current business accounts with up-to-date information provided by the customer/business.",
    },
  },
  {
    place: "VMC/MICROSOFT",
    title: "Dynamics GP Support Engineer",
    dates: "OCT 2015 - AUG 2017",
    details: {
      detailsOne:
        "Responsible for taking service requests for customers, and working with them to gather the needed information to be able to best troubleshoot their issue/error.",
      detailsTwo:
        "Tested resolutions within a test database of my own for customers, ensuring steps to resolve their issues worked correctly",
      detailsThree:
        "Communicated clearly and concisely with customers via email and phone calls.",
      detailsFour:
        "Continually managed numerous cases with multiple clients, while maintaining clear communication while providing instructions.",
    },
  },
];

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setSelectedJob(selectedJob === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex h-screen justify-center items-center overflow-hidden"
    >
      <div className="z-10 flex flex-col select-none">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="uppercase flex flex-col font-bold text-lg md:hidden">
            Tap to learn more
          </div>
          {workExperience.map((experience, index) => (
            <div key={experience.place} className="relative group">
              <AnimatePresence>
                {selectedJob === index ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -35 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white border border-zinc-600/85 bg-zinc-800 px-4 py-1 rounded-md"
                  >
                    Click to Close
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -35 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white border border-zinc-600/85 bg-zinc-800 px-4 py-1 rounded-md cursor-pointer hidden group-hover:block z-10"
                    onClick={() => toggleDetails(index)}
                  >
                    More...
                  </motion.div>
                )}
              </AnimatePresence>
              <article
                key={experience.place}
                onClick={() => toggleDetails(index)}
                className={`border border-zinc-600/85 rounded-lg items-center mx-3 my-3 w-[300px] md:w-[300px] xl:w-[400px] bg-zinc-800/55 p-6 cursor-pointer transition-opacity ${
                  selectedJob === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-100"
                }`}
              >
                <div>
                  <h4 className="text-center text-md md:text-lg font-light">
                    {experience.title}
                  </h4>
                  <p className="text-center text-[#935FA7] uppercase font-bold md:text-lg">
                    {experience.place}
                  </p>
                  <div className="flex space-x-2"></div>
                  <p className="text-center uppercase text-gray-300 mb-4">
                    {experience.dates}
                  </p>
                  {selectedJob === index && (
                    <ul
                      className={`text-[12px] list-disc space-y-2 ml-5 md:text-md ${
                        selectedJob === index ? "block" : "hidden"
                      } lg:block`}
                    >
                      {Object.values(experience.details).map((detail, i) => (
                        <motion.li
                          initial={{ opacity: 0 }}
                          animate={{ opacity: selectedJob === index ? 1 : 1 }} // Keep visible when selected
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          key={i}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
