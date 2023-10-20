import { REMOVE_SEAT, SELECT_SEAT } from "../constants/movieTicketConstants";

export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatNumber) => {
  return {
    type: REMOVE_SEAT,
    payload: seatNumber,
  };
};
