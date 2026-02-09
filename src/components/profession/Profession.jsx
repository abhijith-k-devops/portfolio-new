import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Android Development",
    description:
      "I build scalable, high-performance Android applications using Kotlin, MVVM, and Clean Architecture — delivering clean, maintainable code with seamless user experiences.",
  },
  {
    id: 2,
    title: "Backend Services Development",
    description:
      "I develop robust backend services using PHP Laravel, and REST APIs, ensuring secure, scalable, and high-performance systems that support mobile and web applications.",
  },
  {
    id: 3,
    title: "UI/UX Designing",
    description:
      "I craft intuitive, user-centric interfaces with a strong focus on usability, accessibility, and performance — turning complex workflows into seamless digital experiences.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I design and develop high-performance Android applications that are scalable, maintainable, and user-focused. Using Kotlin, Java, MVVM, Clean Architecture, and Jetpack Compose, I transform ideas into production-ready mobile solutions.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Beyond development, I craft intuitive UI/UX experiences, optimize performance, integrate advanced features like Bluetooth and payment systems, and ensure every product delivers real business value.
          </p>
        </div>
        <a
          href="mailto:abhijith.k.devops@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
