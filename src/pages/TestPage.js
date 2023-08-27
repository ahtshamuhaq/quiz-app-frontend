import React, { useEffect, useState } from "react";
import axios from "axios";

function TestPage() {
  const [questions, setQuestions] = useState([]);

  const handleGetQuestions = async () => {
    try {
      const response = await axios.get(
        "https://beautiful-seal-hoodie.cyclic.cloud/api/worksheets"
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="font-bold mb-4">Test Questions:</h2>
      <button
        onClick={handleGetQuestions}
        className="mb-4 bg-blue-500 text-white p-2 rounded"
      >
        Fetch Questions
      </button>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-4 p-4 border rounded">
          <p className="bg-[#595967] w-4/5 px-2.5 py-5 rounded-[1.125rem] mb-5 break-words sm:w-3/5 lg:w-1/5">
            {q.question}
          </p>
          <ul>
            {q.options.map((option, index) => (
              <li
                key={index}
                className={
                  option.correct
                    ? "text-green-6 00 bg-[#A1A2BA] p-4 mr-3 w-fit border-0 break-words mb-4 rounded-full"
                    : "bg-[#A1A2BA] p-4 mr-3 w-fit border-0 break-words mb-4 rounded-full text-black"
                }
              >
                {option.option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TestPage;
