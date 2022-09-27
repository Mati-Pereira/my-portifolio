import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({ }: Props): JSX.Element {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0]
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        repeatDelay: 5
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-gray-700 h-[300px] w-[300px] rounded-full mt-64 animate-pulse -z-20' />
      <div className='absolute border border-[#333] h-[500px] w-[500px] rounded-full mt-64 -z-20' />
      <div className='absolute border border-[#4b5f15] h-[650px] w-[650px] rounded-full mt-64 animate-pulse -z-20' />
      <div className='absolute border border-[#333] h-[800px] w-[800px] rounded-full mt-64 -z-20' />
    </motion.div>
  )
}

