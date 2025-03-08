import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import { patch } from '@mui/material'
import Solution from './Solution.jsx'
import Data from './Data.jsx'
import Iot from './Iot.jsx'
import Menu from './Menu.jsx'
import Appbar from './Appbar.jsx'


//routing
const routes=createBrowserRouter([{
    // path:"/",
    // element:<App />
    //    },
    //    {
        path:"/",
        element:<Home />,
        children:[
            {
                index:true,
                element:<Menu />
            },
            {path:"solution",
                element:<Solution/>
            },
            {
                path:"data",
                element:<Data />
            },
            {
                path:"iot",
                element:<Iot />
            }
        ],
       },
       {
        path:"/bar",
        element: <Appbar />
       }
])
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={routes} />
  
)
