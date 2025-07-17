import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import GetStartedBtn from "../components/GetStartedBtn";
import Type from "../components/Type";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col justify-between bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className=" text-white p-4 flex items-center justify-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-6xl font-medium">
              Code Review With AI
            </h1>
            <Type />
            <GetStartedBtn />
          </div>
        </div>
        <div className=" text-white p-4 rounded w-full h-[500px]">
          <Spline
            scene="https://prod.spline.design/cosMu3TbQMeICjiM/scene.splinecode"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div>
        <Feature />
      </div>
    </div>
  );
};

export default Home;
