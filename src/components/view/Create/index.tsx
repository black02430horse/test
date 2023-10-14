import React from "react";
import { CreateViewStyle } from "./index.style";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { InputComponent } from "../../common/Input";
import { relative } from "path";
import QRCode from "react-qr-code";
import * as Yup from "yup";
import { requestList } from "../../../consts";


type AttributeListType = {
  name: string,
  type: string
}

const schema = Yup.object().shape({
  verificationName: Yup.string().required("verification name is required"),
});

export const CreateView: React.FC = () => {

  return (
    <CreateViewStyle>
      <Typography className="title font-size-48px">Verification flow</Typography>
      <Box className="flow-name-group">
        <Typography className="flow-name font-size-18px">Verification Flow name</Typography>
        <InputComponent name = "verification name" />
        <Grid container spacing={3} marginTop={"1.5rem"}  >
          <Grid item xs={8}>
            <Grid container alignItems={"center"}>
              <Grid item xs ={8}>
                <Box className="attribute-container" >
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography className="font-family-nunito font-size-18px title">Request information to verify</Typography>
                      <Box className="add-attribute-btn font-family-nunito">Add attribute</Box>
                    </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Typography className="flow-name font-size-18px text-align-center">Kind of request</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography className="font-family-nunito font-size-24px text-align-center qr-title">QR Code Review</Typography>
            <Box className="qr-code-wrapper">
              <Box className="qr-code-container">
                <QRCode value="!@#$%^&123123123" />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </CreateViewStyle>
  )
};