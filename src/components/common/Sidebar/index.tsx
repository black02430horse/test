import React from "react";
import { Link } from "react-router-dom";
import { SidebarComponentStyle } from "./index.style";
import { Logo } from "../../../assets/image";
import { BoxProps, Box, Divider, Typography } from '@mui/material';
import { ClockSvg, CommentSvg, PlusSvg } from "../../../assets/sidebar";

export const SidebarComponent: React.FC = () => {
  return (
    <SidebarComponentStyle>
      <Link to = "/">
        <img className = "sidebar-logo-img" src = {Logo} alt = "sidebar logo"/>
      </Link>
        <Box sx = {{ height: '16px'}} />
        <Box>
          asldkfa;sdf
        </Box>
        <Box className = "sidebar-list">
          <Link className = "sidebar-item active" to = "/">
            <ClockSvg svgColor = "black" />
            <Typography className = "sidebar-link-text">Verification flows</Typography>
          </Link>
          <Link className = "sidebar-item" to = "/">
            <CommentSvg svgColor = "white" />
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