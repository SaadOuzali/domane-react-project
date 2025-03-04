import { useState } from "react";

import { Box, Button, Container } from "@mui/material";
import "./App.css";
import Card from "./component/Mediacard";
import SwiperMedia from "./component/SwiperMedia";
import { arr3 } from "./arrayImages";
import { arr2 } from "./arrayImages";
import { arr4 } from "./arrayImages";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        {/* header */}
        <Box className sx={{ backgroundColor: "#4b0000", height: "100px" }}>
          <div className="bg">
            <img src="https://aujourdhui.ma/wp-content/uploads/2016/02/866360274.jpg" />
          </div>
        </Box>

        <div style={{ backgroundColor: "white" }}>
          <Container style={{ marginBottom: 50 }}>
            <h1>solution</h1>
            <SwiperMedia data={arr2} />
          </Container>
        </div>

        <div className="data">
          <Container style={{ marginBottom: 100, height: 300 }}>
            <h1>data</h1>
            <SwiperMedia data={arr3} />
          </Container>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <Container style={{ marginBottom: 50 }}>
            <h1>iot</h1>
            <SwiperMedia data={arr4} />
          </Container>
        </div>

        {/* footer */}
        {/* <Box className sx={{ backgroundColor: "#4b0000", height: "100px" }}>
          <div className="bg footer">
            <div className="div2">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  color: "#4b0000",
                }}
              >
                casablanca
              </Button>
              <h4 style={{ color: "white" }}>rabat</h4>
              <h4 style={{ color: "white" }}>marrakech</h4>
              <h4 style={{ color: "white" }}>autre ville</h4>
            </div>
            <div></div>
          </div>
        </Box> */}

        <div style={{ height: 80 }} className="footer2">
          <h4  >Copyright © Les Domaines Agricoles 2025</h4>
          <h4>condition d'utilisation</h4>
        </div>

        {/* <div style={{height:400,width:300,border:"1px solid red"}}>

  <div style={{height:180,width:250,border:"1px solid black",margin:"auto"}}>

  </div> 

</div> */}

        {/* <div>
      <img src="365.png" alt="" />
    </div> */}
      </div>
    </>
  );
}

// export default App
