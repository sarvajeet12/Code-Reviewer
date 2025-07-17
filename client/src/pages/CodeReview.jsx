import React, { useState } from "react";
import WriteCode from "../components/WriteCode";
import Review from "../components/Review";

const CodeReview = () => {
  const [reviewText, setReviewText] = useState(""); // share data
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:h-screen">
      <WriteCode setReviewText={setReviewText} setLoading={setLoading} />
      <Review reviewText={reviewText} loading={loading} />
    </div>
  );
};

export default CodeReview;
