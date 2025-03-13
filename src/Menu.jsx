import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { useNavigate } from "react-router-dom";
import { buttons } from "./arrayImages";
import "./menu.css";
import Modul from "./Modul";
export default function () {
  const navigate = useNavigate();
  const buttonsData = [
    { label: "erp solution", imgSrc: "https://www.visiativ.com/wp-content/uploads/2023/03/fonctionnalites-erp.png",path:"solution" },
    { label: "iot solution", imgSrc: "https://tektelic.com/wp-content/uploads/38-IoT.svg",path:"iot" },
    { label: "data solution", imgSrc: "https://cdn-icons-png.freepik.com/256/12489/12489648.png?semt=ais_hybrid",path:"data" },
  ];
  return (
    <>
      <div style={{ backgroundColor: "white"  }} className="div">
        {/* <Container style={{ height: "570px" }}> */}
        <Container  style={{ minHeight:"75vh" }}>
          <div style={{marginBottom:50}}>
          <h1>solution</h1>
            </div>
            
         




          <Box >
            <Grid
              container
              sx={{ gap: { xs: 5, sm: 10, md: 10, lg: 10 } }}
            spacing={2}
              justifyContent="center"
            >
              {buttonsData.map((btn, index) => (
                <Grid
                  item
                  xs={12} 
                  sm={12} 
                  md={12} 
                  lg={4} 
                  xl={4} 
                  key={index}
                >
                  <Button
                    // variant="contained"
                    fullWidth
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                       borderRadius:"30px 30px",
                      boxShadow: "5px 5px 15px black",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                        width: { xs: 150, sm: 200, md: 230, lg: 250 },
                        // height: { xs: 160, sm: 210, md: 240, lg: 260 },
                      padding: { xs: 0, sm: 0, md: 0, lg: 0 }, // Responsive padding
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.5rem",
                      }, // Responsive text size
                      "&:hover": {
                        backgroundColor:"#E0E0E0	",
                        opacity: 0.8,
                        transform: "scale(1.09999)",
                        transition: "0.89s",
                      },
                      
                    }}
                    onClick={()=>{ navigate(btn.path)}}
                  >                  
                    <Box
                      component="img"
                      src={btn.imgSrc}
                      alt={btn.label}
                      sx={{
                        width: { xs: 150, sm: 170, md: 230, lg: 250 }, // Responsive image size
                        height:{ xs: 150, sm: 150, md: 180, lg: 220 },
                        maxWidth: "100%",
                        marginBottom: 1,
                      }}
                    />
                   
                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: "1rem", md: "1.4rem", lg: "1.5rem" } }}
                    >
                      {btn.label}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>


          




          
        </Container>
      </div>
    </>
  );
}
