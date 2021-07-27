import React from "react";
import { Container, Grid, Button, Icon } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FloatButton from "../Components/FloatButton";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flex: "1 1 auto",
      backgroundImage: 'url("Img/portal.png")',
      backgroundRepeat: "no-repeat",
      height: "100%",
      overflow: "auto",
    },
    clsExplorerBtn: {
      width: "155px",
      fontSize: "medium",
      textTransform: "none",
      color: "white",
      backgroundColor: "#19BAB6",
      "&:hover": {
        backgroundColor: blue[800],
      },
    },
    clsAddLogBtn: {
      width: "120px",
      fontSize: "medium",
      fontWeight: "bold",
      textTransform: "none",
      color: "#19BAB6",
      "&:hover": {
        backgroundColor: "#0000",
      },
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

const LandingView: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
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
                  KeepOn - Portal
                </Typography>
              </Grid>
              <Grid container className={classes.clsFloatButton}>
                <Grid xs={3} item>
                  <FloatButton
                    title="Explorer records"
                    clsName={classes.clsExplorerBtn}
                    variant="extended"
                    onClick={() => navigate(`/app/explorer`)}
                  />
                </Grid>
                <Grid xs={2} item>
                  <Button
                    className={classes.clsAddLogBtn}
                    onClick={() => navigate(`/app/record/add`)}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Add a Log
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LandingView;
