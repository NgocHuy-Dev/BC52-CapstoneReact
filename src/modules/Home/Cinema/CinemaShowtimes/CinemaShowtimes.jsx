import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getCinemaSystem,
  getCinemaShowtimes,
} from "../../../../apis/cinemaAPI";
import { Grid, Container, Tab, Tabs, Box, Paper, Avatar } from "@mui/material";
export default function CinemaShowtimes({ listMovies }) {
  // const { data: cinemaShowtimes = [] } = useQuery({
  //   queryKey: ["cinemaId", cinemaId],
  //   queryFn: () => getCinemaShowtimes(cinemaId),
  //   enabled: !!cinemaId,
  // });

  return (
    <>
      {listMovies?.map((movies) => {
        return movies.map((movie) => {
          return movie.map((item) => {
            return (
              <Box>
                <Avatar src={item.hinhAnh} />
              </Box>
            );
          });
        });
      })}
    </>
  );
}
