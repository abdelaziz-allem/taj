"use client";
import { Fade } from "react-awesome-reveal";

const Grades = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900 z-0"
      id="facilities-section"
    >
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Grade levels</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Our academic program is divided into three main stages, each
              tailored to the developmental needs of the students and
              progressively building on the foundations laid at previous levels.
            </p>
          </Fade>
        </div>
      </div>
      <section id="grades" className="relative  z-0">
        <div className="container mx-auto lg:pt-20 sm:pb-24 px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-center gap-12">
            {/* Preschool Section */}
            <div className="flex flex-col items-center max-w-md bg-lightgrey2  p-8 rounded-lg shadow-lg">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={0.1}
                triggerOnce
              >
                <h2 className="text-white text-lg font-bold mb-3 uppercase text-center">
                  Kindergarten
                </h2>
              </Fade>
              <Fade
                direction="up"
                delay={600}
                cascade
                damping={0.1}
                triggerOnce
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-4">
                  Early Development
                </h3>
              </Fade>
              <Fade
                direction="up"
                delay={800}
                cascade
                damping={0.1}
                triggerOnce
              >
                <p className="text-white text-base mb-6 text-center">
                  Our KG program includes three levels—Pre-Kindergarten (ages
                  3-4), Pre-Primary 1 (ages 4-5), and Pre-Primary 2 (ages 5-6).
                  At this stage, students develop foundational skills in Islamic
                  education, language, numeracy, and logical thinking through
                  engaging activities in classification and measurement.
                  Creativity and basic environmental awareness are also
                  nurtured, helping young learners explore the world around them
                  with curiosity and respect.
                </p>
              </Fade>
            </div>

            {/* Primary School Section */}
            <div className="flex flex-col items-center max-w-md bg-lightblue2 p-8 rounded-lg shadow-lg">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={0.1}
                triggerOnce
              >
                <h2 className="text-white text-lg font-bold mb-3 uppercase text-center">
                  Lower Primary School
                </h2>
              </Fade>
              <Fade
                direction="up"
                delay={600}
                cascade
                damping={0.1}
                triggerOnce
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-4">
                  Grade 1-4
                </h3>
              </Fade>
              <Fade
                direction="up"
                delay={800}
                cascade
                damping={0.1}
                triggerOnce
              >
                <p className="text-white text-base mb-6 text-center">
                  Building on the early foundations, our lower primary students
                  receive a well-rounded education with a curriculum designed to
                  meet modern standards. With the guidance of dedicated and
                  professional teachers, students gain a deeper understanding of
                  language, mathematics, sciences, and moral values, solidifying
                  the skills and knowledge introduced in KG.
                </p>
              </Fade>
            </div>

            {/* Primary School Section */}
            <div className="flex flex-col items-center max-w-md bg-pink3 p-8 rounded-lg shadow-lg">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={0.1}
                triggerOnce
              >
                <h2 className="text-white text-lg font-bold mb-3 uppercase text-center">
                  Upper Primary School
                </h2>
              </Fade>
              <Fade
                direction="up"
                delay={600}
                cascade
                damping={0.1}
                triggerOnce
              >
                <h3 className="text-2xl font-semibold text-white text-center mb-4">
                  Grade 5-8
                </h3>
              </Fade>
              <Fade
                direction="up"
                delay={800}
                cascade
                damping={0.1}
                triggerOnce
              >
                <p className="text-white text-base mb-6 text-center">
                  At this level, students further expand their knowledge across
                  languages, Islamic studies, mathematics, science, computer
                  science, and social studies. Our focus at this stage includes
                  character development and soft skills, ensuring that students
                  grow not only academically but also in terms of resilience,
                  empathy, and effective communication. By the end of Grade 8,
                  our students are well-prepared for the challenges of secondary
                  education and beyond.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grades;
