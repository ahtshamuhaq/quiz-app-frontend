import React from "react";

function PreviewComponent({ currentQuestion, questions }) {
  return (
    <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-4 bg-blue-500 text-white p-3 rounded-lg">
        Preview
      </h2>

      <div className="bg-white p-5 rounded-lg shadow-inner">
        <p className="text-lg font-semibold mb-3">
          {" "}
          Question: {currentQuestion.question}
        </p>
        <h3 className="text-lg font-semibold mb-3">Options:</h3>
        <ul className="list-decimal pl-5">
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              className={`mb-2 pl-3 py-1 rounded-lg ${
                option.correct
                  ? "bg-green-100 text-green-600 border-l-4 border-green-500"
                  : "bg-gray-100 border-l-4 border-gray-300"
              }`}
            >
              {option.option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PreviewComponent;
