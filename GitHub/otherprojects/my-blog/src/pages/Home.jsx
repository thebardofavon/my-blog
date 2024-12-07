import React from 'react';
import { posts } from '../posts';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => {
  return (
    <div className="home px-6 py-10">
      <div className="bg-[#e0d2c3] h-[70px] w-[50%] mx-auto flex justify-center items-center rounded-lg shadow-md mb-10">
        <h1 className="text-center text-3xl font-bold text-black">
            {"computer science chronicles"}
        </h1>
      </div>
    <div className="flex justify-center">
      <div className="grid gap-14 sm:grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-preview bg-white border border-brown-300 rounded-lg shadow-lg hover:shadow-xl  hover:scale-105 transform transition-transform duration-300 overflow-hidden "
              style={{ height: '475px', width: '425px' }} 
            >
              <Link to={`/post/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover hover-brown"
                style={{ height: '275px' }}
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-brown-700 mb-4">
                  <Link to={`/post/${post.id}`} className="hover:text-brown-500">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.content.substring(0, 120)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-white bg-brown-500 hover:bg-brown-700 px-3 py-1 rounded transition-all"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
