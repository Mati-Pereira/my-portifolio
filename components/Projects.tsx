import Link from "next/link";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../data/data.json';

export default function Projects() {

  const projects = data
  return (

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
      {projects.map(project => (
        <SwiperSlide key={project.id}
        >
          <div key={project.id} className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen lg:flex-col">
            <div className="flex justify-center items-center flex-col lg:flex-row">
              <Link href={project.url} target="_blank">
                <img src={project.img} alt={project.description} className="cursor-pointer md:mx-12 mt-12 lg:max-w-lg md:max-w-md sm:max-w-sm" />
              </Link>
              <div className="space-y-10 px-0  max-w-6xl">
                <h4 className="text-4xl font-semibold text-center underline decoration-yellow-600/50 pt-16 md:pt-0">{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-center underline decoration-yellow-600/50 pt-10">Link para O Github do Projeto</a>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  )
}
