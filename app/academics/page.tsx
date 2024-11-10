"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Academics = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900 z-0"
      id="academics-section"
    >
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Academics</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Our educational approach fosters knowledge, skills, and values for
              academic and personal growth, preparing students to thrive
              globally and locally.
            </p>
          </Fade>
        </div>
      </div>

      {/* Academic Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Taj Education */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Taj Education
                </h2>
                <p className="text-lg font-light">
                  At Taj International School, we emphasize a balanced education
                  that combines academic rigor with character-building
                  principles rooted in Islamic values.
                </p>
                <p className="text-lg font-light">
                  Our curriculum is designed to foster well-rounded,
                  responsible, and engaged individuals prepared for a dynamic
                  world.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Logo/logo.PNG"
                alt="Taj Education"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Curriculum Overview Section */}
          <div className="mt-12">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Curriculum Overview
              </h3>
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Languages Section */}
                <div className="flex-1 space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Languages
                  </h4>
                  <p className="text-lg font-light">
                    Our trilingual curriculum, including English, Arabic, and
                    Somali, fosters linguistic and cultural skills:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>
                      <strong>English:</strong> As a global language, it
                      connects students to international knowledge and
                      resources.
                    </li>
                    <li>
                      <strong>Arabic:</strong> Enhances Islamic studies,
                      fostering ties with the Arab world and cultural
                      understanding.
                    </li>
                    <li>
                      <strong>Somali:</strong> Maintains cultural heritage,
                      grounding students in their identity within their
                      community.
                    </li>
                  </ul>
                </div>

                {/* Core Subjects Section */}
                <div className="flex-1 space-y-6">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Core Subjects
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>
                      <strong>Math, Sciences, and Computer Studies:</strong> The
                      foundation of STEAM, equipping students with analytical
                      and problem-solving skills.
                    </li>
                    <li>
                      <strong>Islamic Studies:</strong> Provides moral and
                      spiritual guidance, preparing students for success in this
                      life and the hereafter.
                    </li>
                    <li>
                      <strong>Social Studies:</strong> Encourages an
                      understanding of history, society, and geography,
                      connecting past knowledge with future challenges.
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;