import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import { useDispatch } from "react-redux";
import { submitAnswers } from "./redux/slicers/questionnaireSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {Array.from({ length: 2 }).map((_, index) => (
          <Question key={index} questionIndex={index} />
        ))}
        <button type="submit">Submit</button>
      </form>
      <Result />
    </div>
  );
};

export default App;
