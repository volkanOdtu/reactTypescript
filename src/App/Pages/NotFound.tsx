import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FloatButton from "../Components/FloatButton";
import ExitToAppIconRounded from "@material-ui/icons/ExitToApp";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarPublic: {
      height: "60px",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#ecf4fb",
      padding: "10px",
    },
    clsFloatButton: {
      marginLeft: theme.spacing(15),
      marginTop: theme.spacing(3),
    },
    clsTextLanding: {
      marginLeft: theme.spacing(15),
      marginTop: theme.spacing(18),
    },
  })
);

const NotFoundView: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleLogin = () => {
    try {
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Container component="main" maxWidth="md">
          <Grid container>
            <Grid item xs={12}>
              <Grid className={classes.clsTextLanding}>
                <Typography
                  style={{
                    color: "#23366f",
                    paddingBottom: "15px",
                    fontSize: "40px",
                  }}
                >
                  Page Not Foud
                </Typography>
              </Grid>
              <Grid className={classes.clsFloatButton}>
                <FloatButton
                  title="Back"
                  size="large"
                  color="default"
                  variant="extended"
                  icon={ExitToAppIconRounded}
                  onClick={handleLogin}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default NotFoundView;
