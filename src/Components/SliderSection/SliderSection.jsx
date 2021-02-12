import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useWebAnimations from "@wellyshen/use-web-animations";
import img1 from "./Intro_Brain.svg";
import img2 from "./Intro_Front_Layer.svg";
import img3 from "./Intro_Featured_Image_Empty.svg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  h1: {
    fontSize: "6vw",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10vw",
      height: "10vh",
    },
  },
  h2: {
    fontSize: "3.8vw",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7.6vw",
      height: "10vh",
    },
  },
  h6: { flexFlow: "row wrap" },
  brain: {
    position: "absolute",
    width: "40vw",
  },
  layer: {
    position: "absolute",
    // top: "20%",
    width: "40vw",
  },
  featured: {
    width: "40vw",
    position: "absolute",
    // top: "20%",
  },
  button: {
    borderRadius: "50px",
    // backgroundImage: " linear-gradient(turquoise, lightseagreen);",
    backgroundColor: "turquoise",
    marginTop: "7%",
    color: "white",
    padding: "10px 30px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#45b",
    },
  },
}));

function SliderSection() {
  const classes = useStyles();
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 0)" },
      { transform: "translate(0, 20px)" },
      { transform: "translate(0, 0px)" },
    ],
    timing: {
      duration: 4000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  return (
    <div className="root">
      <Container>
        <Grid container>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            style={{ marginTop: "10%", color: "white" }}
          >
            <Typography className={classes.h1}>CORTEX</Typography>
            <Typography className={classes.h2}>COPYWRITER</Typography>
            <Typography
              className={classes.h6}
              variant="h6"
              style={{ marginTop: "8%" }}
            >
              Enhance your communications with psycology-based copywriting and
              UX writing
            </Typography>
            <Button variant="contained" className={classes.button}>
              Send a message
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{ padding: "30px" }}>
            <img ref={ref} src={img1} alt="brain" className={classes.brain} />
            <img src={img2} alt="Layer" className={classes.layer} />
            <img src={img3} alt="Featured" className={classes.featured} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SliderSection;
