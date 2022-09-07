import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, InputAdornment,Divider,TextField,Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
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
  project1:{
    textAlign:"center",
    marginTop:"20px"
  },
  edu: {
    display: "flex",
    justifyContent: "center",
  },
  
  lastname: {
    width: "300px",
  },
});

const projects = ({ prevStep, nextStep, handleChange, values }) => {
  
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
      <div >
      <h1 className={classes.heading}>Projects</h1>
      <h3  className={classes.project1}>Project 1</h3>
      <TextField
      id="outlined-basic"
      label="Title"
      variant="outlined"
      style={{ marginLeft: "20px",width: '80%' }}
      onChange={handleChange("firstName")}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SchoolIcon />
          </InputAdornment>
        ),
      }}
   
      />
      </div>
    </div>
  )
}
export default projects;