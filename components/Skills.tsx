import { motion } from 'framer-motion'
import Skill from './Skill'

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
      ease: 'easeOut',
      duration: 1.5,
    }}

      className="h-screen flex relative flex-col textcenter md:text-left xl:dlex-row max-w-[1000px] xl:px-10 min-h-screen justify-center sl:space-y-0 mx-auto items-center px-10 text-center">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>Hover over a skill for current proficiency</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 mt-16 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}
