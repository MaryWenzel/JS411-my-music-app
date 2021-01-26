import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Alert from "@material-ui/lab/Alert";

import "../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: 30,
  },
  alert: {
    marginTop: 5,
  },
});

// Dashboard
export default function MusicDashboard() {
  const classes = useStyles();

  //   Online Status
  const [online, setOnline] = useState(false);
  const handleOnline = (params) => {
    setOnline(!online);
    console.log(online);
  };

  //   Set Volume
  const [volume, setVolume] = useState(60);
  const handleVolume = (e, newVolume) => {
    setVolume(newVolume);
    console.log("new vol: ", newVolume);
  };

  //   Set Quality
  const [quality, setQuality] = useState("Normal");
  const handleQuality = (event) => {
    setQuality(event.target.value);
    console.log(quality);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <h1>Welcome User!</h1>
      <br />
      <div className="wrapper">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Online Mode
            </Typography>
            <Typography variant="body2" component="p">
              is this application connected to the internet?
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl component="fieldset">
              <FormControlLabel
                control={
                  <Switch
                    checked={online.online}
                    onChange={handleOnline}
                    name="online"
                  />
                }
              />
            </FormControl>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Master Volume
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound settings in this application
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Slider
              defaultValue={60}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              value={volume}
              step={10}
              marks
              min={0}
              max={100}
              onChange={handleVolume}
            />
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Sound Quality
            </Typography>
            <Typography variant="body2" component="p">
              Manually control the music quality in event of poor connection
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quality}
                onChange={handleQuality}
              >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
      </div>
      <div>
        <h4>System Notifications:</h4>
        <div>
          <Typography variant="h4">
            {!online ? (
              <Alert className={classes.alert} severity="warning">
                Your application is offline. You won't be able to share or
                stream music to other
              </Alert>
            ) : (
              <div></div>
            )}
            {volume > 80 ? (
              <Alert className={classes.alert} severity="info">
                Listening to music at a high volume could cause long-term
                hearing loss.
              </Alert>
            ) : (
              <div></div>
            )}
            {quality === "Low" ? (
              <Alert className={classes.alert} severity="warning">
                Music quality is degraded. Increase quality if your connection
                allows it.
              </Alert>
            ) : (
              <div></div>
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
}
