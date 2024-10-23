"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink relative overflow-hidden">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                Shaping Leaders <br /> Today!
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                Empowering students in Somaliland through education, growth, and
                lifelong learning.
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start">
                <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6">
                  <Link href="#cook-section">Lets learn</Link>
                </button>
                <button className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink">
                  <Link href="#about-section">Explore now</Link>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-span-6 flex justify-center relative">
            {/* Floating shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Shape 1 */}
              <div className="w-16 h-16 bg-pink opacity-50 rounded-full animate-float1 absolute top-10 left-16"></div>

              {/* Shape 2 */}
              <div className="w-20 h-20 bg-pink opacity-60 rounded-full animate-float2 absolute bottom-20 right-10"></div>
            </div>

            {/* Image and activity details */}
            <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute">
              <Image
                src={"/images/Banner/activity.png"}
                alt="activity-image"
                width={68}
                height={68}
              />
              <p className="text-lg font-normal">
                More than 10+ <br /> activities.
              </p>
            </div>
            <Image
              src="/images/Banner/hero.png"
              alt="nothing"
              width={400}
              height={125}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
