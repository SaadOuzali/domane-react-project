import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./card.css";
export default function MediaCard({ img, name }) {
  console.log("saad");
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
          >
            acceder
          </Button>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Acceder</Button>
      </CardActions> */}
    </Card>
  );
}
