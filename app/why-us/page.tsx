"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Uniform = () => {
  return (
    <div className="z-0 bg-gray-100 text-gray-900" id="student-life-section">
      {/* Page Header */}
      <div
        className="z-0 relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Why Choose Taj International School?
            </h1>
          </Fade>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center lg:text-left space-y-8 mt-10">
        <Fade direction="up" delay={500} triggerOnce>
          <p className="text-lg font-light">
            At Taj International School, we are committed to nurturing
            well-rounded, confident, and responsible learners equipped to excel
            academically and personally. Here&apos;s why families choose us:
          </p>
          <ul className="text-left list-disc list-inside space-y-4">
            <li>
              <strong>Holistic Education:</strong> Our curriculum integrates
              academic rigor with character building, focusing on Islamic
              values, 21st-century skills, and leadership qualities.
            </li>
            <li>
              <strong>Strong Language Foundation:</strong> We provide a
              multilingual education, teaching English, Arabic, and Somali.
            </li>
            <li>
              <strong>Qualified and Caring Educators:</strong> Our professional
              teaching staff are dedicated to each student&apos;s success.
            </li>
            <li>
              <strong>Modern Curriculum and Facilities:</strong> Emphasizing
              Math, Science, Technology, and Islamic Studies, with facilities
              designed for a safe, engaging learning environment.
            </li>
            <li>
              <strong>Focus on Moral and Spiritual Development:</strong> We
              incorporate Islamic studies to support spiritual growth and
              instill strong moral values.
            </li>
            <li>
              <strong>Inclusive and Diverse Community:</strong> We welcome
              students from diverse backgrounds with a fair admissions policy.
            </li>
            <li>
              <strong>Supportive Parent Partnership:</strong> We foster strong
              parent-teacher relationships for a positive learning journey.
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Uniform;
