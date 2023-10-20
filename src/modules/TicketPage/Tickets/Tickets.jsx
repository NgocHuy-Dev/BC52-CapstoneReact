import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetSeat } from "../../../redux/slices/movieTicketSlice";

import { Typography, Box, Button, Modal, Paper } from "@mui/material";
import { TicketInfo, Text, ButtonBook } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Tickets({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });
  const dispatch = useDispatch();

  if (selectedSeats) {
  }
  const { totalPrice } = useSelector((state) => {
    return state.movieTicket;
  });

  console.log("ticket data:", data);
  const handleBook = () => {
    dispatch(resetSeat());

    handleOpen();
  };

  return (
    <>
      <Paper>
        <Typography sx={{ textAlign: "center", padding: "1" }}>
          <h4 style={{ color: "black" }}>
            {totalPrice.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </h4>
        </Typography>
        <hr />
        <TicketInfo>
          <Text>
            <h4 style={{ color: "black" }}>Tên Phim:</h4>
            <h5 style={{ color: "black" }}>{data.tenPhim}</h5>
          </Text>
        </TicketInfo>
        <hr />
        <TicketInfo>
          <Text>
            <h4 style={{ color: "black" }}>Cụm rạp:</h4>
            <h5 style={{ color: "black" }}>{data.tenCumRap}</h5>
          </Text>
        </TicketInfo>

        <hr />

        <TicketInfo>
          <Text>
            <h4 style={{ color: "black" }}>Địa chỉ:</h4>
            <h5 style={{ color: "black" }}>{data.diaChi}</h5>
          </Text>
        </TicketInfo>
        <hr />
        <TicketInfo>
          <Text>
            <h4 style={{ color: "black" }}>Rạp:</h4>
            <h5 style={{ color: "black" }}>{data.tenRap}</h5>
          </Text>
        </TicketInfo>

        <hr />
        <TicketInfo>
          <Text>
            <h4 style={{ color: "black" }}>Ngày chiếu giờ chiếu:</h4>
            <h5 style={{ color: "black" }}>
              {data.ngayChieu} - {data.gioChieu}
            </h5>
          </Text>
        </TicketInfo>

        <hr />
        <div>
          <TicketInfo>
            <Text>
              <h4 style={{ color: "black" }}>Ghế đã chọn:</h4>
              <h5 style={{ color: "black" }}>
                {selectedSeats.map((seat) => {
                  if (seat === selectedSeats[0]) {
                    return `Ghế ${seat.tenGhe}`;
                  }
                  return `, Ghế ${seat.tenGhe}`;
                })}
              </h5>
            </Text>
          </TicketInfo>
          {selectedSeats.map((item) => {})}
        </div>
        <ButtonBook onClick={handleBook}>Đặt vé</ButtonBook>
      </Paper>
      {/* // ===== Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Đặt vé thành công
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
