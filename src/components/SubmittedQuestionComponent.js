import React, { useState } from "react";

function SubmittedQuestionComponent({ data, onUpdate }) {
  const [question, setQuestion] = useState(data.question);
  const [options, setOptions] = useState(data.options);

  const handleOptionEdit = (index, updatedOption) => {
    const updatedOptions = [...options];
    updatedOptions[index] = updatedOption;
    setOptions(updatedOptions);
    onUpdate({ question, options: updatedOptions });
  };

  const handleOptionRemove = (index) => {
    const updatedOptions = options.filter((_, idx) => idx !== index);
    setOptions(updatedOptions);
    onUpdate({ question, options: updatedOptions });
  };

  const handleCorrectOptionChange = (index) => {
    const updatedOptions = [...options];
    updatedOptions.forEach((opt, idx) => {
      opt.correct = idx === index;
    });
    setOptions(updatedOptions);
    onUpdate({ question, options: updatedOptions });
  };

  return (
    <div className="mb-4 p-4 pl-3 border rounded">
      <p className="bg-[#595967] w-4/5 px-2.5 py-5 rounded-[1.125rem] mb-5 break-words sm:w-3/5 lg:w-1/5">
        {question}
      </p>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={option.option}
              onChange={(e) =>
                handleOptionEdit(index, { ...option, option: e.target.value })
              }
              className=" bg-[#A1A2BA] p-4 mr-3 w-fit border-0 break-words mb-4 rounded-full text-black "
            />
            <input
              type="checkbox"
              checked={option.correct}
              onChange={() => handleCorrectOptionChange(index)}
              className="ml-2"
            />
            <button
              onClick={() => handleOptionRemove(index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubmittedQuestionComponent;
