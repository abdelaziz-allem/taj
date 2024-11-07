"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Curriculum = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900 z-0"
      id="curriculum-section"
    >
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Curriculum Overview
            </h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Our curriculum is trilingual, teaching English, Arabic, and Somali
              from the earliest levels, while focusing on essential subjects to
              prepare students for both local and global engagement.
            </p>
          </Fade>
        </div>
      </div>

      {/* Curriculum Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Language Overview */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Language Instruction
                </h2>
                <p className="text-lg font-light">
                  Our curriculum includes comprehensive instruction in three
                  languages, each playing a critical role in shaping student
                  identities and preparing them for diverse landscapes:
                </p>
                <ul className="text-lg font-light list-disc list-inside space-y-2">
                  <li>
                    <strong>English</strong>: As a global language, English
                    opens doors to international knowledge, enabling our
                    students to engage with worldwide information and resources.
                  </li>
                  <li>
                    <strong>Arabic</strong>: Supports a deeper understanding of
                    Islamic studies and strengthens ties with the Arab world,
                    sharing significant cultural and historical connections.
                  </li>
                  <li>
                    <strong>Somali</strong>: Our national language preserves
                    cultural heritage, grounding students in their identity and
                    enabling effective community communication.
                  </li>
                </ul>
              </Fade>
            </div>

            {/* Language Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Features/english.png"
                alt="Language Illustration"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Core Subjects Section */}
          <div className="mt-12">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Core Subjects
              </h3>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <Fade direction="up" delay={300} triggerOnce>
                    <p className="text-lg font-light">
                      Beyond languages, our curriculum includes essential
                      subjects that equip students with skills for the modern
                      world:
                    </p>
                    <ul className="text-lg font-light list-disc list-inside space-y-2">
                      <li>
                        <strong>Math, Sciences, and Computer Studies</strong>:
                        Core STEAM subjects prepare students with analytical and
                        problem-solving skills critical for academic and career
                        success.
                      </li>
                      <li>
                        <strong>Islamic Studies</strong>: Provides a strong
                        moral and spiritual foundation, guiding students in both
                        life and afterlife.
                      </li>
                      <li>
                        <strong>Social Studies</strong>: Offers a well-rounded
                        perspective on history, society, and geography, linking
                        past knowledge with current challenges to shape a better
                        future.
                      </li>
                    </ul>
                    <p className="text-lg font-light">
                      Our language instruction serves as the foundation for all
                      learning, ensuring students develop strong literacy and
                      communication skills essential for mastering all other
                      subjects.
                    </p>
                  </Fade>
                </div>

                {/* Subjects Image */}
                <div className="flex-shrink-0  p-5">
                  <Image
                    src="/images/Features/science.png"
                    alt="Subjects Illustration"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
