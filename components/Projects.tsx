import Link from "next/link"
import { stringify } from "querystring"

export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "RocketNotes",
      description: "RocketNotes App",
      url: 'https://frontend-c7pofbs65-mati-pereira.vercel.app/',
      img: 'rocketnotes.png'
    },
    {
      id: 2,
      name: "GITFAV",
      description: "RocketNotes App",
      url: 'https://gitfav.netlify.app/',
      img: 'GITFAV.png'
    },
    {
      id: 3,
      name: "RocketNotes",
      description: "RocketNotes App",
      url: 'https://todolistforlearningintentions.netlify.app/',
      img: 'todoList.png'
    },
  ]


  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ">
        {
          projects.map((project) => (
            <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen">
              <Link href={project.url} target="_blank">
                <img src={project.img} alt={project.description} className="cursor-pointermx-12 mt-12 max-w-lg md:max-w-screen-md sm:max-w-screen-sm" />
              </Link>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-yellow-600/50 ">Case Study {project.id} of 3:</span> {project.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nesciunt recusandae animi quidem veritatis, sint doloribus qui iusto ea ipsam. Quibusdam odio excepturi omnis provident ullam corrupti sit quae velit!</p>
              </div>
            </div>
          ))
        }
      </div>





      <div className="w-full absolute top-[30%] bg-yellow-600/10 left-0 h-[500px] -skew-y-12" />


    </div>
  )
}
