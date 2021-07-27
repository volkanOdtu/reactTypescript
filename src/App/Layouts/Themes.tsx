import { colors, createMuiTheme } from "@material-ui/core";

const AppThemes = createMuiTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: colors.common.white,
    },
    primary: {
      contrastText: "#ffffff",
      main: "#003399",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
    secondary: {
      main: "#dddddd",
    },
  },
  typography: {
    fontFamily: "Zurich Sans",
  },
});

export default AppThemes;
