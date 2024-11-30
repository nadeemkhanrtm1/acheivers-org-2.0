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
    title: 'Rising Above Scams: A Graduate’s Journey to Stability and Success',
    content: [
      'Graduation is a moment of pride, a milestone that holds the promise of new opportunities. But for [insert name], a young graduate eager to support her family, the transition from college to career turned into a nightmare.',
      "In her search for a stable job, she fell victim to multiple online frauds. Scam after scam preyed on her desperation, promising lucrative offers of ₹90,000 to ₹1 lakh monthly. But each time, they vanished after taking her hard-earned money. 'I felt like the ground was slipping beneath me. I was trying to help my family, but I ended up being deceived again and again,' she shares.",
      'Defeated yet determined, she came across us. Skeptical after her earlier experiences, she hesitated initially but decided to give it one last chance. This decision changed her life.',
      "Unlike fraudulent schemes, our transparent methods and genuine support helped her rebuild her confidence. 'It was the first time I felt comfortable and supported in my professional journey. Their approach is not just different but genuinely better,' she says with a smile.",
      'Now, she’s thriving. Earning steadily and supporting her family, she has finally achieved the stability she yearned for. More importantly, she’s regained the trust she lost after her earlier experiences.',
      "Her story is a testament to resilience and the importance of finding trustworthy opportunities. To others facing similar struggles, she says: 'Don’t lose hope. There are genuine opportunities out there—you just need to find the right people who truly care about your success.'",
      'We are proud to be the helping hand in her journey. Her success reinforces why we do what we do—to help people build secure and successful careers.',
    ],
    quote:
      'Don’t lose hope. There are genuine opportunities out there—you just need to find the right people who truly care about your success.',
    caption: 'From Online Frauds to Financial Freedom: Her Inspiring Journey.',
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <BlogArticle {...article} />
    </div>
  );
};

export default BlogPage;
