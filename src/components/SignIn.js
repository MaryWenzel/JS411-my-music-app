import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 50,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    width: 250,
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
      <Button
        className={classes.button}
        onClick={handleLogin}
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </form>
  );
}
