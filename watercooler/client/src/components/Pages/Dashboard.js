import React, {useContext} from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {UserContext} from "../../providers/UserProvider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
              My Company
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Typography>See what your peers have to say about your company</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary" href="/LocationForum">
              My Office
            </Button>
          </Grid>
          <Grid item xs>
            <Typography>See what people at your office are talking about</Typography>
          </Grid>
        </Grid>
      </Paper>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
