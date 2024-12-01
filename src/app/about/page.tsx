'use client';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/Footer/Footer';
import NextImage from '@/components/NextImage';

import TwoThousandIcon from '~/icons/2000.svg';
import TwoThousandFive from '~/icons/2005.svg';
import TwoThousandFifteen from '~/icons/2015.svg';
import CustomerCommitmentIcon from '~/icons/customer-cmmitment.svg';
import InnovationIcon from '~/icons/innovation.svg';
import IntegrityIcon from '~/icons/integrity.svg';
import AboutUsImage from '~/images/about-us.webp';
import DummyImage1 from '~/images/leadership-roles.webp';

const page = () => {
  const cardDetails = [
    {
      icon: <IntegrityIcon />,
      title: 'Integrity',
      desc: 'We uphold the highest standards of integrity in all of our actions.',
    },
    {
      icon: <InnovationIcon />,
      title: 'Innovation',
      desc: 'We pursue innovation that matters for our company and our customers.',
    },
    {
      icon: <CustomerCommitmentIcon />,
      title: 'Customer Commitment',
      desc: 'We develop relationships that make a positive difference in our customers lives.',
    },
  ];

  const outTeanCardDetails = [
    {
      image: DummyImage1,
      name: 'Vikash Swami',
      designation: 'Super Manager',
    },
    {
      image: DummyImage1,
      name: 'Zoya Khan',
      designation: 'Associate',
    },
    {
      image: DummyImage1,
      name: '100+',
      designation: 'Others',
    },
  ];

  const ourJourneyCardDetails = [
    {
      icon: <TwoThousandIcon />,
      title: '2000',
      desc: 'Company founded in San Francisco, USA.',
    },
    {
      icon: <TwoThousandFive />,
      title: '2005',
      desc: 'Launched our first product.',
    },
    {
      icon: <TwoThousandFifteen />,
      title: '2015',
      desc: 'Expanded our business globally.',
    },
  ];
  return (
    <section>
      <NextImage
        src={AboutUsImage}
        width={100}
        height={100}
        alt='About Us'
        className='w-full mt-5'
        unoptimized
        classNames={{ image: 'w-full rounded-md' }}
      />
      <h1 className='mt-6 mb-2'>Welcome to Tech Innovators</h1>
      <p className='text-sm leading-6'>
        At Tech Innovators, we are committed to delivering top-quality solutions
        to meet your every need. From innovative products to excellent customer
        service, we have been a trusted name in the industry since 1998.
      </p>
      <h2 className='mt-6 mb-2'>Our Mission</h2>
      <p className='text-sm leading-6'>
        Our mission is to transform the way you live and work by providing
        world-class solutions that are both sustainable and efficient.
      </p>
      <h2 className='mt-6 mb-2'>Our Values</h2>
      {cardDetails?.map((item, index) => {
        return (
          <div className='flex py-3 gap-4' key={index}>
            <div className='h-12 w-12 p-3 bg-grey-300 flex items-center justify-center rounded-md'>
              <div className='h-6 w-6'>{item?.icon}</div>
            </div>
            <div>
              <span className='block text-md font-semibold'>{item?.title}</span>
              <span className='block text-xs text-gray-500'>{item?.desc}</span>
            </div>
          </div>
        );
      })}

      <h2 className='mt-6 mb-2'>Meet Our Team</h2>
      {outTeanCardDetails?.map((item, index) => {
        return (
          <div className='flex py-3 gap-4 items-center' key={index}>
            <div>
              <NextImage
                src={item?.image}
                width={100}
                height={100}
                alt='About Us'
                className='w-full'
                unoptimized
                classNames={{ image: 'rounded-md w-14 h-14' }}
              />
            </div>
            <div>
              <span className='block text-md font-semibold'>{item?.name}</span>
              <span className='block text-xs text-gray-500'>
                {item?.designation}
              </span>
            </div>
          </div>
        );
      })}

      <h2 className='mt-6 mb-2'>Our Journey</h2>
      {ourJourneyCardDetails?.map((item, index) => {
        return (
          <div className='flex py-3 gap-4' key={index}>
            <div className='h-12 w-12 p-3 bg-grey-300 flex items-center justify-center rounded-md'>
              <div className='h-6 w-6'>{item?.icon}</div>
            </div>
            <div>
              <span className='block text-md font-semibold'>{item?.title}</span>
              <span className='block text-xs text-gray-500'>{item?.desc}</span>
            </div>
          </div>
        );
      })}

      <Link
        href='/contact-us'
        className='bg-blue-600 text-white-50 w-full text-center h-12 flex items-center justify-center my-2 rounded-md'
      >
        Get in Touch
      </Link>

      <Footer />
    </section>
  );
};

export default page;
