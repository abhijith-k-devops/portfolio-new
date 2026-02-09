import img1 from "../../assets/images/blog/blog-1.png";
import img2 from "../../assets/images/blog/blog-2.png";
import img3 from "../../assets/images/blog/blog-3.png";
import img4 from "../../assets/images/blog/blog-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "27 Jan, 2023 - Present",
    title: "Lead Solution Engineer",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "02 Feb, 2022 - 25 Jan, 2023",
    title: "Senior Software Engineer",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "02 Aug, 2018 - 01 Feb, 2022",
    title: "Senior Software Engineer",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "01 Jun, 2017 - 31 Jul, 2018",
    title: "Junior Android Developer",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Work Experience</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Take a closer look at my career journey — the products I’ve helped shape, the technologies I’ve mastered, and the impact I’ve delivered as an Android developer.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
