import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./Header.css";
import Link from "./Links";
import LocationCityIcon from "@material-ui/icons/LocationCity";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <LocationCityIcon style={{ fontSize: 40, color: "black" }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Watercooler
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link
              href="/"
              className="nav-link nav-link-ltr"
              style={{ color: "white !important" }}
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I got to About.");
              }}
            >
              About
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link
              href="/Dashboard"
              className="nav-link nav-link-ltr"
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I go to Forum.");
              }}
            >
              Dashboard
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link
              href="/Forum"
              className="nav-link nav-link-ltr"
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I go to Forum.");
              }}
            >
              Forum
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: 34 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem style={{ fontSize: 16 }} onClick={handleClose}>
                  <Link href="/SignUp">Sign Up</Link>
                </MenuItem>
                <MenuItem style={{ fontSize: 16 }} onClick={handleClose}>
                  <Link href="/SignIn">Sign In</Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
