import { createSlice } from "@reduxjs/toolkit";

const movieTicketSlice = createSlice({
  name: "movieTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.giaVe;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.giaVe;
      return { ...state, selectedSeats, totalPrice };
    },

    removeSeat: (state, action) => {
      const seatNumber = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seatNumber
      );
      const totalPrice = selectedSeats.reduce(
        (result, item) => result + item.giaVe,
        0
      );

      return { ...state, selectedSeats, totalPrice };
    },
    resetSeat: () => {
      const selectedSeats = [];
      const totalPrice = 0;
      return { selectedSeats, totalPrice };
    },
  },
});

export const { selectSeat, removeSeat, resetSeat } = movieTicketSlice.actions;
export default movieTicketSlice.reducer;
