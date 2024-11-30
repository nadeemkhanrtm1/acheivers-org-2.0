import ApplyGrowIcon from '~/icons/apply-grow.svg';
import BrowseOpporIcon from '~/icons/browse-ooportunities.svg';
import CreateYourProfileIcon from '~/icons/create-your-profile.svg';

const HowItWorks = () => {
  const cardDetails = [
    {
      title: 'Create Your Profile',
      icon: <CreateYourProfileIcon />,
    },
    {
      title: 'Browse Opportunities',
      icon: <BrowseOpporIcon />,
    },
    {
      title: 'Apply and Grow',
      icon: <ApplyGrowIcon />,
    },
  ];
  return (
    <div>
      <h1 className='text-md mt-6 mb-2'>How It Works</h1>
      <div>
        <div className='flex-grow my-2 '>
          <>
            {cardDetails?.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-center bg-white-900 px-4 gap-4 pt-3 ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${index === cardDetails?.length - 1 ? 'rounded-b-lg' : ''}`}
                >
                  <div className='w-6 h-6'>{items?.icon}</div>
                  <p
                    className={`text-gray-700 text-md pb-3 w-full ${
                      index !== cardDetails?.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    {items?.title}
                  </p>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
