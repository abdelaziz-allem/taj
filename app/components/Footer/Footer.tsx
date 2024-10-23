import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://twitter.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About", "Careers", "Mobile", "Blog", "How we work?"],
  },
  {
    id: 2,
    section: "Contact",
    link: ["Help/FAQ", "Press", "Affiliates", "Hotel owners", "Partners"],
  },
  {
    id: 3,
    section: "More",
    link: ["Recipe", "Chef", "Food", "Support"],
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          @2024 - Taj school All Rights Reserved
        </h4>

        <div className="flex gap-4">
          {socialLinks.map((items, i) => (
            <Link href={items.link} key={i}>
              <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={items.width}
                  height={2}
                  className="sepiaa"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default footer;
