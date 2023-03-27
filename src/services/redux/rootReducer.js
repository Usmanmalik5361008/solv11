import { combineReducers } from "@reduxjs/toolkit";
import { user } from "./slices";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
