import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getPagesInf, getPagesItem } from "../../../apis/movieAPI";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { grey, red } from "@mui/material/colors";
import "./styles.css";
import { set } from "react-hook-form";

export default function Showing() {
  // const { numberOfPage } = useQuery({
  //   queryKey: ["page"],
  //   queryFn: getPagesInf,
  // });

  // tạo mảng danh sách trang
  // const pageList = Array.from(
  //   { length: Math.ceil(numberOfPage) },
  //   (_, index) => index + 1
  // );

  const [changePage, setChangePage] = useState(1);
  const handleNextPage = () => {
    setChangePage(changePage + 1);
  };

  const handleBackPage = () => {
    if (changePage >= 2) {
      setChangePage(changePage - 1);
    }
  };

  const { data = [], isLoading } = useQuery({
    queryKey: ["page", changePage],
    queryFn: () => getPagesItem(changePage),
  });

  // console.log("data", data);

  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data.map((movie) => {
          return (
            <Grid item xs={3} key={movie.maPhim}>
              <Card className="card" sx={{ maxWidth: 345 }}>
                <div className="card-img">
                  <CardMedia
                    sx={{ height: 314 }}
                    image={movie.hinhAnh}
                    title={movie.tenPhim}
                  />
                  <div className="card-overlay">
                    <PlayCircleOutlineIcon
                      className="play-trailer-icon"
                      sx={{ fontSize: 70, color: grey[50] }}
                    />
                    <Button
                      className="button"
                      variant="contained"
                      sx={{ color: grey[50], backgroundColor: red[600] }}
                      onClick={() => navigate(`/movies/${movie.maPhim}`)}
                    >
                      Mua vé
                    </Button>
                  </div>
                </div>

                <CardContent className="card-text">
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.tenPhim}
                  </Typography>
                  <Typography
                    maxHeight={70}
                    variant="body2"
                    color="text.secondary"
                  >
                    {movie.moTa}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div>
        <button onClick={handleBackPage}>Back</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </Container>
  );
}
