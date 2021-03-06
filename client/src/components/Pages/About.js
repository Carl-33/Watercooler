import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Watercool from "../images/water-cooler-talk.png";
import Grid from "@material-ui/core/Grid";
import Wally from "../images/wallyandcuppy.png";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles({
  root: {
    maxWidth: 1100,
    marginLeft: "5%",
    marginTop: "5%",
  },
});
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        spacing={5}
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                gutterBottom
                align="center"
                variant="h3"
                component="h2"
              >
                Watercooler
              </Typography>
              <Typography
                gutterBottom
                align="center"
                variant="h6"
                component="h2"
              >
                Sign In To View The Dashboard and Forum
              </Typography>
              <Divider />
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Watercooler Talk"
                height="450"
                image={Wally}
                title="Watercooler Talk"
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <br />
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Watercooler Talk"
                height="250"
                image={Watercool}
                title="Watercooler Talk"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  | About |
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Water Cooler is an online forum that allows workers to connect
                  and organize with other workers to better communicate their
                  concerns and priorities to their employers. This is a space to
                  freely discuss what might be taboo to discuss in the office –
                  are you underpaid? Experiencing harassment? Overworked?
                  Looking to unionize, but not sure how (or if it’s even
                  possible)? Applying to a job in a new field and want to know
                  what you’re getting into from honest people who work in that
                  field? Water Cooler allows workers to share information and
                  provide encouragement to make their ideas for the workplace a
                  reality, or simply to connect virtually and build
                  relationships/ network with peers or coworkers
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                onclick="window.location.href='https://dashboard.heroku.com/apps/sheltered-cliffs-91068'"
                color="primary"
              >
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
