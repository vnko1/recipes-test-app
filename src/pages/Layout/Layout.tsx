import React from "react";
import { Outlet } from "react-router";
import { Box, Toolbar } from "@mui/material";

import { Header } from "../../components";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
