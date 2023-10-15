import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  getCinemaLogo,
  getCinemaShowtimes,
  getCinemaSystem,
} from "../../../apis/cinemaAPI";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
//+++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++++++++
export default function Cinemas() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //===================
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
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {data.map((item, index) => {
          <Tab
            label={
              <img
                src={item.logo}
                alt=""
                height={50}
                width={50}
                onClick={() => handleChangeCinemaSystem(item.maHeThongRap)}
              />
            }
            {...a11yProps({ index })}
          />;
        })}
      </Tabs>
      {cinemaSystem.map((item) => {
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>;
      })}
    </Box>
  );
}
