import { combineReducers } from "redux";

import emotion from "./emotion";
import movement from "./movement";

// all the reducers that do the work
// reducers deal with the state
export default combineReducers({
  emotion,
  movement
});
