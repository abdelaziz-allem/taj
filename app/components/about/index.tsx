"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="bg-lightpink" id="about-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-y-10 lg:space-y-0 lg:space-x-10 my-16">
          {/* School Logo */}
          <div className="col-span-6 flex justify-start items-center">
            <Image
              src="/images/school/logo.PNG"
              alt="Taj School Logo"
              width={650}
              height={1000}
            />
          </div>

          {/* About Content */}
          <div className="col-span-6 flex flex-col justify-center space-y-6">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal uppercase tracking-wider">
                About Taj School
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                Empowering Students for a Brighter Future
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal">
                Taj School, located in the heart of Somaliland, is dedicated to
                providing a quality education that equips students with the
                knowledge, skills, and character they need to succeed. With a
                focus on academic excellence and personal growth, our school
                offers a nurturing environment where students can thrive both
                inside and outside the classroom.
              </p>
              <p className="text-grey md:text-lg font-normal">
                Our curriculum is designed to inspire a love for learning, while
                promoting critical thinking and problem-solving skills. We
                emphasize the importance of leadership, community service, and
                preparing our students to become active contributors to
                Somaliland’s development.
              </p>
              <p className="text-grey md:text-lg font-normal mb-10">
                At Taj School, we believe that every student has the potential
                to succeed, and we strive to provide the resources and
                opportunities they need to achieve their dreams. With
                experienced teachers, modern facilities, and a commitment to
                holistic education, we are shaping the leaders of tomorrow.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-4 px-8 bg-pink lg:px-10 hover:bg-lightpink hover:text-pink border border-pink transition duration-300">
                  Learn More
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
