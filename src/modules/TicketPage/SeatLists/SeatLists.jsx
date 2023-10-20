import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
import Seat from "./Seat/Seat";

export default function SeatLists({ data }) {
  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });

  console.log("selectedSeats", selectedSeats);
  return (
    <Box sx={{ margin: "15px 70px" }}>
      {data?.map((seat) => {
        const isSelected = selectedSeats.find(
          (item) => item.maGhe === seat.maGhe
        );
        return (
          <Box key={seat.maGhe} sx={{ display: "contents" }}>
            <Seat seat={seat} isSelected={!!isSelected} />
          </Box>
        );
      })}
    </Box>
  );
}
