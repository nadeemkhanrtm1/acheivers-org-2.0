'use client';
import React from 'react';

import NextImage from '@/components/NextImage';

import CareerDevelopmentIcon from '~/icons/career-development.svg';
import LeaderShipRoleIcon from '~/icons/leadership-roles.svg';
import WFHIcon from '~/icons/wfh.svg';
import CareerDevelopmentImage from '~/images/career-development.webp';
import LeaderShipRoleImage from '~/images/leadership-roles.webp';
import WFHImage from '~/images/wfh.webp';

const ExploreOurTopOpportunities = () => {
  const exploreCardDetails = [
    {
      imageUrl: WFHImage,
      title: 'Work From Home',
      icon: <WFHIcon />,
      subTitle: 'Remote',
    },
    {
      imageUrl: CareerDevelopmentImage,
      title: 'Career Development Programs',
      icon: <CareerDevelopmentIcon />,
      subTitle: 'Growth',
    },
    {
      imageUrl: LeaderShipRoleImage,
      title: 'Leadership Roles',
      icon: <LeaderShipRoleIcon />,
      subTitle: 'Leadership',
    },
  ];
  return (
    <div>
      <h1 className='text-md mt-6 mb-2'>Explore Our Top Opportunities</h1>
      {exploreCardDetails?.map((cardDetails, index) => {
        return (
          <div
            key={index}
            className='rounded-md p-4 flex items-center bg-white-900'
          >
            <div className='flex-shrink-0 mr-4'>
              <NextImage
                src={cardDetails?.imageUrl}
                alt={cardDetails?.title}
                classNames={{ image: 'rounded-full w-20 h-20' }}
                className='w-auto'
                width={100}
                height={100}
              />
            </div>
            <div className='flex-grow'>
              <h2 className='text-lg font-semibold'>{cardDetails?.title}</h2>
              <p className='text-gray-500'>{cardDetails?.subTitle}</p>
            </div>
            <div className='flex-shrink-0 ml-4 w-5 h-5'>
              {cardDetails?.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExploreOurTopOpportunities;
