import { Container } from '@mui/material'
import React from 'react'
import SwiperMedia from './component/SwiperMedia'
import { arr3 } from "./arrayImages";
export default function () {
  return (
    <>
   

         <div style={{ backgroundColor: "white" }}>
                  <Container style={{ height:"570px" }}>
                    <h1>DATA</h1>
                    <SwiperMedia data={arr3} />
                  </Container>
                </div>
    </>
  )
}
