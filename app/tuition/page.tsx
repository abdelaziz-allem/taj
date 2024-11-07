"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Tuition = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900"
      id="tuition-fees-section"
    >
      {/* Page Header */}
      <div
        className="z-0 relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Tuition Fees</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Transparent and affordable tuition plans tailored to meet the
              needs of every student.
            </p>
          </Fade>
        </div>
      </div>

      {/* Tuition Fees Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Monthly Fees Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Monthly Fees
                </h2>
                <p className="text-lg font-light">
                  Our monthly tuition fees are designed to be affordable and
                  competitive. We believe in providing high-quality education
                  while ensuring that financial barriers are minimized.
                  <strong> Monthly Fee: $500</strong>
                </p>
                <p className="text-lg font-light">
                  The fee includes access to all educational resources,
                  extracurricular activities, and support services.
                </p>
              </Fade>
            </div>

            {/* Monthly Fees Image */}
            <div className="flex-shrink-0 ">
              <Image
                src="/images/Gallery/image1.JPG"
                alt="Monthly Fees Illustration"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Term Fees Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Term Fees
                </h2>
                <p className="text-lg font-light">
                  For families preferring to pay in advance, our term fees offer
                  a more cost-effective option. <strong>Term Fee: $1500</strong>
                </p>
                <p className="text-lg font-light">
                  This fee covers a full term of education, providing families
                  with peace of mind and simplifying the payment process.
                </p>
              </Fade>
            </div>

            {/* Term Fees Image */}
            <div className="flex-shrink-0 ">
              <Image
                src="/images/Gallery/image3.JPG"
                alt="Term Fees Illustration"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-12">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Payment Options & Support
              </h3>
              <p className="text-lg font-light text-center mb-4">
                We offer flexible payment options, including monthly and term
                payments, to accommodate the needs of all families.
              </p>
              <p className="text-lg font-light text-center mb-4">
                Financial assistance is available for families who qualify,
                ensuring that every student has access to quality education.
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

export default Tuition;
