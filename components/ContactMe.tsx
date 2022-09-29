import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaDiscord } from 'react-icons/fa'

import { init, sendForm } from 'emailjs-com';
init('PL6RvQ2mJ6MgZ7ycK');

import { useForm, SubmitHandler } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ email, message, name, subject }) => {
    if (!email || !message || !name || !subject) {
      toast.error('Missing required field, please fill them', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    sendForm('default_service', 'template_irvv74i', '#contact-form')
      .then(function (response) {
        toast.success('Form send successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log('SUCCESS!', response.status, response.text);

      }, function (error) {
        toast.error('Error sending the form', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log('FAILED...', error);
      });
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left  max-w-6xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      <div className="flex flex-col mt-24 md:mt-32">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">Interested, get in contact and <span className="decoration-yellow-600/50 underline">Let&apos;s Talk</span></h4>
      </div>

      <div className='space-y-6 md:space-y-10'>
    
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full md:w-fit mx-auto' id='contact-form'>

          <div className='flex flex-col md:flex-row md:space-x-2 gap-2 md:gap-0 w-full'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />

          <button type='submit' className='bg-yellow-600 py-5 px-10 rounded-md text-black font-bold hover:bg-yellow-600/40 hover:text-white duration-200'>Submit</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  )
}
