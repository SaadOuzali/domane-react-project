import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./card.css";
import { useNavigate } from "react-router-dom";
export default function MediaCard({ img, name,path }) {
  
  const handleClick = () => {
    window.open(path, '_blank');
  };

 
  return (
    <Card sx={{ maxWidth: 345, height: 290 }}>
      <div>
        <img src={img} alt="image here" />
      </div>
      <CardContent>
        <div className="card1">
          <h3>{name} </h3>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#4b0000", borderRadius: "10px" }}
            onClick={handleClick}
          >
            acceder
          </Button>
        </div>
      </CardContent>
      
    </Card>
  );
}
