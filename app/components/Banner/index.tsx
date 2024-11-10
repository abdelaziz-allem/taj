"use client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      id="home-section"
      className="z-0 h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Gallery/runprimary.JPG')" }}
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20"></div>

      <div className="relative z-10 text-center px-6">
        <Fade direction={"up"} delay={400} cascade damping={0.1} triggerOnce>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5">
            Welcome to <br /> Taj International school!
          </h1>
        </Fade>

        <Fade direction={"up"} delay={800} cascade damping={0.1} triggerOnce>
          <p className="text-white text-lg lg:text-xl mb-8 max-w-xl mx-auto">
            Empowering students in Somaliland through education, growth, and
            lifelong learning.
          </p>
        </Fade>

        <Fade direction={"up"} delay={1000} cascade damping={0.1} triggerOnce>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="text-xl font-semibold rounded-full text-white py-4 px-8 bg-pink transition hover:bg-pink/80"
              href="#about-section"
            >
              Why us?
            </Link>
            <Link
              className="text-xl font-semibold rounded-full text-pink py-4 px-8 bg-white border border-pink transition hover:bg-pink hover:text-white"
              href="#contact"
            >
              Contact us
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
