import React from "react";
import { DetailViewStyle } from "./index.style";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";
import { InputComponent } from "../../common/Input";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { CardSvg, ExportSvg, EyeSvg, PngSvg, UserSvg } from "../../../assets/icon";
import QRCode from "react-qr-code";

export const DetailView: React.FC = () => {

  const reqInformList = ['Proof of human verification', 'Email address', 'Proof of being an Italian citizien'];
  const interactionList = [
    {name: "FedeG", result: "Pending", color: "orange"},
    {name: "Chiaras", result: "Verified", color: "green"},
    {name: "JohnV", result: "Faild", color: "red"},
  ];

  return (
    <DetailViewStyle>
      <Typography className="title font-size-48px">Verification flow</Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography marginBottom="0.5rem" className="font-family-nunito font-size-18px font-regular">Verification flow name</Typography>
          <InputComponent name="verificationName" readOnly value={"Driving Licence verification"}></InputComponent>
          <Typography marginBottom="0.5rem" marginTop="3rem" className="font-family-nunito font-size-18px font-regular">Request information to verify</Typography>
          {reqInformList.map((item: string) => (
            <Box marginBottom={"0.5rem"}>
              <InputComponent readOnly value={item}></InputComponent>
            </Box>
          ))}
          <Typography marginBottom="2rem" marginTop="2rem" className="font-family-nunito font-size-18px font-regular">Interactions monitoring</Typography>
          <TableContainer component={Box} className ="flow-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className="table-head font-size-12px text-align-left">NAME</TableCell>
                  <TableCell align="left" className="table-head font-size-12px text-align-center">RESULT</TableCell>
                  <TableCell align="left" className="table-head font-size-12px text-align-center">DATE</TableCell>
                  <TableCell align="left" className="table-head font-size-12px text-align-center">DETAILS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {interactionList.map(item => (
                  <TableRow>
                    <TableCell className="text-align-left color-black">{item.name}</TableCell>
                    <TableCell className={`text-align-center color-${item.color}`} >{item.result}</TableCell>
                    <TableCell className="text-align-center color-black">{<Moment format="DD/MM/YYYY">{new Date()}</Moment>}</TableCell>
                    <TableCell className="text-align-center color-black">{<Link to = "/"><img src={EyeSvg} /></Link>}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Box className="right-container">
            <Typography marginBottom="1.5rem" className="font-family-nunito font-size-24px font-regular text-align-center">QR Access Onboard</Typography>
            <Box className="qr-code-wrapper">
              <Box className="qr-code-container">
                <QRCode size={200} value="!@#$%^&*()" />
              </Box>
            </Box>
            <Box display="flex" position={"relative"}>
              <Box className="btn pdf-btn">
                <img src = {CardSvg} />
                <Typography marginLeft="0.5rem"className="font-family-nunito font-size-15px">PDF</Typography>
              </Box>
              <Box className="btn pdf-btn" position={"absolute"} right={0}>
                <img src = {PngSvg} />
                <Typography marginLeft="0.5rem"className="font-family-nunito font-size-15px">PNG</Typography>
              </Box>
            </Box>
            <Box className="btn export-btn">
              <img src = {ExportSvg} />
              <Typography marginLeft="0.5rem"className="font-family-nunito font-size-15px">Export interactions</Typography>
            </Box>
            <Box className="access-btn">
              <img src = {UserSvg} />
              <Typography marginLeft="0.2rem"className="font-family-nunito font-size-24px font-regular">43</Typography>
              <Typography marginLeft="1rem"className="font-family-nunito font-size-15px">Access counter</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </DetailViewStyle>
  )
}