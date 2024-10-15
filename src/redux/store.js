import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./slicers/questionnaireSlice";

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
