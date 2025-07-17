import React from "react";

const LoadingEffect = () => {
  return (
    <div className="flex gap-x-8 justify-center items-center h-screen animate-pulse bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <span className="border-1 bg-slate-900 rounded-full h-5 w-5"></span>
      <span className="border-1 bg-slate-900 rounded-full h-5 w-5"></span>
      <span className="border-1 bg-slate-900 rounded-full h-5 w-5"></span>
    </div>
  );
};

export default LoadingEffect;
