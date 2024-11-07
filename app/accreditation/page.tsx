"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Accreditation = () => {
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
              Our Accreditations
            </h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              We are recognized and accredited by reputable organizations,
              ensuring quality and integrity in our education standards.
            </p>
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
                  Why Accreditation Matters
                </h2>
                <p className="text-lg font-light">
                  Accreditation from respected bodies signifies our commitment
                  to maintaining high standards of education, transparency, and
                  accountability. Our partnerships and recognitions affirm the
                  quality of education we deliver and our dedication to
                  continuous improvement.
                </p>
                <p className="text-lg font-light">
                  These accreditations ensure our programs meet rigorous
                  academic and ethical standards, providing students and parents
                  with the confidence that they are receiving an education of
                  the highest quality.
                </p>
              </Fade>
            </div>

            {/* Accreditation Image */}
            <div className="flex-shrink-0 ">
              <Image
                src="/images/Logo/logo.PNG"
                alt="Accreditation Illustration"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Accredited Partners Section */}
          <div className="mt-12">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Our Accredited Partners
              </h3>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                {/* Accreditation Image */}
                <div className="flex-shrink-0">
                  <Image
                    src="/images/Logo/iao.jpg"
                    alt="Accreditation Illustration"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <Fade direction="up" delay={300} triggerOnce>
                    <p className="text-lg font-light">
                      Accreditation from respected bodies signifies our
                      commitment to maintaining high standards of education,
                      transparency, and accountability. Our partnerships and
                      recognitions affirm the quality of education we deliver
                      and our dedication to continuous improvement.
                    </p>
                    <p className="text-lg font-light">
                      These accreditations ensure our programs meet rigorous
                      academic and ethical standards, providing students and
                      parents with the confidence that they are receiving an
                      education of the highest quality.
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
