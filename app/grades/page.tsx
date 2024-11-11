"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Grades = () => {
  return (
    <div className="relative bg-gray-100 text-gray-900 z-0" id="Grades-section">
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Grade Levels</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Our academic program is divided into three main stages, each
              tailored to the developmental needs of the students and
              progressively building on the foundations laid at previous levels.
            </p>
          </Fade>
        </div>
      </div>
      {/* Grades Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Classrooms Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Kindergarten
                </h2>
                <p className="text-lg font-light">
                  Our KG program includes three levels—Pre-Kindergarten (ages
                  3-4), Pre-Primary 1 (ages 4-5), and Pre-Primary 2 (ages 5-6).
                  Students develop foundational skills in language, numeracy,
                  and logical thinking through engaging activities, fostering
                  curiosity and respect.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image4.JPG"
                alt="Classroom"
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image2.JPG"
                alt="Library"
                width={500}
                height={300}
              />
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Lower primary
                </h2>
                <p className="text-lg font-light">
                  Building on early foundations, lower primary students engage
                  in a well-rounded education. With guidance from professional
                  teachers, students gain a deeper understanding of language,
                  mathematics, sciences, and moral values.
                </p>
              </Fade>
            </div>
          </div>

          <div
            id="computerlab"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Upper primary
                </h2>
                <p className="text-lg font-light">
                  In upper primary, students expand their knowledge in language,
                  Islamic studies, mathematics, science, and social studies.
                  Emphasis is placed on character development and soft skills,
                  preparing students for secondary education.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image1.JPG"
                alt="Computer Lab"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
