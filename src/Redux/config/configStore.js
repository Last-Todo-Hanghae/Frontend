import { configureStore } from "@reduxjs/toolkit";

import todoLogin from "../modules/todoSlice";

const store = configureStore({
  reducer: { todo: todoLogin },
});

export default store;
