import { combineReducers } from "@reduxjs/toolkit";
import * as slices from "./slices";

const rootReducer = combineReducers({
  ...slices,
});

export default rootReducer;
