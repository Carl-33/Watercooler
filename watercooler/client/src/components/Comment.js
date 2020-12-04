import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const Comment = (props) => {
  return (
    <>
      <Divider variant="inset" />
      <ListItem alignItems="flex-start">
        <ListItemText
          // Title from db
          primary={props.comment.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={props.classes.inline}
                color="textPrimary"
              >
                {/* author from db*/}
                {props.comment.author}
              </Typography>
              --
              {/* //comments from db */}
              {props.comment.body}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default Comment;
