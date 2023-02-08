import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills(): JSX.Element {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "easeOut",
        duration: 1.5,
      }}
      className="py-10 gap-5 flex lg:relative flex-col textcenter md:text-left xl:dlex-row max-w-[1000px] xl:px-10 min-h-screen justify-center sl:space-y-0 mx-auto items-center px-10 text-center"
    >
      <h3 className="lg:absolute lg:top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Habilidades
      </h3>
      <h3 className="lg:absolute lg:top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        Passe o mouse por cima da habilidade para ver minha proficiência
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-16 md:grid-cols-4">
        <Skill src="skills/html5.png" percentage="80%" />
        <Skill src="skills/css-3.png" percentage="85%" />
        <Skill src="skills/js.png" percentage="70%" />
        <Skill src="skills/typescript.png" percentage="60%" />
        <Skill src="skills/nodejs.png" percentage="60%" />
        <Skill src="skills/react.png" percentage="70%" />
        <Skill src="skills/nextjs.png" percentage="60%" />
        <Skill src="skills/git.png" percentage="60%" />
        <Skill src="skills/github.png" percentage="50%" />
      </div>
    </motion.div>
  );
}
