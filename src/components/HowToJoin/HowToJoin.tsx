import React from 'react';

const HowToJoinSection = () => {
  const steps = [
    {
      title: 'Step 1: Sign Up',
      description: 'Join our community and start your journey.',
      imageSrc: 'https://example.com/images/signup.jpg',
      buttonText: 'Join',
      buttonLink: '/signup',
    },
    {
      title: 'Step 2: Attend Orientation',
      description: 'Learn about our programs and get to know our team.',
      imageSrc: 'https://example.com/images/orientation.jpg',
      buttonText: 'Join',
      buttonLink: '/orientation',
    },
    {
      title: 'Step 3: Start Your Journey',
      description: 'Explore our resources and start connecting with others.',
      imageSrc: 'https://example.com/images/journey.jpg',
      buttonText: 'Join',
      buttonLink: '/journey',
    },
  ];

  return (
    <div>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>How to Join</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {steps.map((step, index) => (
          <div key={index} className='bg-gray-100 rounded-md p-4'>
            <div className='flex items-center mb-4'>
              {/* <img
                src={step.imageSrc}
                alt={step.title}
                className='w-16 h-16 rounded-full mr-4'
              /> */}
              <h3 className='text-lg font-semibold'>{step.title}</h3>
            </div>
            <p className='text-gray-600'>{step.description}</p>
            <a
              href={step.buttonLink}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
            >
              {step.buttonText}
            </a>
          </div>
        ))}
      </div>
      <a
        href='/get-started'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block w-full'
      >
        Get Started
      </a>
    </div>
  );
};

export default HowToJoinSection;
