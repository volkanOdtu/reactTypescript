import React from "react";
import clsx from "clsx";

import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LogoApp from "../../Assets/Img/zurich_logo.png";
import LogoAppZurich from "../../Assets/Img/zurich-logo-white.png";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { yellow } from "@material-ui/core/colors";
import { BottomNavigation } from "material-ui";
import { VerticalAlignBottom } from "@material-ui/icons";

const drawerWidth = 170;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",         
    },
    margin: {
      margin: theme.spacing(0, 1),
    },
    extendedIcon: {
      marginRight: theme.spacing(0, 1),
    },
    menuButton: {
      
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",      
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),      
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
      backgroundColor: '#296FF0',
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Grid item xs={1}>
          <img
            src={LogoAppZurich}
            alt="Logo"
            height={30}
            style={{
              marginTop: "18px",
              marginLeft: "23px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/portal")}
          />
        </Grid>
        
      </Drawer>
    </div>
  );
}
