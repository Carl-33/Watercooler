import React, { useRef, useState, useEffect } from "react";
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
import API from "../../utils/API";
import Comment from "../Comment";
// import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      color: "white",
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

//Forum Default
const Forum = () => {
  const [comments, setComments] = useState([]);
  //Set state for inputs
  const [author, setAuthor] = useState("John Smith");
  const [title, setTitle] = useState("Work Thoughts");
  const [body, setBody] = useState("What do you guys think about work?");
  const [company, setCompany] = useState("Corporate, inc.");
  const [location, setLocation] = useState("profits dept.");
  //input Ref to DB!
  const classes = useStyles();
  const authorRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const companyRef = useRef();
  const locationRef = useRef();

  const savePost = (e) => {
    e.preventDefault();
    // console.log("hi!");
    API.createComment({
      author: authorRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
      company: companyRef.current.value,
      location: locationRef.current.value,
    });
    authorRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    companyRef.current.value = "";
    locationRef.current.value = "";
    window.location.reload();
  };
  console.log(savePost);

  // const renderComments = () => {
  //   // API reqeuest for the DB
  //   const render = () => {
  //     let dbData = API.getComments();
  //     let newComments = dbData.then((data) => data.data);
  //     // let finalComments = newComments.then((data) => JSON.stringify(data));
  //     return newComments;
  //   };

  //   render().then((newComments) => setComment(newComments));
  //   //this works
  //   // console.log("this is new comments" + setComment(newComments));
  //   // console.log("just 77" + dbData.then((data) => console.log(data)));
  //   // console.log("just 78" + comments.then((data) => console.log(data)));
  //   console.log("just comments 79" + comments);
  // };

  // Useless, used for debugging, remove when done
  useEffect(() => {
    console.log(author);
    console.log(title);
    console.log(body);
  }, [author, title, body]);

  useEffect(() => {
    // API reqeuest for the DB
    (async () => {
      let dbData = await API.getComments();
      setComments(dbData.data);
    })();
    // render().then((newComments) => setComment(newComments));
    console.log("just comments 79" + comments);
  }, []);

  const handleNewComments = () => {
    console.log(author, title, body);
    const inputs = { author, title, body };
    // setComments([...comments, inputs]);
    console.log("line 102", [...comments, inputs]);
  };

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
              <Button
                size="small"
                onClick={() =>
                  "window.location.href='https://dashboard.heroku.com/apps/sheltered-cliffs-91068'"
                }
                color="primary"
              >
                Share
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
        {/* Render comment component*/}
        {console.log(comments[0], "comment")}
        {comments !== undefined ? (
          comments.map((comments, i) => (
            <Comment key={i} comments={comments} classes={classes} />
          ))
        ) : (
          <React.Fragment />
        )}
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={savePost}>
              <MessageIcon style={{ margin: "3" }} />
              Submit Post
            </Button>
          </Grid>
          <Grid item xs>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="Name"
                label="Name"
                required
                name="Name"
                defaultValue={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                  console.log(e.target.value);
                }}
                inputRef={authorRef}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="title"
                label="Title"
                name="title"
                required
                defaultValue={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
                inputRef={titleRef}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={6}
                required
                defaultValue={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  console.log(e.target.value);
                }}
                inputRef={bodyRef}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-multiline-static"
                label="Company"
                rows={6}
                required
                defaultValue={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  console.log(e.target.value);
                }}
                inputRef={companyRef}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-multiline-static"
                label="Location"
                rows={6}
                required
                defaultValue={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  console.log(e.target.value);
                }}
                inputRef={locationRef}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Forum;
