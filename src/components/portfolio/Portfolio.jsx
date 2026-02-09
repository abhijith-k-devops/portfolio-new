import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Android",
    title: "Expedia",
    description:
      "Worked on the Expedia Android app, a high-traffic travel application used by millions globally. Contributed to the development and enhancement of key modules including Things to Do, activity search, prebooking flows, postbooking flow, Flights details page, accessibility support, and analytics instrumentation. Worked on optimizing app performance, improving user experience, and ensuring the app's stability and scalability to handle large user traffic.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "Android",
    title: "Nymbl Vansales",
    description:
      "Built and delivered an offline-first Android POS application designed for sales agents operating in low or no network environments. Led the implementation of Room-based local data storage with secure server synchronization, integrated inbuilt and BLE receipt printing, and optimized performance for Sunmi V1, V2, and other Android POS devices to ensure stability and real-world reliability.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Change Payents",
    description:
      "Designed and build a user-friendly payment management interface for a fintech application, enabling users to easily view, manage, and track their transactions and payment history with intuitive navigation and clear visual cues. The app was build in Native Android using Jetpack Compose and integrated with multiple payment gateways to provide a seamless and secure user experience.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "Android",
    title: "Kelque",
    description:
      "Kelque is a comprehensive Android application designed to streamline a online news platform. It offers a user-friendly interface for browsing and reading news articles, with features such as personalized news feeds, offline reading, and seamless integration with social media platforms for easy sharing. The app is built using modern Android development practices, ensuring a smooth and engaging user experience.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "Flutter",
    title: "AQR",
    description:
      "This is a cross-platform mobile application built using Flutter, designed to provide users with a seamless and intuitive experience across both Android and iOS devices. The app is providing a detailed learing system for fire fighters, with a detailed topic-wise content structure. The app is built with a focus on performance, usability, and accessibility to ensure it meets the needs of its users effectively.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "Android",
    title: "CureShop",
    description:
      "This is an e-commerce application built for the healthcare industry, designed to provide users with a seamless and convenient shopping experience for medical products and services. The app features a user-friendly interface, secure payment options, and efficient order management to ensure a smooth and reliable shopping experience for customers seeking healthcare products online.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric Android applications and UI/UX designs.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
