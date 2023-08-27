import React from "react";

function PreviewComponent({ currentQuestion, questions }) {
  return (
    <div className="p-4 border border-gray-300">
      <h2 className="font-bold mb-4">Preview</h2>

      {/* Display Current Question */}
      <div>
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index} className={option.correct ? "text-green-500" : ""}>
              {option.option}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <hr className="my-4" />
    </div>
  );
}

export default PreviewComponent;
