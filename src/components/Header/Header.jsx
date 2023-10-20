import React from "react";
import Typography from "@mui/material/Typography";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { Avatar, Box, Button, Grid, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";
import img from "../../assets/img/icon.png";
import avt from "../../assets/img/meme-khoc_33.webp";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import "./styles.css";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, handleSignout } = useUserContext();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Paper className="header" sx={{ backgroundColor: "#ffffffdd" }}>
      <Grid container>
        <Grid item xs={4}>
          <Button>
            <Avatar
              variant="square"
              sx={{ width: 50, height: 50, margin: 1 }}
              src={img}
              onClick={() => navigate(`/`)}
            />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography align="center" sx={{ margin: 2.5 }}>
            <Box>
              {" "}
              <Button onClick={() => handleScroll("showing")}>
                Lịch chiếu
              </Button>
              <Button onClick={() => handleScroll("cinema")}>Cụm rạp</Button>
              <Button onClick={() => navigate(`/`)}>Tin Tức</Button>
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography align="right" padding={1.5}>
            {currentUser && (
              <Box>
                <Button padding={1}>
                  <Avatar src={avt} />
                  {currentUser.hoTen}
                </Button>
                <Button onClick={handleSignout}>
                  <LogoutIcon />
                  Đăng Xuất
                </Button>
              </Box>
            )}
            {!currentUser && (
              <Box>
                <Button
                  sx={{ margin: 1 }}
                  onClick={() => navigate(`/sign-in`)}
                  variant="outlined"
                  startIcon={<LoginIcon />}
                >
                  Đăng nhập
                </Button>
                <Button
                  sx={{ margin: 1 }}
                  onClick={() => navigate(`/sign-up`)}
                  variant="outlined"
                  startIcon={<HowToRegIcon />}
                >
                  Đăng Ký
                </Button>
              </Box>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
