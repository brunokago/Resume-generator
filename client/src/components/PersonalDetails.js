import React from "react";
import { TextField, Grid, InputAdornment, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
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
  personaldetails: {
    display: "flex",
    justifyContent: "center",
  },
  textfield: {
    width: "300px",
  },
  lastname: {
    width: "300px",
  },
});

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  const classes = useStyles();
 

  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>Personal Details</h1>
      <div className={classes.personaldetails}>
        <Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className={classes.textfield}
              style={{ marginRight: "20px" }}
              onChange={handleChange("firstName")}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className={classes.textfield}
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "20px" }}>
            <TextField
              onChange={handleChange("firstName")}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.textfield}
              style={{ marginRight: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={handleChange("firstName")}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              className={classes.textfield}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "20px" }}>
            <TextField
              onChange={handleChange("firstName")}
              id="outlined-basic"
              label="Your Website"
              variant="outlined"
              className={classes.textfield}
              style={{ marginRight: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LanguageIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={handleChange("firstName")}
              id="outlined-basic"
              label="Github"
              variant="outlined"
              className={classes.textfield}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <GitHubIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "20px" }}>
            <TextField
              onChange={handleChange("firstName")}
              id="outlined-basic"
              label="Linkedin"
              variant="outlined"
              className={classes.textfield}
              style={{ marginRight: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={handleChange("firstName")}
              id="outlined-basic"
              label="Twitter"
              variant="outlined"
              className={classes.textfield}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TwitterIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            style={{ marginTop: "20px", marginBottom: "50px" }}
          >
            <Button
              disabled={true}
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default PersonalDetails;
