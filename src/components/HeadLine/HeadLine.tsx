import Link from 'next/link';
import React from 'react';

const HeadLine = () => {
  return (
    <div className='pt-20 mb-14'>
      <h1 className='text-slate-900 text-center font-extrabold text-4xl tracking-tight'>
        Your <span className='text-emerald-400'>Dreams</span>, Your{' '}
        <span className='text-orange-400'>Terms</span>: Achieving Success and
        Balance!
      </h1>
      <p className='mt-6 text-lg text-slate-600 text-center'>
        Transform Your Life! Flexible, home-based careers with unlimited earning
        potential. Join our supportive community and take control of your
        finances!
      </p>
      <Link
        href='/get-started'
        className='bg-slate-900 text-white-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center mt-6'
      >
        Apply Now
      </Link>
    </div>
  );
};

export default HeadLine;
