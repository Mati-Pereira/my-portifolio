import { SocialIcon } from 'react-social-icons';

function Header(): JSX.Element {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center p-5'>
      <div>
        <SocialIcon target="_blank" network='github' url='https://github.com/Mati-Pereira' bgColor='transparent' fgColor='gray' />
        <SocialIcon target="_blank" network='linkedin' url='https://www.linkedin.com/in/matheus-rodrigues-pereira/' bgColor='transparent' fgColor='gray' />
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon target='_blank' network='email' url='mailto:matheus-rodrigues37@live.com' bgColor='transparent' fgColor='gray' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
      </div>
    </header>
  );
}

export default Header;


