import React from "react";

import { Tab, Box, Paper } from "@mui/material";
export default function CinemaSystems({ cinemaSystem, handleChangeCinema }) {
  // const { data: cinemaSystem } = useQuery({
  //   queryKey: ["cinemaId", cinemaCode],
  //   queryFn: () => getCinemaShowtimes(cinemaCode),
  // });

  console.log("cinemaSystem 111", cinemaSystem);
  return (
    <>
      {cinemaSystem.map((item) => {
        return (
          <Tab
            onClick={handleChangeCinema(item.maCumRap)}
            label={
              <Box>
                <h3>{item.tenCumRap}</h3>
                <a>{item.diaChi}</a>
              </Box>
            }
          />
        );
      })}
    </>
  );
}
