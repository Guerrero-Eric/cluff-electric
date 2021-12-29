import React from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

import "./form.css";
import emailjs from "emailjs-com";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98dvhxv",
        "template_f4v5mku",
        e.target,
        "user_eFebKCQQyX5j2K2QqogjN"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="form__container" id="form">
      <CardContent>
        <div className="form__head">
          <div className="header__container">
            <Typography> <h1>Request a Quote</h1></Typography>
          </div>
          <form className="form__row" onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  name="first"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  name="last"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Phone"
                  name="number"
                  placeholder="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  placeholder="Enter message"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <div className="form__container-button">
                <Grid item>
                  <Button type="submit" varient="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </div>
            </Grid>
          </form>
        </div>
      </CardContent>
    </div>
  );
};

export default Form;
