
import { Container } from "@mui/material";
import SwiperMedia from "./component/SwiperMedia";
import { arr2 } from "./arrayImages";
export default function Solution() {
  return (
    
    <div style={{ backgroundColor: "white" }}>
          <Container style={{ height:"570px" }}>
            <h1>solution</h1>
            <SwiperMedia data={arr2} />
          </Container>
        </div>
    
  )
}
