import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../../apis/movieAPI";
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

export default function Showing() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data.map((movie) => {
          return (
            <Grid item xs={3}>
              <Card height="300" sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 314 }}
                  image={movie.hinhAnh}
                  title={movie.tenPhim}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.tenPhim}
                  </Typography>
                  <Typography
                    height={70}
                    variant="body2"
                    color="text.secondary"
                  >
                    {movie.moTa}
                  </Typography>
                </CardContent>
              </Card>
              <div className="CardOverlay">
                <PlayCircleOutlineIcon className="play-trailer-icon" />
                <Button>Mua vé</Button>
              </div>
            </Grid>
          );
        })}
      </Grid>
      {/* <div className="d-flex justify-content-center">
        {pages.map((page) => {
          return (
            <button key={page} onClick={() => {}}>
              {page}
            </button>
          );
        })}
      </div> */}
    </Container>
  );
}
