"use client";
import { Fade } from "react-awesome-reveal";

const Academics = () => {
  return (
    <section
      id="academics"
      className="relative bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/images/Gallery/runprimary.JPG')",
      }}
    >
      {/* Dimmed background overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto lg:pt-20 sm:pb-24 px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center gap-12">
          {/* Preschool Section */}
          <div className="flex flex-col items-center max-w-md bg-lightgrey2 bg-opacity-60 p-8 rounded-lg shadow-lg">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
              <h2 className="text-white text-lg font-bold mb-3 uppercase text-center">
                Preschool
              </h2>
            </Fade>
            <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                Early Development
              </h3>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
              <p className="text-white text-base mb-6 text-center">
                Our preschool program fosters creativity and curiosity, setting
                a solid foundation for lifelong learning. Through interactive
                play and exploration, we inspire a love for learning in young
                minds.
              </p>
              <button className="text-lg font-medium rounded-full text-white py-3 px-6 bg-pink-600 transition duration-200 hover:bg-pink-700">
                Learn More
              </button>
            </Fade>
          </div>

          {/* Primary School Section */}
          <div className="flex flex-col items-center max-w-md bg-lightblue bg-opacity-60 p-8 rounded-lg shadow-lg">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
              <h2 className="text-white text-lg font-bold mb-3 uppercase text-center">
                Primary School
              </h2>
            </Fade>
            <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                Building a Strong Foundation
              </h3>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
              <p className="text-white text-base mb-6 text-center">
                Our primary school program nurtures critical skills and personal
                growth, turning challenges into opportunities. We guide students
                towards confident futures in a supportive learning environment.
              </p>
              <button className="text-lg font-medium rounded-full text-white py-3 px-6 bg-pink-600 transition duration-200 hover:bg-pink-700">
                Learn More
              </button>
            </Fade>
          </div>

          {/* Primary School Section */}
          <div className="flex flex-col items-center max-w-md bg-pink2 bg-opacity-60 p-8 rounded-lg shadow-lg">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
              <h2 className="text-white text-lg font-bold mb-3 uppercase text-center">
                High School
              </h2>
            </Fade>
            <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                Leading them to the future
              </h3>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
              <p className="text-white text-base mb-6 text-center">
                Our Highschool school program nurtures critical skills and
                personal growth, turning challenges into opportunities. We guide
                students towards confident futures in a supportive learning
                environment.
              </p>
              <button className="text-lg font-medium rounded-full text-white py-3 px-6 bg-pink-600 transition duration-200 hover:bg-pink-700">
                Learn More
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
