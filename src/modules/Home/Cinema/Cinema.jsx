import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  getCinemaLogo,
  getCinemaShowtimes,
  getCinemaSystem,
} from "../../../apis/cinemaAPI";
import { Grid, Container, Tab, Tabs, Box, Paper } from "@mui/material";
import CinemaShowtimes from "./CinemaShowtimes";

export default function Cinema() {
  // =========== tab
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // =====
  //=============== logo

  const { data = [], isLoading } = useQuery({
    queryKey: ["cinema"],
    queryFn: getCinemaLogo,
  });

  // =============
  // ===== cụm rạp

  const [cinemaCode, setCinemaCode] = useState("BHDStar");
  const handleChangeCinemaSystem = (value) => {
    // alert(value);
    setCinemaCode(value);
    console.log("setcinema:", cinemaCode);
  };

  // lấy danh sách cụm rạp theo mã hệ thống rạp
  const { data: cinemaSystem = [] } = useQuery({
    queryKey: ["cinemaCode", cinemaCode],
    queryFn: () => getCinemaSystem(cinemaCode),
  });
  // console.log("cinemaSystemmmmmm:", cinemaSystem);

  //================ lịch chiếu của cụm rạp
  const [cinemaId, setCinemaId] = useState("");
  const handleChangeCinemaId = (value) => {
    setCinemaId(value);
  };
  // const { data: cinemaShowtimes } = useQuery({
  //   queryKey: ["cinemaCode", cinemaId],
  //   queryFn: () => getCinemaShowtimes(cinemaId),
  // });
  // console.log("cinemaId", cinemaShowtimes);
  //=======

  // ===========================================
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={1}>
        <Grid item xs={2}>
          {/* render icon rap */}
          {data.map((item) => {
            return (
              <Box key={item.maHeThongRap}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  <Tab
                    label={
                      <img
                        src={item.logo}
                        alt=""
                        height={50}
                        width={50}
                        onClick={() =>
                          handleChangeCinemaSystem(item.maHeThongRap)
                        }
                      />
                    }
                  />
                </Tabs>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={6}>
          {/* Render danh sách rạp */}
          {cinemaSystem.map((item) => {
            return (
              <div key={item.maHeThongRap}>
                <Box onClick={handleChangeCinemaId(item.maHeThongRap)}>
                  <h3>{item.tenCumRap}</h3>
                  <a>{item.diaChi}</a>
                </Box>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <CinemaShowtimes cinemaId={cinemaId} />
        </Grid>
      </Grid>
    </Container>
  );
  //==================
}
