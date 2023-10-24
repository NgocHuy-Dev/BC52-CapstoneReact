import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTicket } from "../../../apis/ticketAPI";
import { resetSeat } from "../../../redux/slices/movieTicketSlice";
import Swal from "sweetalert2";

import { Typography, Paper } from "@mui/material";
import { TicketInfo, Text, ButtonBook } from "./styles";

export default function Tickets({ data }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [dataTicket, setDataTicket] = useState({});
  let { selectedSeats, totalPrice } = useSelector((state) => {
    return state.movieTicket;
  });
  const { mutate: handleBuy } = useMutation({
    mutationFn: () => addTicket(dataTicket),

    onSuccess: () => {
      Swal.fire(
        "Đặt vé thành công!",
        "Kiểm tra trong lịch sử đặt vé",
        "success"
      );
      dispatch(resetSeat());
      queryClient.invalidateQueries({ queryKey: ["seatItem"] });
    },
  });

  const handleSwal = () => {
    if (selectedSeats.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Bạn chưa chọn ghế",
        text: "Vui lòng chọn ghế!",
      });
      return;
    }
    setDataTicket({
      maLichChieu: data?.maLichChieu,
      danhSachVe: selectedSeats.map((seat) => {
        return {
          maGhe: seat.maGhe,
          giaVe: seat.giaVe,
        };
      }),
    });
    handleBuy();
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
        </div>
        <ButtonBook onClick={handleSwal}>Đặt vé</ButtonBook>
      </Paper>
    </>
  );
}
