import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Wally from "../images/wally3.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
  media: {
    height: 200,
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(2),
  },
  inline: {
    display: "inline",
  },
}));

const title = `Title `;
const forum = `This will be the posts we need to make a function to create a <p> tag inside for (huge array) 
Change this to list items`;
const search = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const Forum = () => {
  const classes = useStyles();
  //useState for comment changes appending list items
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  //this is for the submit button to render comments
  //pass comment in as props??? from db??
  const renderedComment = comments.map((e, comment, title) => {
    e.preventDefault();
    console.log(comment, title);
    if (comment.value === null) {
      return null;
    }

    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemText
            // this is for the title
            primary={data.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {/* //this is for the comments */}
                {Data.comment[0]}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  });

  return (
    <div className={classes.root}>
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={5}
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h5"
                  component="h2"
                >
                  | Watercooler Forum |
                </Typography>
                <Divider />
                <CardMedia
                  className={classes.media}
                  image={Wally}
                  title="Wally"
                />
                <Divider />
                <Typography variant="body2" color="textSecondary" component="p">
                  Connect with your fellow co-workers here by creating a post!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {`— Wish I could come, but I'm out of town this
                  Wish I could come, but I'm out of town thisWish I could come, 
                  but I'm out of town thisWish I could come, but I'm 
                  out of town thisWish I could come, but I'm out 
                  of town this`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>
      {/* Soft code to generate a new text*/}
      {renderedComment}
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {/* Button to render a New Commnet*/}
            <Button
              value={(title, comment)}
              variant="outlined"
              color="primary"
              onClick={(e) => renderedComment()}
            >
              <MessageIcon style={{ marginRight: "10px" }} />
              Submit Post
            </Button>
          </Grid>
          <Grid item xs>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                name="Name"
                defaultValue="John Smith"
                required
                // inputRef={lastNameRef}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                defaultValue="Work Thoughts"
                required
                // inputRef={lastNameRef}
                autoComplete="lname"
              />
            </Grid>
            <TextField
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows={6}
              defaultValue="What do you guys think about work?"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Forum;
