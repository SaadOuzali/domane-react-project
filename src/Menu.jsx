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
            
          {/* <Box
            sx={{
              height: "500px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <Grid container spacing={5} justifyContent="center">
              {buttons.map((item) => (
                <Grid
                  item
                  xs={12} // Full width on phones (1 per row)
                  sm={12} // Full width on tablets (1 per row)
                  md={4} // Full width on medium screens (1 per row)
                  lg={4} // 3 per row on large screens
                  xl={4} // 3 per row on extra-large screens
                  key={item.id}
                  sx={{height:{
                    xs: "100px",
                    sm: "150px",
                    md: "152px",
                    lg: "230px",
                  }}}
                >
                  <Button
                    
                    sx={{
                        width:{
                            xs: "150px",
                            sm: "150px",
                            md: "152px",
                            lg: "230px",
                          },
                           minWidth: "100%",
                          border:"1px red solid",
                      padding: { xs: 3, sm: 4, md: 4, lg: 0 },
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.5rem",
                      },
                      "&:hover": {
                        transform: "scale(1.2)", // Slightly enlarge on hover
                        // transition: "0.99s", // Smooth transition effect
                        // scale: 0.2,
                      },
                    }}

                    onClick={()=>navigate()}
                  >
                   <Box>
                   <Box sx={{border:"1px solid red", width:{
                            xs: "150px",
                            sm: "150px",
                            md: "152px",
                            lg: "230px",
                          }}}>
                    <img  src="https://aujourdhui.ma/wp-content/uploads/2016/02/866360274.jpg" />
                   </Box>
                   {item.name}
                   </Box>
                  </Button>
                </Grid>
              ))}
            </Grid>

            

            
          </Box> */}
{/* 
          <Box
            sx={{
              height: "50px",
              
            }}
          >

          </Box> */}




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
                        opacity: 0.8,
                        transform: "scale(1.0999)",
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


          {/* <Box>
            <Grid
              container
              sx={{ gap: { xs: 2, sm: 3, md: 3, lg: 4 } }}
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
                  <Box
                   
                    sx={{
                     display: "flex",
                      border:"1px solid red",                    
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    //   padding: { xs: 2, sm: 3, md: 4, lg: 5 },
                    //  width: { xs: 50, sm: 150, md: 180, lg: 200 },
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.5rem",
                      }, // Responsive text size
                      "&:hover": {
                        backgroundColor: "secondary.main",
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                  >
                  
                    <Box
                      component="img"
                      src="https://aujourdhui.ma/wp-content/uploads/2016/02/866360274.jpg"
                      alt={btn.label}
                      sx={{
                        //  width: { xs: 50, sm: 150, md: 180, lg: 200 }, // Responsive image size
                        height: "auto",
                        // maxWidth: "100%",
                        marginBottom: 1,
                      }}
                    />
                  
                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
                    >
                      {btn.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box> */}




          
        </Container>
      </div>
    </>
  );
}
