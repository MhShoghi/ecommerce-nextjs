// Import packages
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Import reducers
import cart from "./cartSlice";

// Combine reducers
const reducers = combineReducers({
  cart,
});

// persist config
const config = { key: "root", storage };

const reducer = persistReducer(config, reducers);

// Configure store
const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
