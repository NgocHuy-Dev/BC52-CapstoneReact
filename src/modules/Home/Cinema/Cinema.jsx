import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import {
  getCinemaLogo,
  getCinemaShowtimes,
  getCinemaSystem,
} from "../../../apis/cinemaAPI";
import { Grid, Container, Tab, Tabs, Box, Paper } from "@mui/material";

import CinemaLogo from "./CinemaLogo/CinemaLogo";
import CinemaSystems from "./CinemaSystem.jsx/CinemaSystems";
import CinemaShowtimes from "./CinemaShowtimes";
import { CinemaPaper } from "./styles";

export default function Cinema() {
  // =========== tab
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // =====
  //=== LẤY MÃ HỆ THỐNG RẠP

  const [cinemaCode, setCinemaCode] = useState("BHDStar");
  const handleChangeCinemaSystem = (value) => {
    setCinemaCode(value);
  };
  // ====== gọi API lấy danh sách rạp theo mã hệ thống rạp
  const { data: cinemaSystem = [] } = useQuery({
    queryKey: ["cinemaCode", cinemaCode],
    queryFn: () => getCinemaSystem(cinemaCode),
    enabled: !!cinemaCode,
  });
  useEffect(() => {
    if (cinemaSystem.length > 0) {
      setCinemaId(cinemaSystem[0]?.maCumRap);
    }
  }, [cinemaSystem]);

  // lấy mã cụm rạp để render lịch chiếu theo mã cụm rạp
  const [cinemaId, setCinemaId] = useState("");
  const handleChangeCinema = (value) => {
    setCinemaId(value);
  };

  //  lấy lịch chiếu
  const { data: systemShowtimes } = useQuery({
    queryKey: ["cinemaCode", cinemaCode],
    queryFn: () => getCinemaShowtimes(cinemaCode),
    enabled: !!cinemaCode,
  });

  // console.log("SHOWTIMEs", systemShowtimes);
  // const systemShowtime =
  //   systemShowtimes?.map((cinemas) => {
  //     return cinemas.lstCumRap.filter((cinema) => {
  //       return cinema.maCumRap === cinemaId;
  //     });
  //   }) || [];

  // const listMovies = systemShowtime?.map((cinema) => {
  //   return cinema.map((listMovie) => {
  //     return listMovie.danhSachPhim.filter((movie) => {
  //       return movie.dangChieu === true;
  //     });
  //   });
  // });
  // ===========================================
  return (
    <Container maxWidth="md" id="cinema" sx={{ marginTop: 5 }}>
      <CinemaPaper>
        <Grid container rowSpacing={1}>
          {/* ==== LOGO ==== */}
          <Grid item xs={2}>
            <CinemaLogo handleChangeCinemaSystem={handleChangeCinemaSystem} />
          </Grid>
          {/* ==== LOGO ==== */}
          <Grid item xs={5}>
            {/* Render danh sách rạp - lượt phim */}
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <CinemaSystems
                cinemaSystem={cinemaSystem}
                handleChangeCinema={handleChangeCinema}
              />
            </Tabs>
          </Grid>
          <Grid item xs={5}>
            <CinemaShowtimes />
          </Grid>
        </Grid>
      </CinemaPaper>
    </Container>
  );
  //==================
}
