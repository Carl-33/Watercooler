import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../../providers/UserProvider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Wally from "../images/wallyandcuppy.png";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(8)}px auto`,
    padding: theme.spacing(2),
  },
}));

// const message = `We need to customize what is said here for where the buttons take the user `;

const Dashboard = () => {
  const classes = useStyles();
  const userData = useContext(UserContext);
  console.log(userData);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={5}
        >
          <Grid item>
            <Button variant="outlined" color="primary">
              Search Forum
            </Button>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>Search for a forum</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/CompanyForum">
              New
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Typography>
              See what your peers have to say about your company
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/LocationForum">
              New
            </Button>
          </Grid>
          <Grid item xs>
            <Typography>
              See what people at your office are talking about
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid item sm={6}>
        <Card style={{ marginLeft: 400, width: 450 }} className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h3" align="center" component="h2">
              Watercooler Dashboard
            </Typography>
            <Divider />
          </CardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Watercooler Talk"
              height="400"
              image={Wally}
              title="TinyCuppy"
            />
          </CardActionArea>
        </Card>
      </Grid>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
