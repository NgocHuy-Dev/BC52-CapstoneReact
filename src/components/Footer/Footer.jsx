import React from "react";
import { Grid, Typography, Link, Container, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import img from "../../assets/img/icon.png";
import { Infomation, Logo, Social, ContainerFooter } from "./styles";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#EF5350", marginTop: "20px" }}>
      <Container maxWidth="lg" sx={{}}>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Logo>
              <img src={img} alt="img 1" width={90} height={90} />
            </Logo>
          </Grid>
          <Grid item xs={6}>
            <Infomation>
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION Địa chỉ: Z06 Đường số 13,
              Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam. Giấy
              chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi lần
              thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
              phố Hồ Chí Minh cấp. <br />
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            </Infomation>
          </Grid>
          <Grid item xs={3}>
            <Social>
              <h4 style={{ color: "black" }}>Social</h4>
              <Box>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </Box>
            </Social>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              Made with love &copy; {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href="https://yourwebsite.com">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link color="inherit" href="https://yourwebsite.com">
                Terms of Service
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
