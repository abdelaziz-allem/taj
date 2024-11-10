"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const StudentGoverment = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900 z-0"
      id="accreditation-section"
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
              Student Goverment
            </h1>
          </Fade>
        </div>
      </div>

      {/* Accreditation Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Accreditation */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Why our Student Goverment Matters?
                </h2>
                <p className="text-lg font-light">
                  At Taj International School, we believe in empowering students
                  to take on leadership roles, voice their opinions, and
                  actively contribute to the school community. Our Student
                  Government is an elected body representing students across
                  various grades. This group provides students with a platform
                  to share ideas, propose changes, and take part in
                  decision-making processes that impact school life. Through
                  Student Government, students gain valuable experience in
                  leadership, teamwork, and responsibility.
                </p>
                <p className="text-lg font-light">
                  They organize school events, participate in community service
                  projects, and act as a bridge between the student body and
                  school administration. This involvement not only fosters a
                  sense of responsibility and pride but also builds essential
                  life skills such as public speaking, problem-solving, and
                  collaboration. Our goal is to create an environment where
                  students feel heard and valued, developing confident
                  individuals who are prepared to be future leaders in their
                  communities and beyond.
                </p>
              </Fade>
            </div>

            {/* Accreditation Image */}
            <div className="flex-shrink-0 ">
              <Image
                src="/images/Gallery/image1.JPG"
                alt="Accreditation Illustration"
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

export default StudentGoverment;
