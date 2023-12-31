import React from 'react';
import './App.css';
import { ThemeProvider } from "@mui/material";
import { darkTheme } from './styles';
import { ConnectPage, DownLoadPage, FlowPage, CreatePage, DetailPage } from './pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PATH } from './consts';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path = { PATH.DOWNLOAD } element={<DownLoadPage />} />
          <Route path = { PATH.CONNECT } element={<ConnectPage />} />
          <Route path = { PATH.FLOW } element={<FlowPage />} />
          <Route path = { PATH.CREATE } element={<CreatePage />} />
          <Route path = { PATH.DETAIL } element = {<DetailPage />} />
          <Route path = "*" element={<Navigate to = { PATH.DOWNLOAD } />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
