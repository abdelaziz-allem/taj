"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const PrincipleMessage = () => {
  return (
    <div className="relative bg-gray-100 text-gray-900 z-0" id="Grades-section">
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Principle&apos;s Message
            </h1>
          </Fade>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <Image
          src={"/images/Logo/logo.PNG"}
          alt="logo-image"
          width={463}
          height={622}
        />
      </div>

      {/* Principal's Message Section */}
      <section id="why-choose-us" className="py-16 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8 text-center lg:text-left">
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="text-pink text-lg font-normal mb-3 ls-31 uppercase text-start">
              Welcome to Taj International School!
            </h2>
            <p className="text-lg font-light">
              At Taj International School, we are committed to nurturing a
              generation of well-rounded learners who are equipped not only with
              academic excellence but also with the values and skills essential
              for a purposeful life. Our mission is to create a learning
              environment that integrates Islamic principles, 21st-century
              skills, and a rigorous academic foundation, ensuring that our
              students are prepared to meet the challenges of a rapidly evolving
              world.
            </p>

            <p className="text-lg font-light">
              We believe that education extends beyond the classroom, fostering
              qualities such as grit, discipline, and a spirit of excellence in
              our students. These personal traits are integral to our teaching
              approach, as we aim to instill in our students the resilience and
              moral grounding needed to thrive in any environment. Through this
              holistic education, we hope our students will emerge as leaders
              and active contributors to the betterment of their communities.
            </p>

            <p className="text-lg font-light">
              Thank you for entrusting us with your child&apos;s education. We
              look forward to partnering with you to inspire excellence,
              integrity, and a lifelong love for learning.
            </p>
            <p className="text-lg font-light ">
              Warm regards,
              <br />
              <strong className="font-bold">Faysal Abdillahi</strong>
              <br />
              <strong className="font-bold">
                Principal, Taj International School
              </strong>
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default PrincipleMessage;
