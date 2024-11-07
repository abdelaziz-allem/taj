"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const image = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900"
      id="student-council-section"
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
            <h1 className="text-4xl lg:text-5xl font-bold">Student Council</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Empowering students to lead, engage, and make a difference in our
              community.
            </p>
          </Fade>
        </div>
      </div>

      {/* Student Council Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Purpose Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Our Purpose
                </h2>
                <p className="text-lg font-light">
                  The Student Council represents the voice of the student body.
                  We work to create an inclusive environment where every student
                  can express their opinions and contribute to school life.
                </p>
              </Fade>
            </div>

            {/* Purpose Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image1.JPG"
                alt="Student Council Purpose"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Activities Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Activities & Events
                </h2>
                <p className="text-lg font-light">
                  From organizing school events to volunteering in the
                  community, the Student Council plays an active role in
                  enhancing student experiences. Join us in making a difference!
                </p>
              </Fade>
            </div>

            {/* Activities Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image2.JPG"
                alt="Student Council Activities"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Benefits of Joining
                </h2>
                <p className="text-lg font-light">
                  Being part of the Student Council offers leadership
                  experience, a chance to make new friends, and an opportunity
                  to influence change at our school. Develop skills that last a
                  lifetime!
                </p>
              </Fade>
            </div>

            {/* Benefits Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gallery/image3.JPG"
                alt="Student Council Benefits"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mt-12">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                Get your child Involved
              </h3>
              <p className="text-lg font-light text-center mb-4">
                Interested in joining the Student Council? Contact us to learn
                more about the application process and how you can contribute to
                our initiatives.
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

export default image;
