import React from "react";
import { SidebarComponent } from "../Sidebar";
import { LayoutComponentStyle } from "./index.style";
import { Box, BoxProps } from "@mui/material";
import { useLocation } from "react-router";

type LayoutProps = BoxProps & {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const location = useLocation();
  return (
    <LayoutComponentStyle currentPath={ location.pathname }>
      <Box className="sidebar">
        <SidebarComponent />
      </Box>
      <Box className = 'main-container'>
        <Box className="landing">
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