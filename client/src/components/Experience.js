import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    InputAdornment,
    Divider,
    TextField,
    Button,
  } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';


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

const Experience = ({ prevStep, nextStep, handleChange, values }) => {
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
        <h1 className={classes.heading}>Expirience</h1>
        <Grid container spacing={2} alignItems="center" lg={12}style={{marginLeft: "20px"}}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 1</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute1"
                  label="Institue/Organisation"
                  style={{width: '90%'}}
                  required
                  value={values.institute1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position1"
                  label="Position"
                  style={{width: '90%'}}
                  required
                  value={values.position1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration1"
                  label="Duration"
                  style={{width: '90%'}}
                  required
                  value={values.duration1}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '97%'}}
                  name="experienceDescription1"
                  required
                  value={values.experienceDescription1}
                  onChange={handleChange}
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
            <Grid container spacing={2} alignItems="flex-start" lg={12}style={{marginLeft: "20px"}}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 2</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute2"
                  label="Institue/Organisation"
                  style={{width: '90%'}}
                  required
                  value={values.institute2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position2"
                  label="Position"
                  style={{width: '90%'}}
                  required
                  value={values.position2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration2"
                  label="Duration"
                  style={{width: '90%'}}
                  required
                  value={values.duration2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '97%'}}
                  rows={3}
                  name="experienceDescription2"
                  required
                  value={values.experienceDescription2}
                  onChange={handleChange}
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
            <br/>
            </div>
            <br/>
    </div>
  )
}

export default Experience