import { combineReducers } from "redux";
import guests from "./guests";
import events from "./events";

export default combineReducers({ guests, events });
