import {
  REMOVE_SEAT,
  RESET_SEAT,
  SELECT_SEAT,
} from "../constants/movieTicketConstants";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const movieTicketReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case REMOVE_SEAT: {
      const seatNumber = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seatNumber
      );
      const totalPrice = selectedSeats.reduce(
        (result, item) => result + item.gia,
        0
      );

      return { ...state, selectedSeats, totalPrice };
    }
    case RESET_SEAT: {
      const selectedSeats = [];
      const totalPrice = 0;
      return { ...state, selectedSeats, totalPrice };
    }

    default:
      return state;
  }
};

export default movieTicketReducer;
