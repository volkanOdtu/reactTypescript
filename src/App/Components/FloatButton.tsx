import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    extendedIcon: {
      marginRight: theme.spacing(2),
    },
    default: {
      width: "140px",
      fontSize: "large",
      textTransform: "none",
      color: "white",
      backgroundColor: "#19BAB6",
      "&:hover": {
        backgroundColor: blue[800],
      },
    },
  })
);

const FloatButton = (props: any & { title: string }) => {
  const classes = useStyles(props?.style);

  return (
    <Fab
      className={props?.clsName || classes.default}
      onClick={props?.onClick}
      variant={props?.variant}
      size={props?.size}
    >
      {props?.icon && (
        <props.icon fontSize="small" className={classes.extendedIcon} />
      )}
      {props?.title}
    </Fab>
  );
};

export default FloatButton;
