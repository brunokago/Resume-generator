import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  InputAdornment,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const useStyles = makeStyles({
  card: {
    maxWidth: "90%",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
    margin: "0 auto",
  },

  media: {
    height: 300,
  },
  heading: {
    fontSize: "40px",
    textAlign: "center",
    marginTop: "50px",
  },
  project1: {
    textAlign: "center",
    marginTop: "20px",
  },
  edu: {
    display: "flex",
    justifyContent: "center",
  },

  lastname: {
    width: "300px",
  },
});

const Projects = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>Projects</h1>
      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item xs={12} lg={12}>
          <h5 style={{ marginLeft: "20px" }}>Project 1</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="title1"
            label="Title"
            style={{ marginLeft: "20px", width: "80%" }}
            required
            value={values.title1}
            onChange={handleChange("title1")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="link1"
            label="Link"
            style={{ marginLeft: "20px", width: "80%" }}
            required
            value={values.link1}
            onChange={handleChange("link1")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="projectDescription1"
            label="Description"
            style={{ marginLeft: "20px", width: "80%" }}
            required
            value={values.projectDescription1}
            onChange={handleChange("projectDescription1")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item xs={12} lg={12}>
          <h5 style={{ marginLeft: "20px" }}>Project 2</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="title2"
            label="Title"
            style={{ marginLeft: "20px", width: "80%" }}
            required
            value={values.title2}
            onChange={handleChange("title2")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="link2"
            label="Link"
            style={{ marginLeft: "20px", width: "80%" }}
            required
            value={values.link2}
            onChange={handleChange("link2")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="projectDescription2"
            label="Description"
            style={{ marginLeft: "20px", width: "80%" }}
            required
            value={values.projectDescription2}
            onChange={handleChange("projectDescription2")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item xs={12} lg={12}>
          <h5 style={{ marginLeft: "20px" }}>Project 3</h5>
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="title3"
            label="Title"
            style={{ marginLeft: "20px", width: "80%" }}
            value={values.title3}
            onChange={handleChange("title3")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="link3"
            label="Link"
            style={{ marginLeft: "20px", width: "80%" }}
            value={values.link3}
            onChange={handleChange("link3")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={12}>
          <TextField
            margin="dense"
            variant="outlined"
            name="projectDescription3"
            label="Description"
            style={{ marginLeft: "20px", width: "80%" }}
            value={values.projectDescription3}
            onChange={handleChange("projectDescription3")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <br />
      <div className={classes.edu}>
        <Button
          variant="contained"
          endIcon={<SkipPreviousIcon />}
          style={{ backgroundColor: "Blue", marginLeft: "100px" }}
          onClick={Previous}
        >
          Previos
        </Button>
        <Button
          variant="contained"
          endIcon={<SkipNextIcon />}
          style={{ backgroundColor: "Blue", marginLeft: "150px" }}
          onClick={Continue}
        >
          Next
        </Button>
        <br />
      </div>
      <br />
    </div>
  );
};

export default Projects;
