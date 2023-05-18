import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-3xl mx-auto my-12">
        <div className="">
          <h2 className="font-display text-4xl mb-10">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p className="font-myFont">A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
        </div>
    </div>
  );
};

export default Blogs;
