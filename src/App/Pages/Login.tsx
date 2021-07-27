import React from "react";
import { Container, Grid } from "@material-ui/core";
import { $ManagerApiClient } from "../../Services";
import { useMsal } from "@azure/msal-react";
import { Typography } from "@material-ui/core";
import FloatButton from "../Components/FloatButton";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flex: "1 1 auto",
      backgroundImage: 'url("Img/login.png")',
      backgroundRepeat: "no-repeat",
      height: "100%",
      overflow: "auto",
    },
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
      marginTop: theme.spacing(50),
    },
  })
);

const LoginView: React.FC = () => {
  const { instance } = useMsal();
  const classes = useStyles();
  const navigate = useNavigate();
  const handleLogin = () => {
    try {
      if (process.env.REACT_APP_LOGIN_ON === "true") {
        instance
          .loginRedirect($ManagerApiClient.Login.loginRequest)
          .catch((error) => {
            console.log("error", error);
          });
      } else {
        navigate(process.env.REACT_APP_LOGIN_OFF_REDIRECT || "/app/explorer");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid className={classes.container} container>
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
                  KeepOn
                </Typography>
                <Typography style={{ color: "#23366f", fontSize: "20px" }}>
                  Welcome to the lorem ipsum, lorem ipsum.
                </Typography>
              </Grid>
              <Grid className={classes.clsFloatButton}>
                <FloatButton
                  title="LOG IN"
                  size="large"
                  variant="extended"
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

export default LoginView;
