import React, { useState } from "react";
import OptionsComponent from "./OptionsComponent";

function FormComponent({ onFormChange, onSubmit }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
    onFormChange({
      question,
      options: newOptions,
    });
  };

  const handleQuestionSubmit = () => {
    onSubmit({
      question,
      options,
    });
    setQuestion("");
    setOptions([]);
    onFormChange({
      // <-- Clear the data passed to the preview
      question: "",
      options: [],
    });
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    onFormChange({
      question: e.target.value,
      options,
    });
  };

  return (
    <div className="p-4 border-r-2">
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Enter your question"
        value={question}
        onChange={handleQuestionChange}
      />
      <OptionsComponent options={options} onChange={handleOptionsChange} />
      <button
        onClick={handleQuestionSubmit}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Submit Question
      </button>
    </div>
  );
}

export default FormComponent;
