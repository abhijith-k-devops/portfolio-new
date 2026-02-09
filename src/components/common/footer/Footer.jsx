import { Link } from "react-scroll";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Work Experience", url: "blog" },
  { id: 6, name: "Services", url: "services" },
  { id: 7, name: "Contact", url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <Link
          href="#introduction"
          to={`introduction`}
          smooth={true}
          duration={900}
          className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <h2 className="text-xl sm:text-3xl font-semibold">
              <span className="text-white">abhijith</span>
              <span className="text-picto-primary text-2xl sm:text-4xl">.</span>
            </h2>
        </Link>
        <div className="mx-7 max-md:my-7 flex justify-center items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.url}
              to={item.url.toLowerCase()}
              smooth={true}
              duration={900}
              className="group relative cursor-pointer text-[12px] sm:text-[16px]"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10"> 
      </p>
    </div>
  );
};

export default Footer;
