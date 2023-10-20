import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { getMovieProfile } from "../../../apis/cinemaAPI";
import dayjs from "dayjs";
import "./styles.css";
import { Profile } from "./styles";

export default function MovieProfile({ movieId }) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["movieProfile", movieId],
    queryFn: () => getMovieProfile(movieId),
  });

  const movieProfile = [data];
  console.log(movieProfile);

  return (
    <Container maxWidth="md">
      {movieProfile.map((item) => {
        return (
          <Profile container className="profile">
            <Profile item xs={12} sm={6} md={4}>
              <img src={item.hinhAnh} alt="" width={250} height="100%" />
            </Profile>
            <Profile item xs={12} sm={6} md={4} className="detail">
              <div>
                <h4>{dayjs(item.ngayKhoiChieu).format("DD-MM-YYYY")}</h4>
                <h2>{item.tenPhim}</h2>
                <h5>120 phút</h5>
                <button className="button-book">Đặt vé</button>
              </div>
            </Profile>
            <Profile item xs={12} sm={6} md={4} className="rating">
              <Typography component="legend" color={"lightgray"}>
                Đánh giá
              </Typography>
              <Rating
                color="red"
                name="read-only"
                value={item.danhGia}
                readOnly
              />
            </Profile>
          </Profile>
        );
      })}
    </Container>
  );
}
