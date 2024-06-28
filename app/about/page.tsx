import React from 'react'
import Link from 'next/link'
import Background from '../components/Background'

export default function About() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Background />
      <div className="z-10">
        <div>About</div>
        <Link className="" href="/">
          Home
        </Link>
      </div>
    </div>
  )
}
// TO DO
// Dynamic bar at the top of About/Experience/Projects page that rotates depending on which page you are on
// Start to style and add info to each page