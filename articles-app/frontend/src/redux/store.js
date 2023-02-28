import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import commentsSlice from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    comments: commentsSlice,
  }
});

export default store;