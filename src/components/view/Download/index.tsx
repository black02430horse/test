import React from "react";
import { Box, Typography } from "@mui/material";
import { DownloadViewStyle } from "./index.style";
import { ButtonComponent } from "../../common/Button";
import { Apple, Play, Next} from "../../../assets/icon";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

export const DownLoadView: React.FC = () => {
  return (
    <DownloadViewStyle>
      <Box className = "up-container">
        <Typography className = 'title font-size-36px' margin={"auto"}>Download Exoid App</Typography>
        <Box className = 'btn-group' margin = {"auto"}>
          < ButtonComponent className = 'btn'>
            <Box display={"flex"}>
                <img src = {Apple} className = "btn-item"/>
                <Box textAlign={"left"} className = "btn-item" >
                  <Typography className = 'font-size-12px font-family-nunito line-height-1'>Download on the</Typography>
                  <Typography className = 'font-size-24px font-family-nunito line-height-1'>App Store</Typography>
                </Box>
            </Box>
          </ButtonComponent>
          < ButtonComponent className = 'btn'>
            <Box display={"flex"}>
                <img src = {Play} className = "btn-item"/>
                <Box textAlign={"left"} className = "btn-item" >
                  <Typography className = 'font-size-12px font-family-nunito line-height-1'>GET IT ON</Typography>
                  <Typography className = 'font-size-24px font-family-nunito line-height-1'>Google Play</Typography>
                </Box>
            </Box>
          </ButtonComponent>
        </Box>
        <Box className = 'qr-code-wrapper'>
          <Typography className = 'font-family-nunito font-size-18px line-height-1'>Qr scan this QR code</Typography>
          <Typography className = 'font-family-nunito font-size-18px'>to download</Typography>
          <Box className = 'qr-code-container'>
            <QRCode value="asdfasdfasdfasdfasdfasdfasdfasdf" />
          </Box>
        </Box>
      </Box>
      <Box className = 'next-btn-group'>
        <Typography className = 'font-family-nunito font-size-18px align-items-center'>Once you've installed the app, click this button</Typography>
        <Link to = '/' className="text-decoration-none">
          <Box className = 'next-btn'>
            <Typography className="font-family-nunito font-size-18px" marginRight={"1rem"}>Next</Typography>
            <img src = { Next } />
          </Box>
        </Link>
      </Box>
    </DownloadViewStyle>
  )
} 