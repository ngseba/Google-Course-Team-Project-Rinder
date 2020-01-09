import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axiosInstance from '../../Axios/AxiosInstance';
import {CREATE_USERS_REGISTER} from '../../APIConstants/ApiConstants'
import {loginStyles} from "./loginStyles";
import {withStyles} from "@material-ui/core/styles";
import {

    DatePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider,


} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"; // import

let email = ""
let password = ""
let first_name = ""
let last_name = ""
let date_of_birth = ""



class RegisterComponent extends React.Component {


    handleForm = (event) => {
        event.preventDefault();
        console.log(date_of_birth)
    }

    

    handleForm = (event) => {
        event.preventDefault();
        return axiosInstance.post(CREATE_USERS_REGISTER,{
          "first_name" : first_name,
          "last_name" : last_name,
          "email" : email,
          "password" : password,
          "date_of_birth":date_of_birth,
        }).then(
          res => console.log(res),
          this.props.history.push('/login')
               )
          .catch(err => console.error(err))
      }

    handleEmail = (event) => {
      email = event.target.value;
    }

    handlePass = (event) => {
      password = event.target.value;
    }

    handleFname = (event) => {
      first_name = event.target.value;
    }

    handleLname = (event) => {
        last_name = event.target.value;
    }

    handleBirthdate = (date) => {
        date_of_birth = date;
    }



    render() {
      const {classes} = this.props;
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange = { this.handleFname }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange = { this.handleLname }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange = { this.handleEmail }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange = { this.handlePass }
                  />
                </Grid>
                <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-inline"
                    label="Birthday"
                    format="dd/MM/yyyy"
                    defaultValue = {new Date}
                    onChange={ this.handleBirthdate }
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = { this.handleForm }
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
    }
}





export default withStyles(loginStyles)(RegisterComponent)