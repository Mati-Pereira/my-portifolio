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
            <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <Link href={project.url} target="_blank">
                <img src={project.img} alt={project.description} className="cursor-pointer"/>
              </Link>
              <div>
                <h4>Case Study {project.id} of 3: <strong>{project.name}</strong></h4>
              </div>
            </div>
          ))
        }
      </div>





      <div className="w-full absolute top-[30%] bg-yellow-600/10 left-0 h-[500px] -skew-y-12" />


    </div>
  )
}
