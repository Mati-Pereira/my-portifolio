import React from 'react'

type Props = {}

export default function BackgroundCircles({ }: Props): JSX.Element {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border border-gray-700 h-[300px] w-[300px] rounded-full mt-16 animate-pulse' />
      <div className='absolute border border-[#333] h-[500px] w-[500px] rounded-full mt-16 ' />
      <div className='absolute border border-[#bdf032] h-[650px] w-[650px] rounded-full mt-16 animate-pulse' />
      <div className='absolute border border-[#333] h-[800px] w-[800px] rounded-full mt-16 ' />
    </div>
  )
}
