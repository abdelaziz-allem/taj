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
    link: "https://x.com/TajIntlSchool?t=-tSH3UZmfqk3lijdkmnxkQ&s=09",
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
            <Link
              className="text-pink text-light-pink underline"
              href={item.link}
              key={i}
              passHref
            >
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

      {/* Accreditation Section */}
      <div className="my-8 text-center">
        <p className="text-sm font-medium text-darkgrey mb-2">Accredited by</p>
        <Image
          src="/images/Logo/iao.jpg"
          alt="Accreditation Logo"
          width={300} // Adjust width as needed
          height={50} // Adjust height as needed
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
