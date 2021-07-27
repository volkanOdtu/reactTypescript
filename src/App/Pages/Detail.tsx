import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { createStyles, Theme } from "@material-ui/core/styles";

import { useParams } from "react-router-dom";
import { $ManagerApiClient } from "../../Services";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typograpyRoot: {
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const RecordDetailView: React.FC = () => {
  const classes = useStyles();
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [stateText, setStateText] = useState<string>("Loading ...");
  const [recordDetail, setRecordDetail] = useState<any>([]);

  const loadData = useCallback(() => {
    $ManagerApiClient.Records.getRecordById(id)
      .then((response: any) => {
        setLoading(false);
        setRecordDetail(response.data);
      })
      .catch(() => {
        setLoading(false);
        setStateText("No data");
        toast.error("Error loading record");
      });
  }, [setLoading]);
  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <Box>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Card className={classes.root}>
              {!loading ? (
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {recordDetail?.Adjustor?.AdjustorLastName}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {recordDetail?.Adjustor?.AdjustorName}
                  </Typography>
                </CardContent>
              ) : (
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {stateText}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecordDetailView;
