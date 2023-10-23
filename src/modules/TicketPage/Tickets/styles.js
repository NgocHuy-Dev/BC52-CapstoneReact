import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const TicketInfo = styled(Box)`
  width: 90%;
  height: 50px;
  padding: 0 10px;
`;

export const Text = styled(Typography)`
  display: flex;
  justify-content: space-between;
  padding: auto 0;
`;

export const ButtonBook = styled(Button)`
  background-color: #88be04;
  color: white;
  width: 100%;
  font-size: 24px;
  &:hover {
    background-color: green;
  }
`;

export const BoxTickets = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #ffffff;
  border: 2px solid #000;
  box-shadow: 24px;
`;

export const ModalDes = styled(Typography)`
  font-size: 35px;
  padding: 15px 20px;
`;
