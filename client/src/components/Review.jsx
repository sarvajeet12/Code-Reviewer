import React from "react";
import Markdown from "react-markdown";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Review = ({ reviewText, loading }) => {
  return (
    <div className="w-full h-full sm:w-1/2 bg-bg-right p-4 text-white overflow-auto">
      {loading ? (
        <>
          <div className="text-center animate-pulse">
            <p className="text-lg font-semibold">Generating review...</p>
          </div>
        </>
      ) : reviewText !== "" ? (
        <>
          {" "}
          <Markdown>{reviewText}</Markdown>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <DotLottieReact
              src="https://lottie.host/0c9ca60c-bf5a-4d79-ac12-87243420589c/nMnPVExXcm.lottie"
              loop
              autoplay
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
