import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About MyBlog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>Welcome to My Blog!</p>

         

            <p>
              Your go-to web blogging application designed
              for writers and creators of all kinds. Whether you're a seasoned
              blogger or just starting out, MyBlog offers a user-friendly
              platform to share your stories, ideas, and experiences with the
              world. With customizable themes, intuitive editing tools, and
              seamless integration with social media, MyBlog makes it easy to
              create and manage your blog. Join our community of passionate
              writers and start your blogging journey today with MyBlog!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
