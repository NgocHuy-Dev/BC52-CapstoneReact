import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCinemaLogo } from "../../../../apis/cinemaAPI";
import { Grid, Container, Tab, Tabs, Box, Paper } from "@mui/material";
export default function CinemaLogo({ handleChangeCinemaSystem }) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["cinema"],
    queryFn: getCinemaLogo,
  });

  return (
    <Box>
      {data.map((item) => {
        return (
          <Tabs
            key={item.maHeThongRap}
            wrapped={true}
            orientation="vertical"
            variant="scrollable"
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              label={
                <img
                  src={item.logo}
                  alt="logo"
                  height={50}
                  width={50}
                  onClick={() => handleChangeCinemaSystem(item.maHeThongRap)}
                />
              }
            />
          </Tabs>
        );
      })}
    </Box>
  );
}
