import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <div style={{backgroundColor:"white"}}>
      <Header />

      <Box sx={{marginBottom:{lg:0,xs:5}}}>
        <Outlet />
      </Box>

      <Footer />
    </div>
  );
}
