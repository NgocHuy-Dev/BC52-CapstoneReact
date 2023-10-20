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
