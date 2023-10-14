import React from "react";
import { FlowViewStyle } from "./index.style";
import { 
  Box, 
  BoxProps, 
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@mui/material";
import { ArrowSvg, InteractionSvg, Plus } from "../../../assets/icon";
import { VerificationModel } from "../../../models";
import Moment from 'react-moment';
import { PATH } from "../../../consts";
import { Link, useNavigate } from "react-router-dom";

type FlowViewProps = BoxProps & {
  pageNum: number,
  setPageNum: (pageNum: number) => void,
  verifications: VerificationModel[]
}

export const FlowView: React.FC<FlowViewProps> = (props) => {
  const {pageNum, setPageNum, verifications} = props;
  return (
    <FlowViewStyle>
      <Typography className="title font-size-48px">Available Flows</Typography>
      <Link className="new-flow-btn" to = {PATH.CREATE}>
        <img className="margin-right-1" src={Plus} />
        <Typography className="font-size-24 font-family-nunito">New flow</Typography>
      </Link>
      <TableContainer component={Paper} className ="flow-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="table-header text-align-left">NAME</TableCell>
              <TableCell align="left" className="table-header text-align-center">DATE CREATED</TableCell>
              <TableCell align="left" className="table-header text-align-center">ACCESS COUNTER</TableCell>
              <TableCell align="left" className="table-header text-align-center">INTERACTIONS</TableCell>
              <TableCell align="left" className="table-header text-align-center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {verifications.map(verification => (
              <TableRow>
              <TableCell align="left" className="text-align-left table-body ">{ verification.verificationFlowName }</TableCell>
              <TableCell align="left" className="table-body text-align-center">{ <Moment format="DD/MM/YYYY">{verification.createdAt}</Moment> }</TableCell>
              <TableCell align="left" className="table-body text-align-center">{ verification.accessCount}</TableCell>
              <TableCell align="left" className="table-body text-align-center">{ <img src={InteractionSvg} />}</TableCell>
              <TableCell align="left" className="table-body text-align-center">
                { 
                  <Link className="verification-page" to = {PATH.FLOW}>
                    <span>Verification Page  </span>
                    <img src = {ArrowSvg} />
                  </Link>
                }
              </TableCell>
              </TableRow>
              
            ))}
            {!verifications.length &&
                <TableRow>
                  <TableCell className='no-verification' colSpan={5}>
                    There is no data to display.
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </FlowViewStyle>
  )
}