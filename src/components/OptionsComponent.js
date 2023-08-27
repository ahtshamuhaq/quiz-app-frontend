import React, { useState } from "react";

function OptionsComponent({ options, onChange }) {
  const [currentOption, setCurrentOption] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleOptionAdd = () => {
    if (currentOption) {
      onChange([
        ...options,
        { option: currentOption, correct: correctOption === currentOption },
      ]);
      setCurrentOption("");
    }
  };

  const handleOptionEdit = (index, newOption) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], option: newOption };
    onChange(newOptions);
  };

  const handleOptionRemove = (index) => {
    const newOptions = options.filter((_, idx) => idx !== index);
    onChange(newOptions);
  };

  return (
    <div>
      {options.map((opt, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={opt.option}
            onChange={(e) => handleOptionEdit(index, e.target.value)}
            className="p-2 border rounded flex-grow"
          />
          <button
            onClick={() => handleOptionRemove(index)}
            className="ml-2 text-red-500"
          >
            Remove
          </button>
          <input
            type="radio"
            checked={correctOption === opt.option}
            onChange={() => setCorrectOption(opt.option)}
            className="ml-2"
          />
        </div>
      ))}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Add an option"
          value={currentOption}
          onChange={(e) => setCurrentOption(e.target.value)}
          className="p-2 border rounded flex-grow"
        />
        <button
          onClick={handleOptionAdd}
          className="ml-2 bg-blue-500 text-white rounded px-4 py-1"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default OptionsComponent;
