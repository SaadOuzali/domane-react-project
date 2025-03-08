import { Container } from '@mui/material'
import React from 'react'
import SwiperMedia from './component/SwiperMedia'
import { arr4 } from "./arrayImages";
export default function () {
  return (
    <>
    <div style={{ backgroundColor: "white" }}>
          <Container sx={{height:"570px"}} >
            <h1>iot</h1>
            <SwiperMedia data={arr4} />
          </Container>
        </div>
    </>
  )
}
