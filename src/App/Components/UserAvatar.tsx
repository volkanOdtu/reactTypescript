import React, { useEffect, useState } from "react";
import { makeStyles, IconButton, Tooltip, SvgIcon } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { useMsal } from "@azure/msal-react";
import Icon from "@material-ui/core/Icon";

import { ReactComponent as StarIcon } from "@zurich/web-sdk/pictograms/account-customer.svg";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

const UserAvatar: React.FC = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState<string>("");
  const { accounts } = useMsal();
  useEffect(() => {
    if (accounts) {
      setUserName(accounts[0]?.name || "");
    }
  }, []);
  return (
    <>
      <IconButton
        onClick={console.log}
        className={classes.margin}
        color="primary"
      >
        <Icon classes={{ root: classes.iconRoot }}>
          <img
            className={classes.imageIcon}
            alt="logedin"
            src="/img/logedin.png"
          />
        </Icon>
      </IconButton>
      <Tooltip title={userName} aria-label="add" arrow>
        <span style={{ color: "black" }}>{userName}</span>
      </Tooltip>
    </>
  );
};

export default UserAvatar;
