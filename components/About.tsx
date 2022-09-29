import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1
      }}

      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1
        }}
        src="https://github.com/Mati-Pereira.png"
        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl xl:w-[300px] xl:h-[400px] mt-24"
      />
      <div className="space-y-5 px-0 md:px-10 lg:px-28">
        <h4 className="text-4xl font-semibold lg:mb-14">Here is a little of <span className="underline decoration-yellow-700 ">My Story</span></h4>
        <p className="text-xs sm:text-base text-justify ">Hello, how are you? My name is Matheus Rodrigues Pereira and I thank you for taking the time to look at this portfolio. I am 25 years old and currently unemployed. I graduated in Electrical Engineering from Universidade Vale do Rio Doce, in the year 2019.</p>
        <p className="text-xs sm:text-base text-justify ">Programming has always been a passion of mine, since college, I always thought of connecting my knowledge with new technologies, it was and is something very instinctive to me. I dedicate myself heart and soul to achieve my dream of being a <span className="underline decoration-yellow-700 font-bold">FullStack Web Developer.</span></p>
      </div>
    </motion.div>
  )
}
