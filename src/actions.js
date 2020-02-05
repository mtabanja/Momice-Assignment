import request from "superagent";
import { URL } from "./constants.js";

export const GUESTS = "GUESTS";

const fetchGuests = payload => ({
  type: GUESTS,
  payload
});

export const loadGuests = id => dispatch => {
  request(`${URL}/event/${id}`)
    .then(response => {
      dispatch(fetchGuests(response.body));
    })
    .catch(console.error);
};

export const EVENTS = "EVENTS";

const fetchEvents = payload => ({
  type: EVENTS,
  payload
});

export const loadEvents = () => dispatch => {
  request(`${URL}/event`)
    .then(response => {
      dispatch(fetchEvents(response.body));
    })
    .catch(console.error);
};
