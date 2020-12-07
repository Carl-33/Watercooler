import React, { useRef, useState } from "react";
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
import { auth, generateUserDocument } from "../../firebase";

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
  const lastNameRef = useRef();
  const firstNameRef = useRef();

  const companyRef = useRef();
  const locationRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    console.log("createUser");
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user)
      generateUserDocument(user, {firstName, lastName});
    }
    catch(error){
      console.log(error)
      setError("Error signing in");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
      console.log("email is " + value)
    } else if (name === "userPassword") {
      setPassword(value);
      console.log("password is " + value)
    } else if (name === "firstName") {
      setFirstName(value);
      console.log("firstname is " + value)
    } else if (name === "lastName") {
      setLastName(value);
      console.log("lastname is " + value)
    }
  };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log("hi!");
    //   console.log(firstNameRef.current.value);
    //   API.saveUser({
    //     firstName: firstNameRef.current.value,
    //     lastName: lastNameRef.current.value,
    //     company: companyRef.current.value,
    //     location: locationRef.current.value,
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   });
    //   firstNameRef.current.value = "";
    //   lastNameRef.current.value = "";
    //   companyRef.current.value = "";
    //   locationRef.current.value = "";
    //   emailRef.current.value = "";
    //   passwordRef.current.value = "";
    // };

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
                  value={firstName}
                  onChange={event => onChangeHandler(event)}
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
                  autoComplete="lastname"
                  value={lastName}
                  onChange={event => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  required
                  inputRef={companyRef}
                  autoComplete="company"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  required
                  inputRef={locationRef}
                  autoComplete="location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="userEmail"
                  required
                  inputRef={emailRef}
                  autoComplete="email"
                  value={email}
                  onChange={event => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="userPassword"
                  label="Password"
                  type="password"
                  id="password"
                  required
                  inputRef={passwordRef}
                  autoComplete="current-password"
                  onChange={event => onChangeHandler(event)}
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
              // onClick={handleSubmit}
              onClick={event => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}
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
