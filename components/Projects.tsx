"use client";

const projects = [
  {
    title: "Blip",
    description: "A Short form audio platform for microlearning. \n PennApps XXV: Best Entertainment Hack",
    githubLink: "https://github.com/dzhan111/blipapp",
    liveDemo: "https://blipapp.vercel.app",
    techStack: ["TypeScript", "Next.js", "Tailwind", "Convex", "Clerk"]
  },
  {
    title: "Ngram POS tagger",
    description: "A n-gram Hidden Markov Model part of speech tagger.",
    githubLink: "https://github.com/username/project2",
    techStack: ["Python"]
  },
  {
    title: "DavidDocs",
    description: "Real time collaboration environment with mentions + push notifications",
    liveDemo: "https://project3-demo.com",
    githubLink: "https://github.com/username/project2",
    techStack: ["TypeScript", "Next.js", "Tailwind", "liveblocks", "Clerk"]
  },
  {
    title: "Weasel",
    description: "A Spotify song recommendation platform for discovering new artists",
    githubLink: "https://github.com/username/project2",
    techStack: ["React", "Node.js", "MySQL", "AWS", "Neo4j"]
  },
  {
    title: "Instagram",
    description: "A clone of Instagram, complete with posting, commenting, following, and liking functions",
    techStack: ["Flutter", "Firebase", "Dart"]
  },
  {
    title: "Project 4",
    description: "This is a description of Project 4.",
    techStack: ["Django", "React", "SQLite"]
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto p-6 text-center bg-background text-foreground">
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
            <div className="flex gap-4 mt-auto">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-primary-foreground rounded-md hover:bg-opacity-80 transition"
                >
                  GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-300 text-accent-foreground rounded-md hover:bg-opacity-80 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-8 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-opacity-80 transition"
        onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
}
