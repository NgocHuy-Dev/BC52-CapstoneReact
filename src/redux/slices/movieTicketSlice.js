import { createSlice } from "@reduxjs/toolkit";

const movieTicketSlice = createSlice({
  name: "movieTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { giaVe, isSelected, ...seat } = action.payload;
      if (isSelected) {
        const seatNew = { ...seat, giaVe: giaVe };
        state.selectedSeats.push(seatNew);
        state.totalPrice = state.totalPrice + giaVe;
      } else {
        state.selectedSeats = state.selectedSeats.filter((item) => {
          return item.stt !== seat.stt;
        });
        state.totalPrice = state.totalPrice - giaVe;
      }
    },

    resetSeat: (state) => {
      const selectedSeats = [];
      const totalPrice = 0;
    },
  },
});

export const { selectSeat, resetSeat } = movieTicketSlice.actions;
export default movieTicketSlice.reducer;
