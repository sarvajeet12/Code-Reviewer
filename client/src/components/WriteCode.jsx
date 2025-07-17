import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";

const WriteCode = ({ setReviewText, setLoading }) => {
  const [code, setCode] = useState("// Write your code from here...");

  useEffect(() => {
    prism.highlightAll();
  });

  const handleCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://code-reviewer-server-jyci.onrender.com/api/ai/review", {
        prompt: code,
      });
      setReviewText(response.data.response);

      // console.log("code response : ", response.data.response);
    } catch (error) {
      console.log("Error occur while handle code", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  h-full sm:w-1/2 bg-bg-left p-4 relative">
      <div className="h-full overflow-auto">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={10}
          className="min-h-full text-white"
          style={{
            fontFamily: `"fira code", "Fira Mono", monospace`,
            fontSize: 15,
            border:".1px solid gray"
          }}
        />
      </div>
      <button
        onClick={() => handleCode()}
        className="absolute bottom-5 right-10 bg-purple-600 py-2 px-4 font-medium text-sm text-white rounded-2xl cursor-pointer"
      >
        Lint & Review
      </button>
    </div>
  );
};

export default WriteCode;
