import Link from "next/link";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/data.json";

export default function Projects() {
  const projects = data;
  return (
    <div className="relative min-h-screen">
      <h3 className="lg:absolute pt-10 text-center w-screen top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        scrollbar={{ draggable: true, enabled: true }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div
              key={project.id}
              className="flex flex-col items-center justify-center flex-shrink-0 w-screen min-h-screen p-20 space-y-5 snap-center lg:flex-col"
            >
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <Link href={project.url} target="_blank">
                  <img
                    src={project.img}
                    alt={project.description}
                    className="mt-12 cursor-pointer md:mx-12 lg:max-w-lg md:max-w-md sm:max-w-sm"
                  />
                </Link>
                <div className="max-w-6xl px-0 pt-3 space-y-10">
                  <h4 className="pt-16 text-4xl font-semibold text-center underline decoration-yellow-600/50 md:pt-0">
                    {project.name}
                  </h4>
                  <p>{project.description}</p>
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-10 text-xl font-semibold text-center underline decoration-yellow-600/50"
              >
                Github
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
