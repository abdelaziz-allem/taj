"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Uniform = () => {
  return (
    <div className="z-0 bg-gray-100 text-gray-900" id="student-life-section">
      {/* Page Header */}
      <div
        className="z-0 relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Uniform</h1>
          </Fade>
        </div>
      </div>

      {/* Uniform Section */}
      <div id="uniform-section" className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-8">
          <Fade direction="up" delay={300} triggerOnce>
            <div className="space-y-6">
              <p className="text-xl font-bold">
                At Taj International School, we maintain a uniform policy that
                upholds professionalism, respect, and cultural awareness,
                helping create a unified environment.
              </p>
              <h3 className="text-2xl font-semibold">Uniform Guidelines</h3>
              <p className="text-lg font-light">
                Our uniform includes standard attire approved by the Ministry,
                with plain black shoes. High heels or brightly colored footwear
                are not permitted.
              </p>
              <h3 className="text-2xl font-semibold">Grooming Standards</h3>
              <p className="text-lg font-light">
                We ask students to maintain neat hairstyles, free from patterns
                or extreme styles. Hats are not permitted during school hours.
              </p>
              <h3 className="text-2xl font-semibold">
                Accessories and Electronics
              </h3>
              <p className="text-lg font-light">
                Makeup, jewelry, and mobile phones are not allowed, fostering an
                environment focused on learning and in-person interaction.
                Students may wear a simple hand watch.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Uniform;
