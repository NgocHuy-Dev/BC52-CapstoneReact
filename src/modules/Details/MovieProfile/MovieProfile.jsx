import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Grid, Paper } from "@mui/material";
import { getMovieProfile } from "../../../apis/cinemaAPI";

export default function MovieProfile({ movieId }) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["movieProfile", movieId],
    queryFn: () => getMovieProfile(movieId),
  });

  console.log("profile:", data);

  return (
    <Container maxWidth="lg">
      <h1>heheeh</h1>
      <Grid container>
        {/* {data?.map((item) => (
          <div key={item.maPhim}>
            <h1>{item.moTa}</h1>
          </div>
        ))} */}
      </Grid>
    </Container>
  );
}
