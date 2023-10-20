import React from "react";
import { useParams } from "react-router-dom";
import SeatLists from "./SeatLists/SeatLists";
import Tickets from "./Tickets/Tickets";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getTicketRoms } from "../../apis/ticketAPI";
import Loading from "../../components/Loading";

export default function TicketPage() {
  const { showtimeId } = useParams();
  const { data = [], isLoading } = useQuery({
    queryKey: ["showtimeId", showtimeId],
    queryFn: () => getTicketRoms(showtimeId),
  });
  if (isLoading) return <Loading />;

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={8}>
        <SeatLists showtimeId={showtimeId} data={data?.danhSachGhe} />
      </Grid>
      <Grid item xs={4}>
        <Tickets showtimeId={showtimeId} data={data?.thongTinPhim} />
      </Grid>
    </Grid>
  );
}
