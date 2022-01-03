import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import styles from "./Cards.modules.css";
import cx from "classnames";
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  // console.log(confirmed.value);
  if (!confirmed) {
    return "Loading...";
  }

  return (
    
    <div className="containerCards">
      <Grid container spacing={2} className="grid">
        <Grid item component={Card} sm={12} md={3} className="infected" >
          <CardContent class='center'>
            <Typography gutterBottom>Infected</Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3.5}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} sm={12} md={3} className="recovered">
          <CardContent class='center'>
            <Typography gutterBottom>Recoverd</Typography>
            <Typography variant="h4">
              {" "}
              <CountUp
                start={0}
                end={recovered.value}
                duration={3.5}
                separator=","
              />
            </Typography>
            <Typography gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of recovered cases</Typography>
          </CardContent>
        </Grid>{" "}
        <Grid item component={Card} sm={12} md={3} className="deaths">
          <CardContent class='center '>
            <Typography color="textSeconday " gutterBottom >
              Deaths
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3.5}
                separator=","
              />
            </Typography>
            <Typography color="textSeconday" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of deaths cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
