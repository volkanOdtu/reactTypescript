import { Grid, AppBar } from "@material-ui/core";
import SignOut from "../Components/SignOut";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useIsAuthenticated } from "@azure/msal-react";
import SignIn from "../Components/SignIn";
import LogoApp from "../../Assets/Img/zurich_logo.png";
import { useNavigate } from "react-router";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    appBarPrivate: {
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: "flex",
      flexDirection: "row",
      backgroundColor: "white",
      paddingTop: "10px",
    },
  })
);

const MainNavbar: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  return (
    <AppBar position="fixed" className={classes.appBarPrivate}>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={6}>
          <Grid
            direction="row"
            alignItems="center"
            justify="flex-start"
            container
            className={classes.appBarPrivate}
          >
            <Grid item xs={1}>
              <img
                src={LogoApp}
                alt="Logo"
                height={30}
                style={{
                  marginTop: "-2px",
                  marginLeft: "23px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/portal")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            direction="row"
            alignItems="center"
            justify="flex-end"
            style={{ paddingRight: "20px" }}
            container
          >
            <Grid item xs={1}>
              {isAuthenticated ? <SignOut /> : <SignIn />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default MainNavbar;
