import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddFoodModal from "./AddFoodModal";

const Header = () => {
  return (
    <Box
      sx={{
        height: "85px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E5E7EB",
        padding: "0px 30px",
        bgcolor: "#262626",
      }}
    >
      <Typography variant="h4" color={"#fff"}>
        FOOD DIARY
      </Typography>
    </Box>
  );
};

export default Header;
