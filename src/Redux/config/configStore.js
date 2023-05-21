import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import todoLogin from "../modules/todoSlice";

const reducers = combineReducers({
  todo: todoLogin
})

const persistConfig = {
  key:'root',
  storage,
  whitelist : ['todo']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
