import React, { useEffect } from "react";
import { Icon, IconButton, makeStyles, Tooltip } from "@material-ui/core";

import { useMsal } from "@azure/msal-react";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  imageIcon: {
    height: "100%",
    width: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

const SignOut: React.FC = () => {
  const { instance } = useMsal();
  const classes = useStyles();
  const handleLogout = () => {
    try {
      instance.logoutRedirect({ postLogoutRedirectUri: "/" }).catch((error) => {
        throw error;
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <Tooltip title="Sign Out" aria-label="add" arrow>
      <IconButton
        onClick={handleLogout}
        aria-label="signOut"
        className={classes.margin}
        color="primary"
      >
        <Icon classes={{ root: classes.iconRoot }}>
          <img
            className={classes.imageIcon}
            alt="logout"
            src="/img/logoutbutton.png"
          />
        </Icon>
      </IconButton>
    </Tooltip>
  );
};

export default SignOut;
