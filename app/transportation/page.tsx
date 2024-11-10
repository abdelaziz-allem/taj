"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Transportation = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold">Transportation</h1>
          </Fade>
        </div>
      </div>

      {/* Accreditation Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Accreditation */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* bus Image */}
            <div className="flex-shrink-0 ">
              <Image src="/images/bus.png" alt="Bus" width={500} height={300} />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Secure and Reliable Transportation.
                </h2>
                <p className="text-xl font-light">
                  Taj International School offers a basic transportation service
                  designed to help families manage daily school commutes with
                  greater ease. Our transportation team remains dedicated to
                  providing a secure and consistent experience, and we strive to
                  maintain a reliable schedule to the best of our ability.
                </p>
                <p className="text-xl font-light">
                  Parents are encouraged to communicate any specific needs or
                  questions with the school office to help us improve the
                  service and better meet our student needs.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
