import person from "../../assets/images/person.png";
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
  { id: 1, src: "../../assets/icons/android-studio.svg", alt: "Android" },
  { id: 2, src: "../../assets/icons/kotlin.svg", alt: "Kotlin" },
  { id: 3, src: "../../assets/icons/java.svg", alt: "Java" },
  { id: 4, src: "../../assets/icons/compose.svg", alt: "Compose" },
  { id: 5, src: "../../assets/icons/graphql.svg", alt: "GraphQL" },
  { id: 6, src: "../../assets/icons/firebase.svg", alt: "Firebase" },
  { id: 7, src: "../../assets/icons/figma.svg", alt: "Figma" },
  { id: 8, src: "../../assets/icons/adobe-photoshop.svg", alt: "Photoshop" },
  {id: 9, src: "../../assets/icons/adobe-illustrator.svg", alt: "Illustrator" },
  {id: 10, src: "../../assets/icons/visual-studio.svg", alt: "Visual Studio" },
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
        <div className="flex flex-wrap gap-4 mt-6">
            {techIcons.map((icon) => (
              <div className="bg-white shadow-md rounded-xl p-2 hover:scale-110 transition">
                <img src={icon.src} alt={icon.name} className="h-8 sm:h-10" />
              </div>
            ))}
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
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
