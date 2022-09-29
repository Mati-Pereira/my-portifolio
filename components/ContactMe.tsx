import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaDiscord } from 'react-icons/fa'

export default function ContactMe() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center">Interested, get in contact and <span className="decoration-yellow-600/50 underline">Let&apos;s Talk</span></h4>
      </div>

      <div className='space-y-10'>
        <div className='flex items-center justify-center space-x-5 '>
          <PhoneIcon className='text-yellow-600 h-7 w-7  animate-pulse' />
          <p className='text-2xl '>(11) 94476-1997</p>
        </div>
        <div className='flex items-center justify-center space-x-5 '>
          <EnvelopeIcon className='text-yellow-600 h-7 w-7  animate-pulse' />
          <a className='text-2xl whitespace-nowrap' href='mailto:matheus-rodrigues37@live.com'>matheus-rodrigues37@live.com</a>
        </div>
        <div className='flex items-center justify-center space-x-5 '>
          <FaDiscord className='text-yellow-600 h-7 w-7  animate-pulse' />
          <p className='text-2xl whitespace-nowrap'>Matheus Rodrigues#5766</p>
        </div>
        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input className='contactInput' type="text" />
            <input className='contactInput' type="text" />
          </div>
          <input className='contactInput' type="text" />
          <textarea className='contactInput' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
