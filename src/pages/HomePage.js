import React, { useEffect, useState } from "react";
import FormComponent from "../components/FormComponent";
import PreviewComponent from "../components/PreviewComponent";
import SubmittedQuestionComponent from "../components/SubmittedQuestionComponent";
import axios from "axios";
function HomePage() {
  const [questionData, setQuestionData] = useState({
    question: "",
    options: [],
    correctOption: -1,
  });
  const [questionsArray, setQuestionsArray] = useState([]);

  const handleSubmitQuestion = (questionData) => {
    setQuestionsArray([...questionsArray, questionData]);
  };

  const handleUpdateQuestion = (index, updatedData) => {
    const updatedQuestions = [...questionsArray];
    updatedQuestions[index] = updatedData;
    setQuestionsArray(updatedQuestions);
  };
  const handleSave = async () => {
    try {
      for (let question of questionsArray) {
        const response = await axios.post(
          "https://beautiful-seal-hoodie.cyclic.cloud/api/worksheets",
          question
        );
        console.log(
          "Saved successfully for question:",
          question.question,
          "Response:",
          response.data
        );
        if (response.status === 201) {
          setQuestionsArray([]);
        }
      }
    } catch (error) {
      console.error("Error saving questions:", error);
    }
  };
  useEffect(() => {
    const clearDB = async () => {
      try {
        await axios.delete("https://localhost:5000/api/worksheets/clear");
        console.log("Database cleared");
      } catch (error) {
        console.error("Error clearing database:", error);
      }
    };

    clearDB();
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <FormComponent
            onFormChange={setQuestionData}
            onSubmit={handleSubmitQuestion}
          />
        </div>
        <div className="w-1/2 p-4">
          <PreviewComponent
            currentQuestion={questionData}
            questions={questionsArray}
          />
        </div>
      </div>
      <div className="mt-8 ml-3">
        <h2 className="font-bold mb-4">Submitted Questions:</h2>
        {questionsArray.map((q, qIndex) => (
          <SubmittedQuestionComponent
            key={qIndex}
            data={q}
            onUpdate={(updatedData) =>
              handleUpdateQuestion(qIndex, updatedData)
            }
          />
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-4 ml-3 bg-blue-500 text-white p-2 rounded"
      >
        Save Questions
      </button>
    </div>
  );
}

export default HomePage;
