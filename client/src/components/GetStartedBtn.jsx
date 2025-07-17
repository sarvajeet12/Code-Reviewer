import React from "react";
import { Link } from "react-router-dom";
const GetStartedBtn = () => {
  return (
    <>
      <Link to={"/code-review"}>
        <button className="bg-purple-600 py-2 px-4 font-medium text-sm text-white rounded-2xl cursor-pointer hover:bg-purple-800 hover:transition-all">
          Get Started &#8594;
        </button>
      </Link>
    </>
  );
};

export default GetStartedBtn;
