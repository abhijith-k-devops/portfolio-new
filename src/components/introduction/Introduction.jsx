import person from "../../assets/images/person.png";
import androidStudio from "../../assets/icons/android-studio.svg";
import kotlin from "../../assets/icons/kotlin.svg";
import java from "../../assets/icons/java.svg";
import compose from "../../assets/icons/compose.svg";
import graphql from "../../assets/icons/graphql.svg";
import firebase from "../../assets/icons/firebase.svg";
import figma from "../../assets/icons/figma.svg";
import photoshop from "../../assets/icons/adobe-photoshop.svg";
import illustrator from "../../assets/icons/adobe-illustrator.svg";
import visualStudio from "../../assets/icons/visual-studio.svg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "8 Y.",
  },
  {
    id: 2,
    title: "Projects",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "100%",
  },
];

const techIcons = [
  { id: 1, src: androidStudio, alt: "Android Studio" },
  { id: 2, src: kotlin, alt: "Kotlin" },
  { id: 3, src: java, alt: "Java" },
  { id: 4, src: compose, alt: "Jetpack Compose" },
  { id: 5, src: graphql, alt: "GraphQL" },
  { id: 6, src: firebase, alt: "Firebase" },
  { id: 7, src: figma, alt: "Figma" },
  { id: 8, src: photoshop, alt: "Photoshop" },
  { id: 9, src: illustrator, alt: "Illustrator" },
  { id: 10, src: visualStudio, alt: "Visual Studio" },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Abhijith Kottayi
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I am a Android developer and UI/UX designer based in Kerala, India with 8 years of experience.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white font-semibold"
              href="mailto:abhijith.k.devops@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {techIcons.map((item, index) => (
            <div
              key={index}
              className="
                w-14 h-14
                rounded-2xl
                bg-white
                flex items-center justify-center
                shadow-[6px_6px_12px_rgba(0,0,0,0.06),_-6px_-6px_12px_rgba(255,255,255,0.8)]
                hover:shadow-2xl
              "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-6">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
