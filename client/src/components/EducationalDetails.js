import React from "react";
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
  edu: {
    display: "flex",
    justifyContent: "center",
  },
  
  lastname: {
    width: "300px",
  },
});

const EducationalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const [value, setValue] = React.useState(dayjs());
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
      <div >
        <Grid container lg={12} spacing={2} >
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="outlined-basic"
              label="University/College"
              variant="outlined"
              className={classes.textfield}
              style={{ marginLeft: "20px",width: '90%' }}
              onChange={handleChange("firstName")}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack >
                <DesktopDatePicker
                style={{ marginLeft: "20px",width: '20%' }}
                className={classes.textfield}
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                className={classes.textfield}
                  label="Finish Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '90%',marginLeft: "20px"}}
                  name="qualification1"
                  required
                  value={values.qualification1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '90%'}}
                  name="description1"
                  required
                  value={values.description1}
                  onChange={handleChange}
                />
              </Grid>
          
        </Grid>
        <br/>
        <Divider />
        <br/>
        <Grid container lg={12} spacing={2} className={classes.edu}>
          <Grid item md={4} sm={12} xs={12} lg={4}>
            <TextField
              id="outlined-basic"
              label="Highscool"
              variant="outlined"
              className={classes.textfield}
              style={{ marginLeft: "20px",width: '90%' }}
              onChange={handleChange("firstName")}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack >
                <DesktopDatePicker
                style={{ marginLeft: "20px",width: '20%' }}
                className={classes.textfield}
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                className={classes.textfield}
                  label="Finish Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '90%',marginLeft: "20px"}}
                  name="qualification1"
                  required
                  value={values.qualification1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '90%'}}
                  name="description1"
                  required
                  value={values.description1}
                  onChange={handleChange}
                />
              </Grid>
          
        </Grid>
        <br/>
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
            <br/>
      </div>
    </div>
  );
};
export default EducationalDetails;
