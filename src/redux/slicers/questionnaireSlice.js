import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      text: "What is your favorite color?",
      options: ["Blue", "Green", "Red"],
      selected: null,
    },
    {
      text: "What is your favorite animal?",
      options: ["Dog", "Cat", "Bird"],
      selected: null,
    },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionIndex, answerIndex } = action.payload;
      state.questions[questionIndex].selected = answerIndex;
    },
    submitAnswers: (state) => {
      const result = state.questions.reduce((acc, question, index) => {
        acc[`Question ${index + 1}`] = question.options[question.selected];
        return acc;
      }, {});
      state.result = result;
    },
  },
});

export const { selectAnswer, submitAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
