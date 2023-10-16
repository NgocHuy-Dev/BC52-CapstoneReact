import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { getMovieProfile } from "../../../apis/cinemaAPI";

export default function MovieProfile({ movieId }) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["movieProfile", movieId],
    queryFn: () => getMovieProfile(movieId),
  });

  const movieProfile = [data];
  console.log(movieProfile);

  return (
    <Container maxWidth="lg">
      {movieProfile.map((item) => {
        return (
          <Grid container>
            <Grid item xs={4}>
              <img src={item.hinhAnh} alt="" width={250} height="100%" />
            </Grid>
            <Grid item xs={4}>
              <h4>{item.ngayKhoiChieu}</h4>
              <h3>{item.tenPhim}</h3>
              <h5>120 phút</h5>
              <button>Đặt vé</button>
            </Grid>
            <Grid item xs={4}>
              <Typography component="legend">Đánh giá</Typography>
              <Rating name="read-only" value={item.danhGia} readOnly />
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
}
