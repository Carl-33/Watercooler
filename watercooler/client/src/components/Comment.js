import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const Comment = ({ comments, classes }) => {
  return (
    <>
      <Divider variant="full width" /> change lines 10, 14, 27, and 34
      <ListItem alignItems="flex-start">
        <ListItemText
          // Title from db
          style={{color="primary"}}
          primary={comments.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {/* author from db*/}
                {comments.author}
              </Typography>
             {} -- {}
              {/* //comments from db */}
              {comments.body}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="full width" />
    </>
  );
};

export default Comment;
