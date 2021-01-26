import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const { handleLogin } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="User Name" />
      <br></br>
      <TextField id="standard-basic" label="Password" />
      <br></br>
      <Button onClick={handleLogin} variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
}
