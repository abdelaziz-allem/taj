"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/Expert/teacher.JPG')" }}
      id="about-section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0" />

      {/* Main Content */}
      <div className="relative z-10 py-16">
        <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
          <div className="text-center space-y-8">
            <Fade direction={"down"} delay={200} triggerOnce>
              <h3 className="text-4xl lg:text-6xl font-bold">
                Empowering Students for a Brighter Future
              </h3>
            </Fade>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* School Logo */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/Logo/logo.PNG"
                className="bg-white rounded-lg shadow-lg p-5"
                alt="Taj School Logo"
                width={500}
                height={500}
              />
            </div>

            {/* About Content */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <Fade direction={"up"} delay={400} cascade triggerOnce>
                <p className="text-lg font-light">
                  Taj School, located in the heart of Somaliland, is dedicated
                  to providing a quality education that equips students with the
                  knowledge, skills, and character they need to succeed.
                </p>
                <p className="text-lg font-light">
                  Our curriculum inspires a love for learning while promoting
                  critical thinking and problem-solving skills, emphasizing
                  leadership, community service, and preparation for future
                  contributions to Somaliland&apos;s development.
                </p>
              </Fade>
            </div>
          </div>

          {/* Mission, Vision, Values Section */}
          <div className="mt-20">
            <Fade direction={"up"} delay={500} triggerOnce>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-pink">
                    Our Mission
                  </h4>
                  <p className="text-lg font-light">
                    To provide an education that fosters knowledge, confidence,
                    and the drive to shape the future with wisdom and
                    compassion.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-pink">
                    Our Vision
                  </h4>
                  <p className="text-lg font-light">
                    A generation of learners equipped to make a lasting impact
                    in their communities and beyond.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-pink">
                    Our Values
                  </h4>
                  <p className="text-lg font-light">
                    Integrity, Excellence, Community, and Continuous Growth.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
