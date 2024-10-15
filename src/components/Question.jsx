import { useSelector, useDispatch } from "react-redux";
import { selectAnswer } from "../redux/slicers/questionnaireSlice";

const Question = ({ questionIndex }) => {
  const dispatch = useDispatch();
  const { text, options, selected } = useSelector(
    (state) => state.questionnaire.questions[questionIndex]
  );

  return (
    <div className="question">
      <p>{text}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={`question-${questionIndex}`}
              value={index}
              checked={selected === index}
              onChange={() =>
                dispatch(selectAnswer({ questionIndex, answerIndex: index }))
              }
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
