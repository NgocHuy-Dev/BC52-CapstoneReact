import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useUserContext } from "../../contexts/UserContext/UserContext";
import { Avatar, Button, Grid, Paper } from "@mui/material";
import { red } from "@mui/material/colors";

export default function Header() {
  const { currentUser, handleSignout } = useUserContext();
  return (
    <Box bgcolor={red}>
      <Grid container>
        <Grid item xs={4}>
          <Avatar src="/public/icon.png" />
        </Grid>
        <Grid item xs={4}>
          <Typography align="center">
            <Button>Lịch chiếu</Button>
            <Button>Cụm rạp</Button>
            <Button>Tin Tức</Button>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography align="right">
            {currentUser && (
              <div>
                <p>{currentUser.hoTen}</p>
                <button onClick={handleSignout}>Đăng Xuất</button>
              </div>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
