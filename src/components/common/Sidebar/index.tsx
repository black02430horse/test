import React from "react";
import { Link } from "react-router-dom";
import { SidebarComponentStyle } from "./index.style";
import { Logo } from "../../../assets/image";
import { BoxProps, Box, Divider, Typography } from '@mui/material';
import { ClockSvg, CommentSvg, PlusSvg } from "../../../assets/sidebar";
import { PATH } from "../../../consts";

type SidebarComponentProps = BoxProps & {
  currentPath: string
}

export const SidebarComponent: React.FC<SidebarComponentProps> = (props) => {
  const {currentPath} = props;
  return (
    <SidebarComponentStyle>
      <Link to = {PATH.DOWNLOAD}>
        <img className = "sidebar-logo-img" src = {Logo} alt = "sidebar logo"/>
      </Link>
        <Box sx = {{ height: '16px'}} />
        <Box className = "sidebar-list">
          <Link className = {`sidebar-item ${currentPath === PATH.FLOW ? 'active' : ''}`} to = { PATH.FLOW}>
            <ClockSvg svgColor = {currentPath === PATH.FLOW? 'black' : 'white'} />
            <Typography className = "sidebar-link-text">Verification flows</Typography>
          </Link>
          <Link className = {`sidebar-item ${currentPath === PATH.CREATE ? 'active' : ''}`} to = {PATH.CREATE}>
            <CommentSvg svgColor = {currentPath === PATH.CREATE? 'black' : 'white'} />
            <Typography className = "sidebar-link-text">Create new flow</Typography>
          </Link>
          <Link className = "sidebar-item" to = "/">
            <PlusSvg svgColor = "white" />
            <Typography className = "sidebar-link-text">Get in touch</Typography>
          </Link>
        </Box>
        
    </SidebarComponentStyle>
  )
}