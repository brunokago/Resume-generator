import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  InputAdornment,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import DateRangeIcon from "@mui/icons-material/DateRange";

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
  edu: {
    display: "flex",
    justifyContent: "center",
  },

  lastname: {
    width: "300px",
  },
});

const EducationalDetails = ({ prevStep, nextStep, handleChange, values }) => {
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
      <h1 className={classes.heading}>Education Details</h1>
      <div>
        <Grid container lg={12} spacing={2}>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="outlined-basic"
              label="University/College"
              variant="outlined"
              defaultValue={values.college}
              className={classes.textfield}
              style={{ marginLeft: "20px", width: "90%" }}
              onChange={handleChange("college")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="fromyear1"
              InputLabelProps={{ shrink: true }}
              label="From Year"
              type="date"
              style={{ width: "80%" }}
              required
              value={values.fromyear1}
              onChange={handleChange("fromyear1")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="toyear1"
              type="date"
              label="To Year"
              style={{ width: "80%" }}
              required
              value={values.toyear1}
              InputLabelProps={{ shrink: true }}
              onChange={handleChange("toyear1")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Qualification"
              variant="outlined"
              style={{ width: "90%", marginLeft: "20px" }}
              name="qualification1"
              required
              value={values.qualification1}
              onChange={handleChange("qualification1")}
            />
          </Grid>

          <Grid item md={8} sm={12} xs={12} lg={8}>
            <TextField
              margin="dense"
              label="Description"
              variant="outlined"
              style={{ width: "90%" }}
              name="description1"
              required
              value={values.description1}
              onChange={handleChange("description1")}
            />
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container lg={12} spacing={2} className={classes.edu}>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              value={values.school}
              id="outlined-basic"
              label="Highscool"
              variant="outlined"
              className={classes.textfield}
              style={{ marginLeft: "20px", width: "90%" }}
              onChange={handleChange("school")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              name="fromyear2"
              InputLabelProps={{ shrink: true }}
              label="From Year"
              type="date"
              style={{ width: "80%" }}
              required
              value={values.fromyear2}
              onChange={handleChange("fromyear2")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              name="toyear2"
              type="date"
              label="To Year"
              style={{ width: "80%" }}
              required
              value={values.toyear2}
              onChange={handleChange("toyear2")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              margin="dense"
              label="Qualification"
              variant="outlined"
              style={{ width: "90%", marginLeft: "20px" }}
              name="qualification1"
              required
              value={values.qualification2}
              onChange={handleChange("qualification2")}
            />
          </Grid>

          <Grid item md={8} sm={12} xs={12} lg={8}>
            <TextField
              margin="dense"
              label="Description"
              variant="outlined"
              style={{ width: "90%" }}
              name="description1"
              required
              value={values.description2}
              onChange={handleChange("description2")}
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
        </div>
        <br />
      </div>
    </div>
  );
};
export default EducationalDetails;
