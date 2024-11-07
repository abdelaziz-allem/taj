"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Criteria = () => {
  return (
    <div
      className="z-0 relative bg-gray-100 text-gray-900"
      id="acceptance-criteria-section"
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
            Acceptance Criteria
          </h1>
          <p className="mt-4 text-lg lg:text-xl font-light">
            Defining clear acceptance criteria to ensure project success.
          </p>
        </div>
      </div>

      {/* Acceptance Criteria Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* What are Acceptance Criteria Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  What are Acceptance Criteria?
                </h2>
                <p className="text-lg font-light">
                  Acceptance criteria are predefined requirements that a product
                  must meet to be considered complete and accepted by
                  stakeholders. They provide a clear understanding of what is
                  expected from a project.
                </p>
              </Fade>
            </div>

            {/* What are Acceptance Criteria Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image2.JPG"
                alt="Acceptance Criteria Illustration"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Importance of Acceptance Criteria Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Importance of Acceptance Criteria
                </h2>
                <p className="text-lg font-light">
                  Acceptance criteria play a crucial role in ensuring that the
                  development team understands what to build and that
                  stakeholders have clear expectations. They help to minimize
                  misunderstandings and set a standard for measuring progress
                  and success.
                </p>
              </Fade>
            </div>

            {/* Importance of Acceptance Criteria Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image3.JPG"
                alt="Importance of Acceptance Criteria Illustration"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Defining Acceptance Criteria Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  How to Define Acceptance Criteria
                </h2>
                <p className="text-lg font-light">
                  Defining effective acceptance criteria involves collaboration
                  among all stakeholders. Here are some key points to consider:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Be specific and clear to avoid ambiguity.</li>
                  <li>Use measurable outcomes to evaluate success.</li>
                  <li>Involve all relevant parties in the discussion.</li>
                  <li>Align criteria with the project goals and user needs.</li>
                </ul>
              </Fade>
            </div>

            {/* Defining Acceptance Criteria Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image4.JPG"
                alt="Defining Acceptance Criteria Illustration"
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
                Implementing Acceptance Criteria
              </h3>
              <p className="text-lg font-light text-center mb-4">
                Effective acceptance criteria should be revisited and updated
                regularly to ensure they reflect any changes in project scope or
                objectives. This practice fosters collaboration and maintains
                clarity throughout the project lifecycle.
              </p>
              <div className="flex align-middle justify-center ">
                <Link
                  href={"#contact"}
                  className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6"
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

export default Criteria;
