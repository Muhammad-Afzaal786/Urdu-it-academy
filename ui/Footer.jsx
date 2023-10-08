import Image from "next/image";
import Link from "next/link";

const navigation = {
  about: [
    { name: "Our Mission", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Our Partners", href: "/about" },
  ],
  courses: [
    { name: "New Courses", href: "/courses" },
    { name: "Course Active", href: "/courses" },
  ],
  help: [
    { name: "License agreement", href: "/license" },
    { name: "FAQ", href: "#" },
    { name: "Contact us", href: "/contact" },
  ],
  contribute: [
    { name: "Volunteer", href: "/contact" },
    { name: "Donate", href: "/contact" },
  ],
  social: [
    {
      id: 1,
      name: "Twitter",
      href: "https://twitter.com/UrduITacademy",
      alt: "Twitter Logo",
      icon: "/twitter_icon.png",
    },
    {
      id: 2,
      name: "Facebook",
      href: "https://www.facebook.com/urduitacademy/",
      alt: "Facebook Logo",
      icon: "/FacebookLogo(1).png",
    },
    {
      id: 3,
      name: "Youtube",
      href: "https://www.youtube.com/user/sama1119",
      alt: "Youtube Logo",
      icon: "/youtube_icon.png",
    },
    {
      id: 4,
      name: "Linedin",
      href: "https://www.linkedin.com/company/urdu-it-academy/",
      alt: "Linkedin Logo",
      icon: "/linkedin_icon.png",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-[#F8F8F8] mt-14 lg:mt-20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1215px] px-4 py-8">
        <div className="xl:grid xl:grid-cols-3 gap-[160px]">
          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-[72px] xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-[72px]">
              <div className="h-[158px] sm:h-auto">
                <h5 className="md:text-lg text-base font-bold leading-[21.78px] text-[#686868]">
                  About
                </h5>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-normal leading-[19.36px] text-[#686868]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h5 className="md:text-lg text-base font-bold leading-[21.78px] text-[#686868]">
                  Courses
                </h5>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.courses.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-normal leading-[19.36px] text-[#686868]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-[72px]">
              <div>
                <h5 className="md:text-lg text-base font-bold leading-[21.78px] text-[#686868]">
                  Help & Support
                </h5>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base md:whitespace-nowrap font-normal leading-[19.36px] text-[#686868]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h5 className="md:text-lg text-base font-bold leading-[21.78px] text-[#686868]">
                  Contribute
                </h5>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.contribute.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-normal leading-[19.36px] text-[#686868]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-[26px]">
            <h5 className="md:text-lg text-base font-bold leading-[21.78px] text-[#686868] mt-4">
              Follow Us
            </h5>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.id}
                  target="_blank"
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xs font-normal text-[#686868]">
            2023 © Urdu IT Academy | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
