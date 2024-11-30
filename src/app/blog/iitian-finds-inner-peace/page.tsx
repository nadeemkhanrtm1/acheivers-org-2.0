import React from "react";

interface BlogProps {
  title: string;
  content: string[];
  quote: string;
  caption: string;
}

const BlogArticle: React.FC<BlogProps> = ({ title, content, quote, caption }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      {content.map((paragraph, index) => (
        <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-6">
        {quote}
      </blockquote>
      <div className="bg-gray-100 p-4 rounded-md shadow-sm">
        <p className="text-center text-gray-500 italic">{caption}</p>
      </div>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const article = {
    title: "Redefining Success: An IITian’s Journey to Finding Inner Peace and Fulfillment",
    content: [
      "Success often wears different faces. For [insert name], a young man with a prestigious IIT degree, the journey to finding true happiness and fulfillment wasn’t as straightforward as it seemed.",
      "From a young age, he was known for his dedication and determination. While excelling in academics, he also took on freelance projects during his college years to manage his expenses independently. It was this relentless drive that set him apart from his peers.",
      "After graduating with flying colors, his hard work paid off when he landed a coveted placement in Mahindra’s main office in Pune. For many, this would be the pinnacle of achievement. He was part of a dynamic team, successfully completing his first major project, earning accolades from his colleagues and seniors alike.",
      "But as the days turned into months, he realized something was missing. The 9-to-5 routine and life away from home left him feeling unfulfilled. 'It was a good job, and I learned a lot, but deep down, I felt like I was chasing someone else’s dream,' he recalls.",
      "In a bold move, he decided to leave the job. It wasn’t an easy decision—leaving the comfort and prestige of a well-paying corporate job required courage. But for him, the quest for inner peace and the desire to make a difference outweighed the fears of uncertainty.",
      "That’s when he joined us. Working from home allowed him to reconnect with his roots, focus on projects that truly inspired him, and explore creative solutions for real-world problems. His innovative ideas and unwavering commitment soon made him an indispensable part of the team.",
      "Today, he’s not just working; he’s thriving. With a well-settled life and the flexibility to balance personal and professional responsibilities, he has achieved milestones he once only dreamed of. A testament to his success? He recently bought his dream car, a symbol of how far he’s come on his journey."
    ],
    quote: "Success isn’t just about a high-paying job or societal approval. It’s about waking up every day with a sense of purpose and contentment. Don’t be afraid to redefine success on your own terms.",
    caption: "True success is finding peace in your work and joy in your journey."
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <BlogArticle {...article} />
    </div>
  );
};

export default BlogPage;