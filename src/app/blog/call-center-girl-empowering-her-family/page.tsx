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
      {content.map((paragraph, index) => (
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
      'Breaking Barriers: A Call Center Girl’s Journey to Empowering Her Family',
    content: [
      'Life in a metro city often comes with its own set of challenges, especially when financial constraints weigh heavily on a family. For [insert name], working in a call center and earning around ₹15,000 per month, the struggle was real.',
      "With her modest earnings, she tried her best to support her parents and younger sister, but it was never enough. 'There were days when I felt hopeless. No matter how hard I worked, we barely scraped by,' she recalls.",
      'Things changed when she came across an opportunity with us. Skeptical at first, she decided to take a chance and join. It was the beginning of a transformative journey.',
      "One day stands out vividly in her memory. It was the day she received her first ₹90,000 paycheck. 'I couldn’t believe my eyes. It felt surreal,' she says with a smile. Her parents’ pride and happiness were beyond words. For the first time, she felt the weight of financial struggles lifting off her shoulders.",
      'With her newfound financial independence, she didn’t just elevate her family’s lifestyle but also became a source of inspiration for others in her community. Her success story proves that with determination and the right opportunities, anyone can overcome even the toughest challenges.',
      "Her story is not just hers—it’s ours too. 'We are proud to have been a part of her journey. Seeing her transform her life and bring happiness to her family is what drives us to keep doing what we do.'",
      "To everyone out there facing challenges, she says: 'Never stop believing in yourself. With persistence and the right opportunities, life can change for the better. Always take a chance on yourself.'",
    ],
    quote:
      'Never stop believing in yourself. With persistence and the right opportunities, life can change for the better.',
    caption: 'From ₹15,000 to ₹90,000—The Journey of Dreams and Determination.',
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <BlogArticle {...article} />
    </div>
  );
};

export default BlogPage;
