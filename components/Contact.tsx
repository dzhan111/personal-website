"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen px-6 bg-background text-foreground">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Whether you are looking to collaborate, have a project in mind, or just want to say hi, feel free to reach out! Below are my socials and links to my resume.
        </p>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://linkedin.com/in/davidzhan123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-foreground hover:text-opacity-80 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dzhan111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-foreground hover:text-opacity-80 transition"
          >
            <FaGithub />
          </a>
          <a
            href="/DavidZhanResumeSWE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl text-foreground hover:text-opacity-80 transition"
          >
            <FaAddressBook />
          </a>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <a
            href="mailto:dazhan@sas.upenn.edu"
            className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-opacity-80 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
