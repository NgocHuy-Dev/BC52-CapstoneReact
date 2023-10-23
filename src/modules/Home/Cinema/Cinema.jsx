import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getCinemaLogo,
  getCinemaSystem,
  getCinemaShowtimes,
} from "../../../apis/cinemaAPI";
import { CusTabPanel, a11yProps } from "../../../CustomTabPanel";
import dayjs from "dayjs";
import style from "./Cinema.module.scss";
import { Avatar, Container, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cinema() {
  const navigate = useNavigate();
  const [cinemasId, setCinemasId] = useState([]);
  const [cinemaId, setCinemaId] = useState([]);

  const { data = [] } = useQuery({
    queryKey: ["cinemaSystems"],
    queryFn: getCinemaLogo,
  });

  const { data: cinemaSystem = [] } = useQuery({
    queryKey: ["cinemaSystem", cinemasId],
    queryFn: () => getCinemaSystem(cinemasId),
    enabled: !!cinemasId,
  });

  const { data: cinemaShowtimes } = useQuery({
    queryKey: ["cinemaShowtimes", cinemasId],
    queryFn: () => getCinemaShowtimes(cinemasId),
    enabled: !!cinemasId,
  });

  const cinemaShowtime =
    cinemaShowtimes?.map((cinemas) => {
      return cinemas.lstCumRap.filter((cinema) => {
        return cinema.maCumRap === cinemaId;
      });
    }) || [];

  useEffect(() => {
    if (data.length > 0) {
      setCinemasId(data[0].maHeThongRap);
    }
  }, [data]);

  useEffect(() => {
    if (cinemaSystem.length > 0) {
      setCinemaId(cinemaSystem[0]?.maCumRap);
    }
  }, [cinemaSystem]);

  const listMovies = cinemaShowtime?.map((cinema) => {
    return cinema.map((listMovie) => {
      return listMovie.danhSachPhim.filter((movie) => {
        return movie.dangChieu === true;
      });
    });
  });

  const handleSeclectCinemas = (id) => {
    setCinemasId(id);
  };
  const handleSeclectCinema = (id) => {
    setCinemaId(id);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState(0);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      <Container className={style.container} id="1"></Container>
      <Container className={style.cinemaContainer} maxWidth="md">
        <Tabs
          orientation="vertical"
          textColor="inherit"
          className={style.tabs}
          onChange={handleChange}
          value={value}
        >
          {data.map((cinema, index) => {
            return (
              <Tab
                type="button"
                {...a11yProps({ index })}
                onClick={() => {
                  handleSeclectCinemas(cinema.maHeThongRap);
                }}
                label={
                  <Avatar
                    variant="circle"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <img src={cinema.logo} alt="" className={style.logo} />
                  </Avatar>
                }
              />
            );
          })}
        </Tabs>
        {data.map((cinema, index) => {
          return (
            <CusTabPanel
              index={index}
              value={value}
              className={style.panel}
              onClick={() => {
                handleSeclectCinemas(cinema.maHeThongRap);
              }}
            ></CusTabPanel>
          );
        })}
        <Tabs
          orientation="vertical"
          className={style.tabs2}
          textColor="inherit"
          onChange={handleChange2}
          value={value2}
        >
          {cinemaSystem.map((cinema) => {
            return (
              <Tab
                label={
                  <div
                    style={{ width: "100%" }}
                    type="button"
                    className={style.tab}
                    onClick={() => {
                      handleSeclectCinema(cinema.maCumRap);
                    }}
                  >
                    <Typography component="h4" className={style.cinemaName}>
                      {cinema.tenCumRap}
                    </Typography>
                    <Typography component="h6" className={style.address}>
                      {cinema.diaChi}
                    </Typography>
                    <a className={style.detail}>[chi tiết]</a>
                  </div>
                }
              />
            );
          })}
        </Tabs>
        <div className={style.showtimes}>
          {listMovies?.map((movies) => {
            return movies.map((movie) => {
              return movie.map((item) => {
                return (
                  <div className={style.showtime}>
                    <div style={{ width: "120px" }}>
                      <img
                        src={item.hinhAnh}
                        alt=""
                        width="100%"
                        height="100px"
                      />
                    </div>
                    <div className={style.showtimeList}>
                      <Typography component="h2" className={style.movieName}>
                        <span className={style.c18}>C18</span>
                        {item.tenPhim}
                      </Typography>
                      <div className={style.cinameButton}>
                        {item.lstLichChieuTheoPhim?.map((showtime) => {
                          return (
                            <a
                              className={style.cinemaTime}
                              onClick={() =>
                                navigate(`/tickets/${showtime.maLichChieu}`)
                              }
                            >
                              <Typography className={style.day}>
                                {dayjs(showtime.ngayChieuGioChieu).format(
                                  "DD-MM-YYYY"
                                )}
                              </Typography>
                              <Typography> - </Typography>
                              <Typography
                                component="h3"
                                sx={{ color: "#fa5238" }}
                              >
                                {dayjs(showtime.ngayChieuGioChieu).format(
                                  "HH:mm"
                                )}{" "}
                              </Typography>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              });
            });
          })}
        </div>
      </Container>
    </div>
  );
}
