import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../posts';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-bold text-red-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white rounded-lg mt-10">
      {/* Notion-like Cover */}
      <div className="w-full h-64 mb-6">
        <img
          src="https://i.pinimg.com/736x/97/f1/b7/97f1b7aadb7cb7df20993d5d1e588946.jpg"
          alt={post.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{post.title}</h1>
        {/* Metadata */}
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        {/* Blog Content */}
        <div className="text-lg text-gray-700 leading-relaxed">
          <p>{post.content}</p>
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
