import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "",
    quote: `Abhijit has taken the lead on Activities initiatives in the Expedia project, offering valuable solutions to enhance Android architecture. His contributions, particularly in optimizing the performance of the Activities pages, have been well appreciated by the customer for their impact and effectiveness.`,
    name: "Jyoti Balwani",
    designation: "Senior Manager - Engineering, Expedia Group",
  },
  {
    message:
      "",
    quote: `Shoutout to Abhijit, who went above and beyond to ensure RAAO readiness on Android  for Bug Bash & UAT. We got last min feedback on his PR, which required re-work on the whole implementation approach. Even while it was a bummer, he took it positively and he worked through the weekend to ensure we are not delayed for UAT and followed up on his PRs. He also has been pairing with Ribina since she has joined us and has helped her ramp up on our stack really well.​
Thank you for your contributions, Abhijit. Keep them coming!`,
    name: "Jyoti Balwani",
    designation: "Senior Manager - Engineering, Expedia Group",
  },
  {
    message:
      "",
    quote: `Upon joining the Expedia Activities team, Abhijith Kottayi emerged as the sole Android developer representing IBS in the Activities team. Through dedicated efforts, he navigated the onboarding process and established a strong rapport with the customer team. Abhijith consistently delivers features with exceptional quality and demonstrates effective collaboration with clients. In a remarkably short time, he has become an integral and valued member of the customer team.`,
    name: "Jasdev Singh",
    designation: "Senior Director - Engineering, Expedia Group",
  },
  {
    message:
      "",
    quote: `We appreciate your inspiring journey during the Traveler Native Hackathon. It was fantastic to see your idea and implementation for the Hackathon project. The Hackathon not only allows us to explore new ideas but also fosters great teamwork. Your dedication and creativity have truly made an impact. We look forward to seeing your continued innovation in future Hackathons!`,
    name: "Anupama Joseph",
    designation: "Lead Manager - Engineering, IBS Software Private Limited",
  }
];

const Testimonial = () => {
  return (
    <div className="mt-20 flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
