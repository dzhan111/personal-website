"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";




const About = () => {
    return (
        <div id="about" className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-6">
            <div className="max-w-xl text-left space-y-4 mx-40">
                <h1 className="text-5xl font-bold">About me</h1>
                <p className="text-lg py-10">
                    I am a junior at the University of Pennsylvania pursuing a Bachelor&apos;s in Computer Science with Minors in Math and Data Science.
                    <br />
                    <br />
                    I’m passionate about building solutions that are both efficient and user-centered. In the summer of 2024, I worked as a Software Engineering Intern for a UMD start-up called Ventoscity. I redesigned their entire mobile app using Flutter, incorporating a GPT-4-powered food analysis feature.
                    <br />
                    <br />
                    During my time at school, I also work part-time as a Frontend Software Engineer for keep.id, a startup with the goal of providing proper identification for the homeless.
                    <br />
                    <br />
                    Outside of academics, I enjoy playing sports like soccer, basketball, and tennis.
                </p>

                <div className="flex items-center gap-4">
                    <button
                        className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-opacity-80 transition"
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        See my projects
                    </button>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4">
                        <a href="https://linkedin.com/in/davidzhan123" target="_blank" rel="noopener noreferrer" className="text-2xl text-foreground hover:text-opacity-80 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/dzhan111" target="_blank" rel="noopener noreferrer" className="text-2xl text-foreground hover:text-opacity-80 transition">
                            <FaGithub />
                        </a>
                        <a
                            href="/DavidZhanResume.pdf" // Example: "/resume.pdf" if placed in `public`
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-foreground hover:text-opacity-80 transition"
                        >
                           <FaAddressBook/>

                       
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
