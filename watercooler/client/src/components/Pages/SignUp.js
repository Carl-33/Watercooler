import React, { useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link
        color="theme.palette.secondary.main"
        href="https://material-ui.com/"
      >
        Watercooler
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const companyRef = useRef();
  const locationRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi!");
    console.log(firstNameRef.current.value);
    API.saveUser({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      company: companyRef.current.value,
      location: locationRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    companyRef.current.value = "";
    locationRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                required
                inputRef={firstNameRef}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                required
                inputRef={lastNameRef}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="company"
                label="Company"
                name="email"
                required
                inputRef={companyRef}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="email"
                required
                inputRef={locationRef}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                required
                inputRef={emailRef}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                required
                inputRef={passwordRef}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;

// function CreatePostForm() {
//   const titleRef = useRef();
//   const bodyRef = useRef();
//   const authorRef = useRef();
//   const [state, dispatch] = useStoreContext();

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch({ type: LOADING });
//     API.saveUser({
//       title: titleRef.current.value,
//       body: bodyRef.current.value,
//       author: authorRef.current.value
//     })
//       .then(result => {
//         dispatch({
//           type: ADD_POST,
//           post: result.data
//         });
//       })
//       .catch(err => console.log(err));

//     titleRef.current.value = "";
//     bodyRef.current.value = "";
//   };

//   return (
//     <div>
//       <div className="jumbotron">
//         <img
//           className="img-fluid img-thumbnail"
//           src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//         />
//       </div>
//       <h1>Create a blog post</h1>
//       <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
//         <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
//         <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
//         <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
//         <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
//           Save Post
//         </button>
//       </form>
//     </div>
//   );
// }
