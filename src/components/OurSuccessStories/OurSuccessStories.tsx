'use client';
import React from 'react';

import NextImage from '@/components/NextImage';

import SuccessStoryImage1 from '~/images/success-story-1.webp';

const OurSuccessStories = () => {
  const cardDetails = [
    {
      image: SuccessStoryImage1,
      title: 'John Doe',
      subTitle: 'Dream job with flexible hours',
    },
    {
      image: SuccessStoryImage1,
      title: 'John Doe',
      subTitle: 'Dream job with flexible hours',
    },
    {
      image: SuccessStoryImage1,
      title: 'John Doe',
      subTitle: 'Dream job with flexible hours',
    },
  ];
  return (
    <div>
      <h1 className='text-md mt-6 mb-2'>Our Success Stories</h1>
      <div className='h-64 overflow-y-hidden overflow-x-auto flex flex-row whitespace-nowrap gap-5 pr-5'>
        {cardDetails?.map((details, index) => {
          return (
            <React.Fragment key={index}>
              <div className='h-64 bg-white-900 w-60 rounded-lg'>
                <NextImage
                  src={details?.image}
                  className='h-44 w-full'
                  width={100}
                  height={100}
                  alt={details?.title}
                  classNames={{ image: 'w-full rounded-t-lg' }}
                />
                <div className='p-4 flex flex-col'>
                  <span className='text-lg font-bold'>{details?.title}</span>
                  <span className='text-md text-gray-700'>
                    {details?.subTitle}
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OurSuccessStories;
