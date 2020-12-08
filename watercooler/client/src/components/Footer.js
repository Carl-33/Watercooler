import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function SimpleBottomNavigation() {
  const [loggedIn, setLoggedIn] = useState(false);
  {
    /* <button onClick={() => setLoggedIn(!loggedIn)}>
  {loggedIn ? "Log out" : "Log in"}
</button>; */
  }
  return (
    <BottomNavigation style={{ background: "grey" }}>
      {loggedIn ? (
        <Typography variant="h5" color="primary" gutterBottom>
          {/* Hello, {name} */}
          Logged In
        </Typography>
      ) : (
        <Typography variant="h5" color="primary" gutterBottom>
          Please Log In to Continue
        </Typography>
      )}
    </BottomNavigation>
  );
}
