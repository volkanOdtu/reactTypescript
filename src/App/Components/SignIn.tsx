import React from "react";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";

// import { useMsal } from "@azure/msal-react";
import ExitToAppIconRounded from "@material-ui/icons/ExitToApp";
import { $ManagerApiClient } from "../../Services";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const SignIn: React.FC = () => {
  // const { instance } = useMsal();
  const classes = useStyles();
  const { instance } = useMsal();
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
    <Tooltip title="Sign In" aria-label="add" arrow>
      <IconButton
        onClick={handleLogin}
        aria-label="SignIn"
        className={classes.margin}
        color="primary"
      >
        <ExitToAppIconRounded style={{ fontSize: 25 }} />
      </IconButton>
    </Tooltip>
  );
};

export default SignIn;
