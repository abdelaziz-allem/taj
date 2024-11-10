"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Facility = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900 z-0"
      id="Facility-section"
    >
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Facility</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Taj International School offers state-of-the-art Facility to
              foster learning, growth, and well-being for our students.
            </p>
          </Fade>
        </div>
      </div>

      {/* Facility Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Classrooms Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Classrooms
                </h2>
                <p className="text-lg font-light">
                  Our classrooms are designed to create an engaging, supportive,
                  and flexible learning environment. Equipped with ergonomic
                  furniture, flexible seating, spacious layouts, and educational
                  displays, they encourage collaboration, creativity, and
                  focused learning.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/classroom.png"
                alt="Classroom"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Library Section */}
          <div
            id="library"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/library.png"
                alt="Library"
                width={500}
                height={300}
              />
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Library
                </h2>
                <p className="text-lg font-light">
                  Our library is a hub for knowledge and discovery, offering a
                  diverse collection of books and resources to support students
                  academic growth and foster a love for reading. It provides a
                  quiet, welcoming space for exploration, research, and critical
                  thinking.
                </p>
              </Fade>
            </div>
          </div>

          {/* Computer Lab Section */}
          <div
            id="computerlab"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Computer Lab
                </h2>
                <p className="text-lg font-light">
                  Our computer lab is equipped with modern technology, offering
                  students hands-on experience in digital skills and computer
                  science. The lab promotes safe and responsible digital
                  practices, preparing students for a tech-driven world.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/computerlab.png"
                alt="Computer Lab"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* School Clinic Section */}
          <div
            id="clinic"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/clinic.png"
                alt="School Clinic"
                width={500}
                height={300}
              />
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  School Clinic
                </h2>
                <p className="text-lg font-light">
                  Our school clinic ensures the health and well-being of
                  students with first aid, routine checks, and basic medical
                  support. Staffed with qualified personnel, the clinic promotes
                  a healthy school environment and works closely with parents
                  for comprehensive care.
                </p>
              </Fade>
            </div>
          </div>

          {/* Playgrounds Section */}
          <div
            id="playground"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Playgrounds
                </h2>
                <p className="text-lg font-light">
                  Our playgrounds are safe, enjoyable spaces for students to
                  play, exercise, and develop social skills. Designed with
                  accessibility in mind, they provide a secure environment that
                  encourages active play, teamwork, and confidence.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/playground.png"
                alt="Playground"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Multipurpose Space Section */}
          <div
            id="space"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/space.png"
                alt="Multipurpose Space"
                width={500}
                height={300}
              />
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Multipurpose Space
                </h2>
                <p className="text-lg font-light">
                  Our versatile multipurpose space is ideal for assemblies,
                  performances, and events. With flexible seating and sound
                  equipment, it fosters a sense of community and celebration,
                  supporting both school and community activities.
                </p>
              </Fade>
            </div>
          </div>

          {/* Cafeteria Section */}
          <div
            id="canteen"
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
          >
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <Fade direction="up" delay={300} triggerOnce>
                <h2 className="text-3xl font-semibold text-gray-800">
                  canteen
                </h2>
                <p className="text-lg font-light">
                  Our canteen provides a comfortable space with nutritious meal
                  options, supporting student&apos;s growth and focus. Designed
                  with ample seating, it is a place for socialization and
                  relaxation, promoting well-being and energy throughout the
                  day.
                </p>
              </Fade>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/Facility/canteen.png"
                alt="Canteen"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
