import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-8'>
      <div className='flex gap-2.5 items-center justify-center flex-wrap mb-5'>
        <p className='text-md text-center'>
          © 2019 - 2024 Opportunity Provider. All rights reserved.
        </p>
        <Link href='/about-us' className='text-xs text-blue-600 underline'> About Us</Link>
        <Link href='/contact-us' className='text-xs text-blue-600 underline'>Contact Us</Link>
        <Link href='/privacy-and-terms' className='text-xs text-blue-600 underline'>Privacy Policy</Link>
        <Link href='/privacy-and-terms' className='text-xs text-blue-600 underline'>Terms and Conditions</Link>
      </div>
      <div className='flex gap-2.5 flex-wrap'>
        <span>Blogs: </span>
        <Link
          className='text-blue-600 underline'
          href='/blog/call-center-girl-empowering-her-family'
        >
          Inpspirated Girl
        </Link>
        <Link
          className='text-blue-600 underline'
          href='/blog/from-dreams-to-reality-a-girls-journey-of-hope-and-resilience'
        >
          Journey of middle class girl
        </Link>
        <Link
          className='text-blue-600 underline'
          href='/blog/graduate-overcoming-from-fraud-to-financial-freedom'
        >
          Overcoming from fraud
        </Link>
        {/* <Link className='text-blue-600 underline' href='/blog/how-we-are-different-from-others-in-terms-of-working'>
          
        </Link> */}
        <Link
          className='text-blue-600 underline'
          href='/blog/iitian-finds-inner-peace'
        >
          The IITian into our company
        </Link>
      </div>
    </div>
  );
};

export default Footer;
