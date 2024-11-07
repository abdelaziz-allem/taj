"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const CodeOfConduct = () => {
  return (
    <div
      className="z-0 relative bg-gray-100 text-gray-900"
      id="code-of-conduct-section"
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
            Student Code of Conduct
          </h1>
          <p className="mt-4 text-lg lg:text-xl font-light">
            Promoting a respectful and responsible learning environment for
            everyone.
          </p>
        </div>
      </div>

      {/* Code of Conduct Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Respect for Others Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Respect for Others
                </h2>
                <p className="text-lg font-light">
                  All students are expected to treat others with respect and
                  kindness. This includes being mindful of other people's
                  perspectives and refraining from any form of bullying,
                  harassment, or discrimination.
                </p>
              </Fade>
            </div>

            {/* Respect for Others Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image2.JPG"
                alt="Respect for Others Illustration"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Responsibility and Integrity Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Responsibility and Integrity
                </h2>
                <p className="text-lg font-light">
                  Students are expected to demonstrate responsibility by being
                  honest and accountable for their actions. Academic integrity,
                  such as avoiding cheating or plagiarism, is a key expectation
                  in upholding trust within the school community.
                </p>
              </Fade>
            </div>

            {/* Responsibility and Integrity Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image3.JPG"
                alt="Responsibility and Integrity Illustration"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Attendance and Punctuality Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Attendance and Punctuality
                </h2>
                <p className="text-lg font-light">
                  Regular attendance and punctuality are essential for academic
                  success. Students should arrive on time and be prepared for
                  each class to foster a productive learning environment.
                </p>
              </Fade>
            </div>

            {/* Attendance and Punctuality Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image4.JPG"
                alt="Attendance and Punctuality Illustration"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Respect for School Property Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Respect for School Property
                </h2>
                <p className="text-lg font-light">
                  Students are expected to care for school property, keeping
                  classrooms, equipment, and shared spaces clean and in good
                  condition. This helps create a safe and pleasant environment
                  for everyone.
                </p>
              </Fade>
            </div>

            {/* Respect for School Property Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image5.JPG"
                alt="Respect for School Property Illustration"
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
                Upholding the Code of Conduct
              </h3>
              <p className="text-lg font-light text-center mb-4">
                Adherence to the Code of Conduct promotes a safe and inclusive
                atmosphere where all students can thrive. Students are
                encouraged to reach out to school staff if they need guidance or
                support in following these guidelines.
              </p>
              <div className="flex align-middle justify-center">
                <Link
                  href={"#contact"}
                  className="text-xl font-medium rounded-full text-white py-5 px-6 bg-blue-600 lg:px-10 mr-6"
                >
                  Contact Us
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
