import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box sx={{ paddingY: "300px", display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
