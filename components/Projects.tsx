"use client";

import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
//https://youtu.be/ZiOawvAcxjk

const projects = [
  {
    title: "Finetuned LSTMs for Sentiment Analysis",
    description: "Finetuned LSTMs for sentiment analysis on the IMDB dataset. Write-up below.",
    techStack: ["Python"],
    liveDemo: "/CIS_5300_Final_Project.pdf",
  },
  {
    title: "Trigram Viterbi POS tagger",
    description: "Hidden Markov Model implementation of the viterbi algorithm for part of speech tagging. Write-up below.",
    techStack: ["Python"],
    liveDemo: "/CIS530_HW2.pdf",
  },

  {
    title: "Linux Operating System",
    description: "Complete file management system, command line interface, and kernel scheduler supporting foreground and background processes. Message for code access.",
    techStack: ["C"],
  },
  {
    title: "Instalite",
    description: "A lightweight social media platform with post recommendations through adsorption algorithm, streaming via kafka, RAG for posts. ",
    githubLink: "https://github.com/dzhan111/Finetuning-Sentiment-Analysis-Models",
    liveDemo: "https://youtu.be/ZiOawvAcxjk",
    techStack: ["Typescript", "Express", "S3", "EC2", "Apache Spark", "Kafka", "ChromaDB", "Socket.io"]
  },


  {
    title: "Stephen AI Smith",
    description: "A real time autozooming + autocommentating bot. Takes input from any sports livestream link, commentates in voice of Stephen A. Smith",
    githubLink: "https://github.com/ezou626/cis5810finalproject",
    liveDemo: "https://youtu.be/lyDe1qwi74Q",
    techStack: ["React", "Tailwind", "Supabase", "FastAPI", "OpenAI", "Gemini", "OpenCV"]
  },
  {
    title: "DataLabeler",
    description: "A dense captioning service for creating relevant and detailed captions for creating contextually rich vision models. ",
    githubLink: "https://github.com/dzhan111/DataLabeler",
    liveDemo: "https://data-labeler-ten.vercel.app/",
    techStack: ["React", "Tailwind", "FastAPI", "Supabase", "LemonFox.ai", "MEGA", "AWS", "Render"]
  },
  {
    title: "Blip",
    description: "A Short form audio platform for microlearning. \n PennApps Hackathon XXV: Best Entertainment Hack",
    githubLink: "https://github.com/dzhan111/blipapp",
    liveDemo: "https://blipapp.vercel.app",
    techStack: ["TypeScript", "Next.js", "Tailwind", "Convex", "Clerk", "Whisper", "Cerebras"]
  },
  {
    title: "DavidDocs",
    description: "Real time collaboration environment with mentions + push notifications",
    liveDemo: "https://david-docs.vercel.app/sign-in",
    githubLink: "https://github.com/dzhan111/DavidDocs",
    techStack: ["TypeScript", "Next.js", "Tailwind", "liveblocks", "Clerk"]
  },

  {
    title: "Weasel",
    description: "A Spotify song recommendation platform for discovering new artists (message for access)",
    githubLink: "https://github.com/junhyunpark0126/weasel",
    liveDemo: "https://www.youtube.com/watch?v=ASowhSfDmdI",
    techStack: ["React", "Express", "MySQL", "AWS", "Neo4j"]
  },
  {
    title: "Instagram",
    description: "A mobile clone of Instagram, complete with posting, commenting, following, and liking.",
    githubLink: "https://github.com/dzhan111/instagram",
    techStack: ["Flutter", "Firebase", "Dart"]
  },

  {
    title: "ZetaMac Clone",
    description: "A clone of the popular arithmetic game by ZetaMac",
    liveDemo: "https://dzhan111.github.io/ZetaMac.github.io/",
    githubLink: "https://github.com/dzhan111/ZetaMac.github.io",

    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website (WIP)",
    description: "A test of Aceternity UI library and a placeholder for when I actually have a job",
    liveDemo: "https://portfolio-wxdh.vercel.app/",
    githubLink: "https://github.com/dzhan111/portfolio",
    techStack: ["TypeScript", "Next.js", "Tailwind", "Clerk", "Sentry",]
  },
];

export default function Projects() {
  return (
    <div id="projects" className="relative container mx-auto p-6 text-center bg-background text-foreground">
      <h1 className="text-5xl font-bold py-20">My Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-card shadow-lg rounded-lg p-6 flex flex-col h-full text-card-foreground">
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>

              {/* Tech Stack Section */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="flex gap-4 mt-auto py-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-foreground transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-foreground transition"
                >
                  <MdOutlineLiveTv className="text-2xl" />


                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      <button
        className="mt-8 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-opacity-80 transition"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
}
