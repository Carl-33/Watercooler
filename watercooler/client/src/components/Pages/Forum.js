import React, { useRef, useEffect } from "react";
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

//Forum Default
const Forum = () => {
  //Set state for rendering comments //remember to import it
  // const [comment, setComment] = useState([]);

  const classes = useStyles();
  const authorRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();

  const savePost = (e) => {
    e.preventDefault();
    console.log("hi!");
    API.createComment({
      author: authorRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
    authorRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };
  console.log(savePost);

  // eslint-disable-next-line
  useEffect(async () => {
    const comment = await API.getComments({
      author: authorRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });

    console.log(comment);
  }, []);

  const comments = [
    {
      author: "John",
      title: "Title",
      body: "Body Body Body Body Body Body Body Body Body ",
    },
    {
      author: "John",
      title: "Title",
      body: "Body Body Body Body Body Body Body Body Body",
    },
    {
      author: "John",
      title: "Title",
      body: "Body Body Body Body Body Body Body Body Body",
    },
  ];

  // const renderedComment = async (e, comments) => {
  //   e.preventDefault();

  // };

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
        {/* Render comment component*/}
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} classes={classes} />
        ))}
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              // onClick={(() => setComment(renderComments))}
            >
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
                name="Name"
                defaultValue="John Smith"
                required
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
                defaultValue="Work Thoughts"
                required
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
                defaultValue="What do you guys think about work?"
                required
                inputRef={bodyRef}
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
