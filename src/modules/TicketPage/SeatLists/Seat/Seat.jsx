import React from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../../../../redux/slices/movieTicketSlice";
import { Box, Button } from "@mui/material";

export default function Seat({ seat, isSelected }) {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  //=  trạng thái ghế
  let status = {
    fontSize: "1rem",
    minWidth: "45px",
    margin: "5px 4px",
    width: "20px",
    height: "35px",
    "&:hover": {
      backgroundColor: "#f30808",
      opacity: [0.9, 0.8, 0.7],
    },
  };
  if (isSelected) {
    status = Object.assign({}, status, { backgroundColor: "#008000" });
  } else if (seat.loaiGhe === "Vip") {
    status = Object.assign({}, status, { backgroundColor: "#ffa600" });
  } else if (seat.daDat === true) {
    status = Object.assign({}, status, "disabled");
  }

  // ================
  return (
    <Button
      key={seat.maGhe}
      onClick={handleSelect}
      disabled={seat.daDat}
      variant="contained"
      sx={status}
    >
      {seat.tenGhe}
    </Button>
  );
}
