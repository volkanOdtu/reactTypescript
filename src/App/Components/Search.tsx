import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid, IconButton, InputBase, Paper } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

const Search = ({
  keyword,
  setKeyword,
  search,
}: {
  keyword: any;
  setKeyword: any;
  search: any;
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            //disabled={true}
            onClick={() => search(keyword)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Search;
