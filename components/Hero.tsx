"use client";


const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ color: "blueviolet" }} // Place your hero background image in the public folder
    >
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Landing Page
        </h1>
        
        
      </div>
    </div>
  );
};

export default Hero;
