import React from 'react';
import './App.css';
import { ThemeProvider } from "@mui/material";
import { darkTheme } from './styles';
import { DownLoadPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path = "/download" Component={DownLoadPage} />
          <Route path = "*" Component={DownLoadPage} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
