import React, { useState } from "react";
import { DetailViewStyle } from "./index.style";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";
import { InputComponent } from "../../common/Input";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { CardSvg, CloseSvg, ExportSvg, EyeSvg, PngSvg, UserSvg } from "../../../assets/icon";
import QRCode from "react-qr-code";
import { Modal } from "@mui/base";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#F5F2FD',
  borderRadius: '1.5rem',
  boxShadow: 24,
  fontFamily: 'Nunito',
  p: 4,

  '.modal-header': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: "2rem",

    '.header-title': {
      fontFamily: "Nunito",
      fontSize: '30px',
      fontWeight: 'bold',
    },

    '.close-btn': {
      minWidth: '10px',
      padding: 0,
      cursor: "pointer"
    },
  },

  '.modal-content': {
    marginTop: '2rem'
  },

  '.interaction-detail': {
    borderRadius: '1rem',
    backgroundColor: 'white',
    marginBottom: '0.5rem',
    padding: '0.5rem 1rem',

    '.interaction-item': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      borderBottom: '1px solid gray',

      '.interaction-content': {
        fontFamily: "Nunito",
        fontSize: "13px"
      }
    },

    '.interaction-item:last-child': {
      borderBottom: 'none'
    }
  }
};

export const DetailView: React.FC = () => {

  const reqInformList = ['Proof of human verification', 'Email address', 'Proof of being an Italian citizien'];
  const interactionList = [
    {name: "FedeG", result: "Pending", color: "orange"},
    {name: "Chiaras", result: "Verified", color: "green"},
    {name: "JohnV", result: "Faild", color: "red"},
  ];
  const interDetailList = [
    {first: "Name", second: "Mario Rossi"},
    {first: "Name", second: "Mario Rossi"},
    {first: "Name", second: "Mario Rossi"},
    {first: "Country", second: "Italy"},
    {first: "Address", second: "Exoid street 32"},

  ];

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  }

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
            <Box className="access-btn" onClick = {()=>setOpen(true)}>
              <img src = {UserSvg} />
              <Typography marginLeft="0.2rem"className="font-family-nunito font-size-24px font-regular">43</Typography>
              <Typography marginLeft="1rem"className="font-family-nunito font-size-15px">Access counter</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx = {style}>
          <Box className="modal-header">
            <Typography className = "header-title">Interaction details</Typography>
            <img className="close-btn" src = {CloseSvg} onClick={handleClose}/>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box className="interaction-detail">
                {interDetailList.map(item => (

                  <Box className="interaction-item">
                    <Typography className="interaction-content">{item.first}</Typography>
                    <Typography className="interaction-content">{item.second}</Typography>
                  </Box>
                ))}
              </Box>
              <Box className="interaction-detail">
                <Box className="interaction-item">
                  <Typography className="interaction-content">Issuing day</Typography>
                  <Typography className="interaction-content">12 May 2018</Typography>
                </Box>
                <Box className="interaction-item">
                  <Typography className="interaction-content">Expiration day</Typography>
                  <Typography className="interaction-content">12 May 2018</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="interaction-detail">
                <Box className="interaction-item">
                  <Typography className="interaction-content">Date</Typography>
                  <Typography className="interaction-content">20/10/2023</Typography>
                </Box>
                <Box className="interaction-item">
                  <Typography className="interaction-content">Connection ID</Typography>
                  <Typography className="interaction-content">34612swerrd</Typography>
                </Box>
              </Box>
              <Box className="interaction-detail">
                <Box className="interaction-item">
                  <Typography className="interaction-content">Result</Typography>
                  <Typography className="interaction-content">Verified</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </DetailViewStyle>
  )
}