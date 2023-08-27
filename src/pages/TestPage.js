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
          <p>{q.question}</p>
          <ul>
            {q.options.map((option, index) => (
              <li
                key={index}
                className={option.correct ? "text-green-500" : ""}
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
