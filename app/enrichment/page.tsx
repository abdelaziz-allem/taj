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
                src="/images/Features/quran.png"
                alt="Quran Memorization"
                width={300}
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
                  Learning Support Program
                </h2>
                <p className="text-lg font-light">
                  Our Learning Support Program provides targeted assistance to
                  students who may need extra help in specific subjects. Led by
                  experienced teachers, this program offers personalized
                  support, helping students strengthen their understanding of
                  challenging material and build confidence in their academic
                  abilities. By providing additional guidance and resources, we
                  ensure that each learner has the tools they need to reach
                  their full potential.
                </p>
              </Fade>
            </div>

            {/* Practical Life Skills Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Features/logic.png"
                alt="Practical Life Skills"
                width={300}
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
