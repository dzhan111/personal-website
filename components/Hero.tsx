"use client"
export default function Hero() {
    return (
      <div id="hero" className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-5xl font-bold">Hi, I&apos;m David</h1>
          <p className="text-lg mt-4">
            I&apos;m a software engineer and data enthusiast, passionate about creating solutions that make a difference.
            Welcome to my personal space!
          </p>
          <button className="mt-8 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-opacity-80 transition"
           onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </button>
        </div>
  
        {/* Optional: 3D Card Demo or any additional component */}
       
      </div>
    );
  }