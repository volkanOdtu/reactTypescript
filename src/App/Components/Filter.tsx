import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    extendedIcon: {
      marginRight: theme.spacing(2),
    },
    default: {
      width: "120px",
      fontSize: "large",
      textTransform: "none",
      color: "white",
      backgroundColor: "#23366f",
      "&:hover": {
        backgroundColor: blue[800],
      },
    },
  })
);

const Filters = (props: any & { title: string }) => {
  const classes = useStyles(props?.style);

  return (
    <Grid>
      <p>Filter Component Two</p>
    </Grid>
  );
};

export default Filters;
