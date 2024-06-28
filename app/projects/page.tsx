import React from "react";
import Link from "next/link";
import Background from "../components/Background";

export default function Experience() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Background />
      <div className="z-10">
        <div>Projects</div>
        <Link className="" href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
