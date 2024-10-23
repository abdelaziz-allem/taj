"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/Features/logic.png",
    heading: "Logic",
    subheading:
      "Develop critical thinking and problem-solving skills that apply to everyday life and academic success.",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/math.png",
    heading: "Math",
    subheading:
      "Master the fundamentals of mathematics, from arithmetic to advanced concepts, to build a strong analytical foundation.",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/science.png",
    heading: "Science",
    subheading:
      "Explore the wonders of the natural world through hands-on experiments and in-depth study of biology, chemistry, and physics.",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/english.png",
    heading: "English",
    subheading:
      "Enhance communication skills through reading, writing, and understanding the intricacies of the English language.",
    link: "Learn more",
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-20 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase">
              Main Classes
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
              See the interesting classes <br /> we offer.
            </p>
          </Fade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-24">
          {cardData.map((items, i) => (
            <Fade
              key={i}
              direction={"up"}
              delay={1000 + i * 100}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <div className="card-b bg-white  p-8 relative rounded-3xl flex flex-col items-center">
                <div className="work-img-bg rounded-full w-44 h-44 flex justify-center items-center bg-lightgray absolute -top-20">
                  <Image
                    src={items.imgSrc}
                    alt={items.heading}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="mt-24 text-center">
                  <h3 className="text-2xl font-semibold text-black">
                    {items.heading}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">
                    {items.subheading}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/"
                    className="text-pink font-medium flex items-center space-x-1 hover:underline"
                  >
                    <span>{items.link}</span>
                    <ChevronRightIcon width={20} height={20} />
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
