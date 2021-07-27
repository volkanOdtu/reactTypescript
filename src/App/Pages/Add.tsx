import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const RecordAddView: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <Container maxWidth={false}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              value={value}
              onChange={handleChange}
            />
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
            />
            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </div>
          <div>
            <TextField
              id="filled-multiline-flexible"
              label="Multiline"
              multiline
              value={value}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
            />
            <TextField
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              value={value}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="outlined"
            />
          </div>
        </form>
      </Container>
    </Box>
  );
};

export default RecordAddView;
