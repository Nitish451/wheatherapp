import "./infoBox.css";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./infoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const hot_URL =
    "https://images.unsplash.com/photo-1625430428345-4d844806ab89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_URL =
    "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_url =
    "https://images.unsplash.com/photo-1696671648700-07cf7f5a0d87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infobox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humadity > 80
                ? rain_url
                : info.temp > 15
                ? hot_URL
                : cold_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humadity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;c</p>
              <p>Humadity = {info.humadity}</p>
              <p>Min Temp = {info.minTemp}&deg;c</p>
              <p>Max Temp = {info.maxTemp}&deg;c</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels
                like = {info.feelsLike}&deg;c
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
