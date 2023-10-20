import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerFooter = styled(Container)`
  background-color: #212121;
`;
export const Infomation = styled(Typography)`
  margin: 20px 10px;
`;

export const Logo = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Social = styled(Box)`
  text-align: center;
`;
