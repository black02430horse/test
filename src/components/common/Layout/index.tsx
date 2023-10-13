import React, { useState } from "react";
import { SidebarComponent } from "../Sidebar";
import { LayoutComponentStyle } from "./index.style";
import { Box, BoxProps, Menu, MenuItem } from "@mui/material";
import { useLocation } from "react-router";
import { DropdownSvg, ProfileSvg } from "../../../assets/icon";

type LayoutProps = BoxProps & {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement> (null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const disconnect = () => {
    setAnchorEl(null);
  }

  return (
    <LayoutComponentStyle currentPath={ location.pathname }>
      <Box className="sidebar">
        <SidebarComponent currentPath = {location.pathname}/>
      </Box>
      <Box className='main-container'>
        <Box className="landing">
          <Box className="profile-container">
            <Box className="profile" onClick = {handleClick}>
              <img className="margin-right-1" src={ProfileSvg}></img>
              <span className="profile-name">DID: kgh02430</span>
              <img className="margin-left-1 margin-right-1" src={DropdownSvg} />
            </Box>
            <Menu
              sx={{
                '& .MuiMenu-list': {
                  backgroundColor: '#ebebeb',
                  color: 'black'
                }
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={disconnect}>Disconnect</MenuItem>
            </Menu>
          </Box>
          {children}
        </Box>
      </Box>
    </LayoutComponentStyle>
  )
}

export const withLayout = (Page: React.FC): React.FC => () => {
  return (
    <Layout>
      <Page />  
    </Layout>
  )
}