import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  return (
    <div className="result">
      {result && (
        <>
          <h2>Your Answers:</h2>
          <ul>
            {Object.entries(result).map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Result;
