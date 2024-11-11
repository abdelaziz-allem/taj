"use client";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
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
              Our vision, mission, and values
            </h1>
          </Fade>
        </div>
      </div>

      {/* Vision Section */}
      <section id="vision-section" className="py-16 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
          <Fade direction="up" delay={400} triggerOnce>
            <h2 className="text-3xl font-semibold text-pink">Our Vision</h2>
            <p className="text-lg font-light">
              To foster a positive, educated community where every individual
              contributes meaningfully, embodies Islamic values, and strives to
              uplift their surroundings.
            </p>
          </Fade>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission-section" className="py-16 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
          <Fade direction="up" delay={500} triggerOnce>
            <h2 className="text-3xl font-semibold text-pink">Our Mission</h2>
            <p className="text-lg font-light">
              Our mission at Taj International School is to nurture
              well-rounded, respectful, and confident individuals who aspire to
              achieve their full potential. We achieve this by creating a
              welcoming, safe, and intellectually stimulating environment,
              grounded in Islamic values and designed to cultivate 21st-century
              skills, academic rigor, and personal excellence.
            </p>
          </Fade>
        </div>
      </section>

      {/* Values Section */}
      <section id="values-section" className="py-16 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
          <Fade direction="up" delay={600} triggerOnce>
            <h2 className="text-3xl font-semibold text-pink">Our Values</h2>
            <ul className="space-y-4 text-lg font-light list-disc list-inside">
              <li>
                <strong className="font-bold">Excellence:</strong> We strive for
                excellence in academics, extracurricular activities, and
                personal growth, encouraging every individual to reach their
                highest potential.
              </li>
              <li>
                <strong className="font-bold">Respect:</strong> We value every
                member of our school community and treat all with dignity and
                respect.
              </li>
              <li>
                <strong className="font-bold">Responsibility:</strong> We
                embrace responsibility in all our actions, fostering
                accountability and commitment in our students.
              </li>
              <li>
                <strong className="font-bold">Integrity:</strong> Honesty and
                transparency guide our interactions and decisions, building
                trust within and beyond our school community.
              </li>
              <li>
                <strong className="font-bold">Selflessness:</strong> We foster a
                collaborative spirit, where each individual acts with loyalty
                and support for the greater good, embodying unity and teamwork.
              </li>
              <li>
                <strong className="font-bold">Grit:</strong> We value resilience
                and perseverance, cultivating a growth mindset that encourages
                students to tackle challenges with determination.
              </li>
              <li>
                <strong className="font-bold">Discipline:</strong> We instill
                the importance of self-discipline and commitment, empowering
                students to stay focused and achieve their goals.
              </li>
            </ul>
          </Fade>
        </div>
      </section>

      {/* Motto Section */}
      <section
        id="motto-section"
        className="bg-pink text-white text-center py-12"
      >
        <Fade direction="up" delay={700} triggerOnce>
          <h2 className="text-3xl font-bold">Inspiring Excellence</h2>
        </Fade>
      </section>
    </div>
  );
};

export default AboutUs;
