import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useUserContext } from "../../contexts/UserContext/UserContext";

export default function Header() {
  const { currentUser, handleSignout } = useUserContext();
  return (
    <div>
      {currentUser && (
        <div>
          <p>{currentUser.hoTen}</p>
          <button onClick={handleSignout}>Đăng xuất</button>
        </div>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <div></div>
        </AppBar>
      </Box>
    </div>
  );
}
