import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../../../apis/movieAPI";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import "./styles.css";
// import classes from "./styles.module.scss";
// import { makeStyles } from "@mui/styles";

export default function Banner() {
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  if (isLoading) {
    // return <Loading />f
    return <h1>Loading...</h1>;
  }

  // const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Carousel>
        {banners.map((item) => (
          <Paper className="carouselItem" key={item.maBanner}>
            <img src={item.hinhAnh} className="carouselImage" />
          </Paper>
        ))}
      </Carousel>
      {/* <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleBack}
          disabled={activeStep === 0}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleNext}
          disabled={activeStep === carouselItems.length - 1}
          className={classes.button}
        >
          Next
        </Button>
      </div> */}
    </>
  );
}
