import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string;
}

interface SocialLink {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLink[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com/tajschools",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/tajschools/?hl=en",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://twitter.com/tajschools",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Admission Process",
    link: "/admission",
  },
  {
    id: 2,
    section: "Tuition Fee",
    link: "/tuitionfee",
  },
  {
    id: 3,
    section: "Contact",
    link: "#contact",
  },
];

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* Top Footer with Links and Social Media */}
      <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          &copy; 2024 - Taj School All Rights Reserved
        </h4>

        <div className="flex gap-4">
          {products.map((item, i) => (
            <Link className="hover:underline" href={item.link} key={i} passHref>
              {item.section}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          {socialLinks.map((item, i) => (
            <Link href={item.link} key={i} passHref>
              <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                <Image
                  src={item.imgSrc}
                  alt="Social Icon"
                  width={item.width}
                  height={item.width}
                  className="sepiaa"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="my-8">
        <h4 className="text-lg font-semibold text-center mb-4">Our Location</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.3901541052787!2d44.03846117502558!3d9.561596090522539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf24841a8577%3A0xf1f57e744493bb9a!2sTaj%20International%20School!5e0!3m2!1sen!2sus!4v1731144375674!5m2!1sen!2sus"
          width="100%"
          height="250"
          className="border-0 w-full"
          allowFullScreen
          loading="lazy"
          title="Taj School Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
