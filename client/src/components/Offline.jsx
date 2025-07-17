import React from "react";

const Offline = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-4 h-screen">
      <h1 className="text-5xl sm:text-7xl text-purple-600 font-medium">Whoops!</h1>
      <p className="text-white text-base sm:text-xl text-center">
        No Internet connection. Please check your network settings and try
        again.
      </p>
    </div>
  );
};

export default Offline;
