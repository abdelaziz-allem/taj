"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="bg-lightpink" id="about-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-y-10 lg:space-y-0 lg:space-x-10 my-16">
          {/* School Logo */}
          <div className="col-span-6 flex justify-start items-center">
            <Image
              src="/images/Logo/logo.PNG"
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
                Inspiring excellence
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
                Welcome to Taj International school
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
                We&apos;re delighted to welcome you to Taj International School,
                where we are dedicated to providing an enriching, values-driven
                education that shapes our students into well-rounded, confident,
                and compassionate individuals. Since our founding in 2012, we’ve
                been committed to fostering a love for learning, nurturing
                Islamic values, and equipping students with the 21st-century
                skills they need to excel in today&apos;s world.
              </p>

              <p className="text-grey md:text-lg font-normal mb-10">
                At Taj, students thrive in a supportive, safe, and dynamic
                environment that encourages them to reach their full potential
                academically, socially, and spiritually. With a carefully
                designed curriculum that includes English, Arabic, Somali, math,
                sciences, and Islamic studies, we aim to build a strong
                foundation that empowers students to lead with integrity,
                resilience, and respect.
              </p>
              <p className="text-grey md:text-lg font-normal mb-10">
                Thank you for choosing Taj International School. We look forward
                to partnering with you on this exciting journey of learning and
                growth!
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href={"/aboutus"}
                  className="text-xl font-medium rounded-full text-white py-4 px-8 bg-pink lg:px-10 hover:bg-lightpink hover:text-pink border border-pink transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
