import React from "react";
import { ConnectViewStyle } from "./index.style";
import { Box } from "@mui/system";
import QRCode from "react-qr-code";
import { Typography } from "@mui/material";

export const ConnectView:React.FC = () => {
  return (
    <ConnectViewStyle>
      <Box>
        <Box className = 'title font-size-36px font-family-nunito'>Connect with Exoid mobile</Box>
        <Box className = 'qr-code-wrapper'>
          <Typography className="font-size-18px font-family-nunito">Scan this QR Code with</Typography>
          <Typography className="font-size-18px font-family-nunito">Exiod Mobile to connect</Typography>
          <Box className = 'qr-code-container'>
            <QRCode value = "asdfasdfasadsfasdfasdfasdfasdfasdf"></QRCode>
          </Box>
        </Box>
      </Box>
    </ConnectViewStyle>
  )
}