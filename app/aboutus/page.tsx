"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="z-0 bg-gray-100 text-gray-900" id="aboutus-section">
      {/* Welcome Section */}
      <section
        id="welcome-section"
        className="z-0 relative bg-cover bg-center text-white py-16"
        style={{ backgroundImage: "url('/images/Expert/teacher.JPG')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-0" />
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-6">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Welcome to Taj International School!
            </h1>
            <p className="text-lg lg:text-xl font-light">
              We&apos;re delighted to welcome you to Taj International School,
              where we are dedicated to providing an enriching, values-driven
              education that shapes our students into well-rounded, confident,
              and compassionate individuals. Since our founding in 2012,
              we&apos;ve been committed to fostering a love for learning,
              nurturing Islamic values, and equipping students with the
              21st-century skills they need to excel in today&apos;s world.
            </p>
          </Fade>
        </div>
      </section>

      {/* Vision, Mission, and Values Section */}
      <section id="message" className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center lg:text-left space-y-12">
          <Fade direction="up" delay={400} triggerOnce>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-semibold text-pink">Our Vision</h3>
                <p className="text-lg font-light">
                  To foster a positive, educated community where every
                  individual contributes meaningfully, embodies Islamic values,
                  and strives to uplift their surroundings.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-pink">
                  Our Mission
                </h3>
                <p className="text-lg font-light">
                  To nurture respectful, confident individuals who aspire to
                  achieve their full potential through a welcoming, safe, and
                  intellectually stimulating environment grounded in Islamic
                  values.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-pink">Our Values</h3>
                <p className="text-lg font-light">
                  We value Excellence, Respect, Responsibility, Integrity,
                  Selflessness, Grit, and Discipline.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section id="why-choose-us" className="py-16 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8 text-center lg:text-left">
          <Fade direction="up" delay={300} triggerOnce>
            <h2 className="text-3xl font-semibold">Principal&apos;s Message</h2>
            <p className="text-lg font-light">
              Welcome to Taj International School! At Taj, we are committed to
              nurturing a generation of well-rounded learners equipped with the
              values and skills essential for a purposeful life. Our mission is
              to create a learning environment that integrates Islamic
              principles, 21st-century skills, and a rigorous academic
              foundation.
            </p>
            <p className="text-lg font-light ">
              Warm regards,
              <br />
              Faysal Abdillahi
              <br />
              Principal, Taj International School
            </p>
          </Fade>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="moto" className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center lg:text-left space-y-8">
          <Fade direction="up" delay={500} triggerOnce>
            <h2 className="text-3xl font-semibold text-gray-900">
              Why Choose Taj International School?
            </h2>
            <p className="text-lg font-light">
              At Taj International School, we are committed to nurturing
              well-rounded, confident, and responsible learners equipped to
              excel academically and personally. Here’s why families choose us:
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
                <strong>Qualified and Caring Educators:</strong> Our
                professional teaching staff are dedicated to each student&apos;s
                success.
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
      </section>

      {/* Motto Section */}
      <section
        id="motto-section"
        className="bg-pink text-white text-center py-12"
      >
        <Fade direction="up" delay={600} triggerOnce>
          <h2 className="text-3xl font-bold">Inspiring Excellence</h2>
        </Fade>
      </section>
    </div>
  );
};

export default AboutUs;
