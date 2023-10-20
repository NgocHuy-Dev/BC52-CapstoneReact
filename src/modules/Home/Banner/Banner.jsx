import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../../../apis/movieAPI";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { grey } from "@mui/material/colors";

import "./styles.css";
import ReactPlayer from "react-player";
// import classes from "./styles.module.scss";
// import { makeStyles } from "@mui/styles";

export default function Banner() {
  //==== Modal ===
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //==== Modal ===
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  return (
    <div className="banner">
      <Carousel interval={3000}>
        {banners.map((item) => (
          <>
            <Paper key={item.maBanner} className="carouselItem">
              <img src={item.hinhAnh} className="carouselImage" />
            </Paper>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="modal">
                <ReactPlayer
                  url="https://www.youtube.com/embed/_rUC3-pNLyc"
                  controls={true}
                />
              </Box>
            </Modal>
          </>
        ))}
      </Carousel>
      <div className="banner-overlay">
        <PlayCircleOutlineIcon
          onClick={handleOpen}
          className="play-trailer-icon"
          sx={{ fontSize: 100, color: grey[50] }}
        />
      </div>
    </div>
  );
}
