import { Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 500,
      width: "100%",
    },
  })
);

const Table = ({
  columns,
  data,
  handleRowClick,
  loading,
  textLoading,
}: {
  handleRowClick: any;
  columns: any[];
  data: any[];
  loading: boolean;
  textLoading: string;
}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <DataGrid
        onRowClick={handleRowClick}
        rows={data}
        columns={columns}
        pageSize={10}
      />
    </Grid>
  );
};

export default Table;
