import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {/* <span className="rainbow">S</span>
            <span className="rainbow">w</span>
            <span className="rainbow">i</span>
            <span className="rainbow">t</span>
            <span className="rainbow">c</span>
            <span className="rainbow">h</span>
            <span className="rainbow"> E</span>
            <span className="rainbow">x</span>
            <span className="rainbow">p</span>
            <span className="rainbow">e</span>
            <span className="rainbow">r</span>
            <span className="rainbow">i</span>
            <span className="rainbow">e</span>
            <span className="rainbow">n</span>
            <span className="rainbow">c</span>
            <span className="rainbow">e</span> */}
            <span className="rainbow">Switch experience</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
