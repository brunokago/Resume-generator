import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  InputAdornment,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GetAppIcon from "@mui/icons-material/GetApp";
import axios from "axios"
import { saveAs } from "file-saver";

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

const ExtraDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const classes = useStyles();
  const createAndDownloadPDF = () => {
    axios
      .post("/create-pdf", values)
      .then(() => {
        axios
          .get("fetch-pdf", { responseType: "arraybuffer" })
          .then((res) => {
            const pdfBlob = new Blob([res.data], {
              type: "application/pdf",
            });
            saveAs(
              pdfBlob,
              `${values.firstname}'s Resume.pdf`
            );
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>Extra Details</h1>
      <Grid
        container
        spacing={2}
        alignItems="center"
        lg={12}
        style={{ marginLeft: "20px" }}
      >
        <Grid item xs={12} lg={4} alignItems="flex-end" alignContent="flex-end">
          <h5>
            <CheckCircleIcon />
            <span className="pl-3">Skills/Languages</span>
          </h5>
        </Grid>
        <Grid item xs={0} lg={8} />
        <br />
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="skill1"
            label="Skill 1"
            style={{ width: "90%" }}
            value={values.skill1}
            onChange={handleChange("skill1")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="skill2"
            label="Skill 2"
            style={{ width: "90%" }}
            value={values.skill2}
            onChange={handleChange("skill2")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="skill3"
            label="Skill 3"
            style={{ width: "90%" }}
            value={values.skill3}
            onChange={handleChange("skill3")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="skill4"
            label="Skill 4"
            style={{ width: "90%" }}
            value={values.skill4}
            onChange={handleChange("skill4")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="skill5"
            label="Skill 5"
            style={{ width: "90%" }}
            value={values.skill5}
            onChange={handleChange("skill5")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Skill 6"
            variant="outlined"
            style={{ width: "90%" }}
            name="skill6"
            value={values.skill6}
            onChange={handleChange("skill6")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        lg={12}
        style={{ marginLeft: "20px" }}
      >
        <Grid item xs={12} lg={4} alignItems="flex-end" alignContent="flex-end">
          <h5>
            <CheckCircleIcon />
            <span className="pl-3">Interest</span>
          </h5>
        </Grid>
        <Grid item xs={0} lg={8} />
        <br />
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Interest 1"
            variant="outlined"
            style={{ width: "90%" }}
            name="interest1"
            value={values.interest1}
            onChange={handleChange("interest1")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Interest 2"
            variant="outlined"
            style={{ width: "90%" }}
            name="interest2"
            value={values.interest2}
            onChange={handleChange("interest2")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Interest 3"
            variant="outlined"
            style={{ width: "90%" }}
            name="interest3"
            value={values.interest3}
            onChange={handleChange("interest3")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Interest 4"
            variant="outlined"
            style={{ width: "90%" }}
            name="interest4"
            value={values.interest4}
            onChange={handleChange("interest4")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Interest 5"
            variant="outlined"
            style={{ width: "90%" }}
            name="interest5"
            value={values.interest5}
            onChange={handleChange("interest5")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Interest 6"
            variant="outlined"
            style={{ width: "90%" }}
            name="interest6"
            value={values.interest6}
            onChange={handleChange("interest6")}
            InputProps={{
              endAdornment: <InputAdornment position="start" />,
            }}
          />
        </Grid>
      </Grid>
      <br />
      <div className={classes.edu}>
        <Button
          variant="contained"
          endIcon={<GetAppIcon />}
          style={{ backgroundColor: "Blue", marginLeft: "100px" }}
          onClick={createAndDownloadPDF}
        >
          DOWNLOAD RESUME
        </Button>
        <br />
      </div>
      <br />
    </div>
  );
};

export default ExtraDetails;
