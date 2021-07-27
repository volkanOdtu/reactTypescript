import React from "react";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import "./App.css";

import initServices, { $ManagerApiClient } from "../Services";
import { ServiceProvider } from "../Services/ServiceContext";

import AppRoutes from "../Routes/Routes";
import GlobalStyles from "./Layouts/GlobalStyles";
import AppThemes from "./Layouts/Themes";
import { MsalProvider, useIsAuthenticated } from "@azure/msal-react";
import AppContextProvider from "./AppContextProvider";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  let routing = useRoutes(AppRoutes(true));
  return <>{routing}</>;
};

const AppWrapper: React.FC = () => {
  const Services = initServices();

  return (
    <MsalProvider instance={$ManagerApiClient.Login.msalInstance}>
      <Router>
        <ThemeProvider theme={AppThemes}>
          <CssBaseline />
          <ServiceProvider Services={Services}>
            <GlobalStyles />
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </ServiceProvider>
        </ThemeProvider>
      </Router>
    </MsalProvider>
  );
};

export default AppWrapper;
