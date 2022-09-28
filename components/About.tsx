import { motion } from "framer-motion"


type Props = {}

export default function About({ }: Props) {
  return (
    <div className="flex relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center">
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
      />

    </div>
  )
}
