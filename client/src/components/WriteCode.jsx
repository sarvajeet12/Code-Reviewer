import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { FaMicrophone } from "react-icons/fa";
import { BsFillMicMuteFill } from "react-icons/bs";

const WriteCode = ({ setReviewText, setLoading }) => {
  // State
  const [code, setCode] = useState("// Write your code from here...");
  const [isListening, setIsListening] = useState(false);
  const [prevTranscript, setPrevTranscript] = useState("");

  // Speech Recognition
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // User Effect
  useEffect(() => {
    prism.highlightAll();
  });

  useEffect(() => {
    if (transcript !== prevTranscript && isListening) {
      const newLine = transcript.slice(prevTranscript.length).trim();
      if (newLine) {
        // setCode((prev) => `${prev}\n${newLine}`);
        setCode((prev) => `${prev} ${newLine}`);
        setPrevTranscript(transcript);
      }
    }
  }, [transcript]);

  useEffect(() => {
    console.log("Transcript:", transcript);
  }, [transcript]);

  // Handle Code Function
  const handleCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://code-reviewer-server-jyci.onrender.com/api/ai/review",
        {
          prompt: code,
        }
      );
      setReviewText(response.data.response);

      // console.log("code response : ", response.data.response);
    } catch (error) {
      console.log("Error occur while handle code", error);
    } finally {
      setLoading(false);
    }
  };

  // Toggle Listening Function
  const toggleListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Speech recognition not supported in your browser.");
      console.log("Browser does not support SpeechRecognition");
      return;
    }

    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
      console.log("Stopped Listening");
    } else {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          console.log("Mic permission granted");
          resetTranscript();
          SpeechRecognition.startListening({ continuous: true });
          setIsListening(true);
          console.log("Started Listening");
        })
        .catch((err) => {
          console.error("Mic access denied or error:", err);
          alert("Please allow microphone access.");
        });
    }
  };

  return (
    <div className="w-full  h-full sm:w-1/2 bg-bg-left px-4 py-4 pb-18 sm:pb-4 relative">
      <div className="h-full overflow-auto">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={10}
          className="min-h-[35vh] sm:min-h-[85vh] text-white"
          style={{
            fontFamily: `"fira code", "Fira Mono", monospace`,
            fontSize: 15,
            border: ".1px solid gray",
          }}
        />
      </div>
      {/* Lint & Review Button */}
      <button
        onClick={() => handleCode()}
        className="absolute bottom-5 right-10 bg-purple-600 py-2 px-4 font-medium text-sm text-white rounded-2xl cursor-pointer"
      >
        Lint & Review
      </button>

      {/* Toggle Speech Recognition Button */}
      <button
        onClick={toggleListening}
        className={`absolute bottom-5 left-10 py-2 px-4 font-medium text-sm text-white rounded-2xl cursor-pointer ${
          isListening ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {isListening ? (
          <BsFillMicMuteFill className="text-xl" />
        ) : (
          <FaMicrophone className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default WriteCode;
