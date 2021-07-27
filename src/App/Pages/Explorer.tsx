import React, { useCallback, useContext, useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";

import { createStyles, Theme } from "@material-ui/core/styles";
import { $ManagerApiClient } from "../../Services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Search from "../Components/Search";
import Table from "../Components/Table";
import { AppContext } from "../AppContextProvider";

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

const columns: any[] = [
  {
    field: "id",
    hide: true,
    valueGetter: () => {
      return Math.random().toString(16).slice(-4);
    },
  },
  { field: "ClaimNumber", headerName: "Claim Number", width: 180 },
  {
    field: "PolicyNumber",
    headerName: "Policy Number",
    width: 150,
  },
  {
    field: "BenefitState",
    headerName: "Benefit State",
    width: 180,
  },
  {
    field: "PolicySym",
    headerName: "Policy Sym",
    width: 180,
  },
  {
    field: "PolicyEffDt",
    headerName: "Policy Eff Dt",
    width: 160,
  },
];

const ExplorerView: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);
  const [stateText, setStateText] = useState<string>("Loading ...");
  const { recordsCache, setRecordsCache } = useContext(AppContext);
  const [records, setRecords] = useState<any>([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const loadData = (search: any) => {
    $ManagerApiClient.Records.getAllRecords(search, "1", "10", "0")
      .then((response: any) => {
        setLoading(false);
        const data: any = [];
        const min = 1;
        const max = 100;
        response.data.Result.forEach((row: any, index: any) => {
          data.push({
            id: Math.floor(Math.random() * (max - min + 1) + min),
            AccidentDate: row.AccidentDate,
            ClaimNumber: row.ClaimNumber,
            PolicyNumber: row.PolicyNumber,
            BenefitState: row.BenefitState,
            PolicySym: row.PolicySym,
            PolicyEffDt: row.PolicyEffDt,
          });
        });
        setRecords(data);
        if (setRecordsCache) {
          setRecordsCache(data);
        }
      })
      .catch(() => {
        setLoading(false);
        setStateText("No data");
        toast.error("Error loading records");
      });
  };

  const setSelectedCard = (row: any) => {
    console.log(row);
    return navigate(`/app/record/${row.row?.ClaimNumber}`);
  };

  return (
    <Box>
      <Container>
        <Search keyword={input} setKeyword={setInput} search={loadData} />
        <Table
          handleRowClick={setSelectedCard}
          data={recordsCache || records}
          columns={columns}
          loading={loading}
          textLoading={stateText}
        />
      </Container>
    </Box>
  );
};

export default ExplorerView;
