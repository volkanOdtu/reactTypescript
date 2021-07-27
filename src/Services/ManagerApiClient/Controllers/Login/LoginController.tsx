import { LogLevel, PublicClientApplication } from "@azure/msal-browser";
import { MsalContext } from "@azure/msal-react";
import React from "react";

export default class LoginController extends React.Component {
  static contextType = MsalContext;

  public loginRequest = {
    scopes: [process.env.REACT_APP_AAD_SCOPES || ""],
  };

  public settings = {
    auth: {
      clientId: process.env.REACT_APP_AAD_APP_CLIENT_ID || "",
      redirectUri: process.env.REACT_APP_AAD_REDIRECT_URI || "",
      authority: process.env.REACT_APP_AAD_AUTHORITY || "",
      postLogoutRedirectUri:
        process.env.REACT_APP_AAD_LOGOUT_REDIRECT_URI || "/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      loggerOptions: {
        loggerCallback: (level: any, message: any, containsPii: any) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              return;
          }
        },
      },
    },
  };

  public msalInstance = new PublicClientApplication(this.settings);
}
