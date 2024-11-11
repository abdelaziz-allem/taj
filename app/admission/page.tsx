"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Admission = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900 z-0"
      id="admission-section"
    >
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Admission Process
            </h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Our admissions process ensures each child is prepared and ready to
              thrive in our educational environment, fostering a supportive and
              inclusive community.
            </p>
          </Fade>
        </div>
      </div>

      {/* Admission Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview of Admission Process */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Welcome to Taj International School
                </h2>
                <p className="text-lg font-light">
                  At Taj International School, we welcome applications from all
                  students, regardless of background. We aim to create an
                  inclusive environment where every child has the opportunity to
                  succeed.
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

          {/* Steps of Admission Process */}
          <div className="mt-12 space-y-10">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Steps to Enroll
              </h3>

              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="text-3xl font-semibold text-gray-800">
                  Step 1: Submit an Application
                </div>
                <p className="text-lg font-light">
                  Complete and submit the application form to our admissions
                  office. Our team is available to assist and answer any
                  questions you may have.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="text-3xl font-semibold text-gray-800">
                  Step 2: Entry Assessment
                </div>
                <p className="text-lg font-light">
                  An entry test and readiness assessment help us understand your
                  child&apos;s academic, social, and adaptability skills. We
                  work with you to ensure your child&apos;s readiness and
                  support them through this transition.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="text-3xl font-semibold text-gray-800">
                  Step 3: Age Verification
                </div>
                <p className="text-lg font-light">
                  To verify age, please provide a birth certificate. This
                  ensures your child meets the age requirements for their
                  intended grade level.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="text-3xl font-semibold text-gray-800">
                  Step 4: Transfer Documentation
                </div>
                <p className="text-lg font-light">
                  For transfers, please provide a{" "}
                  <strong className="font-bold">Transfer Letter</strong> from
                  the Ministry of Education and a{" "}
                  <strong className="font-bold">Letter of Conduct</strong> from
                  the previous school, which reflects your child&apos;s behavior
                  and attitude.
                </p>
              </div>

              {/* Special Note */}
              <div className="mt-8 bg-gray-200 p-6 rounded-lg">
                <h4 className="text-2xl font-semibold text-gray-800">
                  Special Note on Admission Requirements
                </h4>
                <p className="text-lg font-light mt-4">
                  Taj International School currently does not offer support for
                  high-level special educational needs. Please reach out to
                  discuss individual circumstances if needed.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
