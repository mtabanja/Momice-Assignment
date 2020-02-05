import { GUESTS } from "../actions";

export default function(state = null, action = null) {
  switch (action.type) {
    case GUESTS:
      return action.payload.guests;
    default:
      return state;
  }
}
