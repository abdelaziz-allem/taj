"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Enrichment = () => {
  return (
    <div
      className="z-0 relative bg-gray-100 text-gray-900"
      id="enrichment-programs-section"
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
          <h1 className="text-4xl lg:text-5xl font-bold">
            Student Enrichment Programs
          </h1>
          <p className="mt-4 text-lg lg:text-xl font-light">
            Engaging activities to enhance learning beyond the classroom.
          </p>
        </div>
      </div>

      {/* Enrichment Programs Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Quran Memorization Program */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Quran Memorization
                </h2>
                <p className="text-lg font-light">
                  Our Quran Memorization program helps students connect deeply
                  with their faith. Led by qualified instructors, this
                  after-school program encourages dedication, focus, and a
                  lifelong appreciation of the Quran.
                </p>
              </Fade>
            </div>

            {/* Quran Memorization Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/quran_memorization.jpg"
                alt="Quran Memorization"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Real-Life Coding Skills Program */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Real-Life Coding Skills
                </h2>
                <p className="text-lg font-light">
                  Our coding program introduces students to the fundamentals of
                  programming in a hands-on, project-based environment. Students
                  will learn to build real-world applications and understand the
                  principles of technology that power modern life.
                </p>
              </Fade>
            </div>

            {/* Real-Life Coding Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/coding_skills.jpg"
                alt="Real-Life Coding"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Practical Life Skills Program */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Practical Life Skills
                </h2>
                <p className="text-lg font-light">
                  This program equips students with essential skills like
                  financial literacy, communication, teamwork, and problem
                  solving. Through interactive activities, students gain
                  insights into managing daily responsibilities and making
                  informed decisions.
                </p>
              </Fade>
            </div>

            {/* Practical Life Skills Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/life_skills.jpg"
                alt="Practical Life Skills"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-12">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Join Our Enrichment Programs
              </h3>
              <p className="text-lg font-light text-center mb-4">
                Discover a wide range of enrichment programs tailored to inspire
                and prepare students for future success. Enroll today and let
                your child explore new passions and skills.
              </p>
              <div className="flex align-middle justify-center">
                <Link
                  href={"#contact"}
                  className="text-xl font-medium rounded-full text-white py-5 px-6 bg-green-500 lg:px-10 mr-6"
                >
                  Contact us
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrichment;
