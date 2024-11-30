import Footer from '@/components/Footer/Footer';
import React from 'react';

const page = () => {
  return (
    <>
      <h1 className='text-2xl mt-6 mb-2'>Contact Us</h1>
      <p className='text-sm leading-6'>Get in Touch with Us</p>

      <div>
        <h2 className='mt-6 font-bold mb-4 text-gray-800'>Send Us a Message</h2>
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='fullName'
              className='block text-sm font-medium text-gray-700'
            >
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Enter your full name'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Enter your email address'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700'
            >
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Enter your phone number'
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-700'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Enter the subject'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Write your message here'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='text-white-50 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <h2 className='text-2xl mt-6 mb-2'>Our Contact Information</h2>
      <table className='table-auto border-collapse  w-full'>
        <tbody>
          <tr className='border-b border-gray-300'>
            <td className='py-2 text-gray-800 font-medium'>Phone Number</td>
            <td className='py-2 text-gray-700'>+1 (123) 456-7890</td>
          </tr>
          <tr className='border-b border-gray-300'>
            <td className='py-2 text-gray-800 font-medium'>Email Address</td>
            <td className='py-2 text-gray-700'>example@email.com</td>
          </tr>
          <tr>
            <td className='py-2 text-gray-800 font-medium'>Office Address</td>
            <td className='py-2 text-gray-700'>
              123 Main St, Springfield123 Main St, Springfield123 Main St,
              Springfield
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className='text-2xl mt-6 mb-2'>Find Us Here</h2>
      <iframe
        className='w-full h-full border-0'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14226.506693427822!2d75.72651331229285!3d26.94704730404793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db35295964ba1%3A0x4115afea77b359a7!2sThe%20Digital%20Achiever!5e0!3m2!1sen!2sin!4v1725568812694!5m2!1sen!2sin'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <Footer />
    </>
  );
};

export default page;
