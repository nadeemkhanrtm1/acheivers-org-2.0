import React from 'react';

interface BlogProps {
  title: string;
  content: string[];
  quote: string;
  caption: string;
}

const BlogArticle: React.FC<BlogProps> = ({
  title,
  content,
  quote,
  caption,
}) => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md'>
      <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-4'>
        {title}
      </h1>
      {content?.map((paragraph, index) => (
        <p key={index} className='text-gray-700 text-lg leading-relaxed mb-4'>
          {paragraph}
        </p>
      ))}
      <blockquote className='border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-6'>
        {quote}
      </blockquote>
      <div className='bg-gray-100 p-4 rounded-md shadow-sm'>
        <p className='text-center text-gray-500 italic'>{caption}</p>
      </div>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const article = {
    title:
      'From Dreams to Reality: A Common Girl’s Journey of Resilience and Hope',
    content: [
      'Life doesn’t always offer a smooth path. For [insert name], a young woman from a humble background, her journey was marked by struggles, sacrifices, and unwavering determination.',
      'Born to a factory worker, her childhood was simple yet filled with dreams. Her father was the sole breadwinner of the family, working tirelessly to make ends meet. However, tragedy struck early—her father passed away unexpectedly, leaving the family grappling with an uncertain future. The burden of responsibilities fell on her young shoulders.',
      "Despite the challenges, she refused to let her circumstances define her destiny. 'There were nights when I thought of giving up, but I knew that if I didn’t step up, we’d lose everything,' she recalls.",
      'Her breakthrough came when she landed a job through a government initiative that supported underprivileged families. This opportunity marked the beginning of a new chapter in her life. With her first paycheck, she not only supported her family but also reignited their dreams.',
      "'I used to think education and a decent job were privileges we couldn’t afford,' she says. 'But this job proved to me that dreams are achievable if we persevere.'",
      'Today, she’s a beacon of hope for her community, inspiring other young women to pursue education and employment, despite the odds stacked against them.',
    ],
    quote:
      'Never stop believing in your potential. Life will throw challenges, but they are temporary. Stay resilient.',
    caption: "A daughter's dreams light up the way, even in the darkest times.",
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <BlogArticle {...article} />
    </div>
  );
};

export default BlogPage;
