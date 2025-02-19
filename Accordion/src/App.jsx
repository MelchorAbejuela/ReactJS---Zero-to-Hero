// Import necessary modules and data
import questions from "./data";
import { useState } from "react";
import QuestionList from "./QuestionList";

const App = () => {
  // 1. Setup State Value: state to keep track of the index of the selected question
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  return (
    <div className="question-list">
      <h1 className="question-header">Questions</h1>
      {/* 2. Render Questions: iterate over the questions array and render a QuestionList component for each question */}
      {questions.map((question, index) => (
        <QuestionList
          key={question.id}
          {...question}
          // 3. Check if the selectedQuestionIndex is equal to the current index
          // If true, isSelected will be true, otherwise false
          isSelected={selectedQuestionIndex === index}
          // 4. Function to update the selectedQuestionIndex state
          // If the current index is clicked, set the index as selectedQuestionIndex
          // If the same index is clicked again, set selectedQuestionIndex to null (toggle off)
          toggleInfo={() =>
            setSelectedQuestionIndex(
              selectedQuestionIndex === index ? null : index
            )
          }
        />
      ))}
    </div>
  );
};

export default App;
