import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate=useNavigate()
  return (
    <>
    <div className='nav'>
          <div className="bg">
            <img src="https://aujourdhui.ma/wp-content/uploads/2016/02/866360274.jpg" />
          </div>

          <Button
            variant="outlined"
            size="large"
            sx={{ backgroundColor: "white",marginRight:2,height:{lg:40,xs:30},padding:{xs:"8px",lg:2}  }}
          onClick={()=>navigate("/")}
          >
            HOME
          </Button>
        </div>
    </>
  )
}
