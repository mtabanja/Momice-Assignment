import { EVENTS } from "../actions";

export default function(state = null, action = null) {
  switch (action.type) {
    case EVENTS:
      return action.payload;
    default:
      return state;
  }
}
