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
  Modal,
  Box,
  Pagination,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { grey, red } from "@mui/material/colors";
import "./styles.css";
import ReactPlayer from "react-player";
import Loading from "../../../components/Loading";

export default function Showing() {
  //==== Modal ===
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //==== Modal ===

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data = [], isLoading } = useQuery({
    queryKey: ["page", page],
    queryFn: () => getPagesItem(page),
  });
  // console.log("data", data);
  const pageItem = data?.items || [];
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" id="showing">
      <Grid container spacing={3}>
        {pageItem.map((movie) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={movie.maPhim}>
              <Card className="card" sx={{ maxWidth: 345 }}>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="modal">
                    <ReactPlayer url={movie.trailer} controls={true} />
                  </Box>
                </Modal>
                <div className="card-img">
                  <CardMedia
                    sx={{ height: 314 }}
                    image={movie.hinhAnh}
                    title={movie.tenPhim}
                  />
                  <div className="card-overlay">
                    <PlayCircleOutlineIcon
                      onClick={handleOpen}
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
                    {movie.moTa.slice(0, 70) + "..."}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "30px",
        }}
      >
        <Pagination
          count={data.totalPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
}
