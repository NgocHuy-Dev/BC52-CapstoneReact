import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getMovieShowtimes } from "../../../apis/cinemaAPI";
import { Container, Grid, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Showtimes({ movieId }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [cinemas, setCinemas] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["movieShowtimes", movieId],
    queryFn: () => getMovieShowtimes(movieId),
    enabled: !!movieId,
  });

  // console.log("data:", data);
  const cinemaSystems = data?.heThongRapChieu || [];

  const handleGetCinemaSystem = (cinemaSystemId) => {
    const found = cinemaSystems.find(
      (item) => item.maHeThongRap === cinemaSystemId
    );

    setCinemas(found.cumRapChieu);
  };

  useEffect(() => {
    if (cinemaSystems.length > 0) {
      setCinemas(cinemaSystems[0].cumRapChieu);
    }
  }, [cinemaSystems]);

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={1}>
        <Grid item xs={2}>
          {cinemaSystems.map((cinemaSystem) => {
            return (
              <div key={cinemaSystem.maHeThongRap}>
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
                        src={cinemaSystem.logo}
                        width={50}
                        height={50}
                        onClick={() =>
                          handleGetCinemaSystem(cinemaSystem.maHeThongRap)
                        }
                      />
                    }
                  />
                </Tabs>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={10}>
          {/* Render danh sách rạp */}
          {cinemas.map((cinema) => {
            return (
              <div key={cinema.maCumRap}>
                <h3>{cinema.tenCumRap}</h3>
                {/* Render lịch chiếu */}
                {cinema.lichChieuPhim.map((showtime) => {
                  const time = dayjs(showtime.ngayChieuGioChieu).format(
                    "DD-MM-YYYY ~ HH:mm"
                  );

                  return (
                    <button
                      onClick={() =>
                        navigate(`/tickets/${showtime.maLichChieu}`)
                      }
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
