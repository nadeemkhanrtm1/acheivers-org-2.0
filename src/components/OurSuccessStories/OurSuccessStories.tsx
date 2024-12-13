'use client';
import React from 'react';

import NextImage from '@/components/NextImage';

import HundredPlusImage from '~/images/100_plus.jpeg';
import VikasSwamiImage from '~/images/vikas-swami-img.jpeg';
import ZoyaKhanImage from '~/images/zoya-khan.jpeg';

const OurSuccessStories = () => {
  const cardDetails = [
    {
      image: VikasSwamiImage,
      title: 'Vikas Swami',
      subTitle: 'Dream job with flexible hours',
    },
    {
      image: ZoyaKhanImage,
      title: 'Zoya Khan',
      subTitle: 'Dream job with flexible hours',
    },
    {
      image: HundredPlusImage,
      title: 'Others',
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
                  unoptimized
                  classNames={{
                    image: 'w-full rounded-t-lg h-full object-cover',
                  }}
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
