"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Transportation = () => {
  return (
    <div className="bg-bgpink" id="transportation">
      <div className=" mx-auto max-w-7xl lg:pt-10 sm:pb-24 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 my-2 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src={"/images/bus.png"}
              alt="nothing"
              width={600}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Our Transportation
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Secure and Reliable Transportation.
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-gray-700 md:text-lg font-normal mb-10 text-start mt-2">
                Our student transportation service is designed with safety,
                convenience, and peace of mind in mind. From daily pickups to
                after-school activities, we ensure that students travel securely
                and comfortably.
              </p>
              <p className="text-gray-700 md:text-lg font-normal mb-10 text-start">
                With professional drivers and strict safety protocols, parents
                can rest assured that their children are in good hands. Our
                reliable service not only helps students arrive on time but also
                provides parents with a dependable transportation solution they
                can trust.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
