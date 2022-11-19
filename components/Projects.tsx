import Link from "next/link";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "RocketNotes",
      description: "This project consists of a note saver, with authentication for each user to write down their notes securely and privately.",
      url: 'https://frontend-c7pofbs65-mati-pereira.vercel.app/',
      img: 'rocketnotes.png'
    },
    {
      id: 2,
      name: "GITFAV",
      description: "This project consists of entering the github user of the person you want to search, thus showing the number of this person's repositories and some other relevant information to see",
      url: 'https://gitfav.netlify.app/',
      img: 'GITFAV.png'
    },
    {
      id: 3,
      name: "ToDo-List",
      description: "This project consists of an app to write down tasks that the user wants to remember, and can mark them as done when the user finishes them",
      url: 'https://todo-list-matheus-rodrigues.netlify.app/',
      img: 'todoList.png'
    },
  ]


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
          className='flex justify-center items-center'
        >
          <div
            key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen lg:flex-row">
            <Link href={project.url} target="_blank">
              <img src={project.img} alt={project.description} className="cursor-pointer md:mx-12 mt-12 lg:max-w-lg md:max-w-md sm:max-w-sm" />
            </Link>
            <div className="space-y-10 px-0  max-w-6xl">
              <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-yellow-600/50 ">Case Study {project.id} of 3:</span> {project.name}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  )
}
