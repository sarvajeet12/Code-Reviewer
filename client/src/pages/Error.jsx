import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-4 h-screen">
      <h1 className="text-7xl text-purple-600 font-medium">Oops!</h1>

      <h2 className="text-white text-xl">404 - Page Not Found</h2>
      <p className="text-gray-400 max-w-xl text-center">
        The page you are looking for might have been removed had its name
        changed or is temporally unavailable.
      </p>
      <Link to={"/"}>
        <button className="bg-purple-600 py-2 px-4 font-medium text-sm text-white rounded-2xl cursor-pointer">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default Error;
