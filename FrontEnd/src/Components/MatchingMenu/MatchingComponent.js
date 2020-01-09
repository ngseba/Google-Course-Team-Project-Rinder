import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import CardComponent from "./CardComponent";
import withStyles from "@material-ui/core/styles/withStyles";
import {matchingComponentStyles} from "./matchingComponentStyles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import axiosInstance from "../../Axios/AxiosInstance";
import {GET_MATCH_USERS, GET_RESOLUTIONS} from "../../APIConstants/ApiConstants";
import SnackbarComponent from "./SnackbarComponent";


class MatchingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matched_users: [],
            open_snackbar: false,
            email_snackbar: ""
        }
    }

    componentDidMount() {
        let matched_users_from_api = [];
        axiosInstance.get(GET_MATCH_USERS + "/1" + "/1").then(
            (res) => {
                res.data.forEach(element =>
                    matched_users_from_api.push(element)
                );
                this.setState({matched_users: matched_users_from_api})
            }
        )
    }

    handleShowEmail = (email) => {
        this.setState({
            email_snackbar: email,
            open_snackbar: true,
        });
    };

    handleCloseSnackbar = () => {
        console.log("salutarebaietii");
        this.setState({
            open_snackbar: false
        })
    };

    handleClick = () => {
        window.location.href = "/main"
    };

    render() {
        const {classes} = this.props;
        console.log(this.state);
        return (
            <React.Fragment>
                <AppBar position="static">

                    <Toolbar>
                        <IconButton size="small" className={classes.marginNegative}>
                            <ArrowBackIcon onClick={this.handleClick} fontSize="small"/>
                        </IconButton>
                        <Typography variant="h6">
                            Your matches
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <Grid item xs={3} className={classes.padding}>
                        <Typography variant="body1">
                            Choose a threshold to begin. The thresehold specifies how many tags should you have in
                            common with your potential matches
                        </Typography>
                        <Slider
                            defaultValue={2}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={5}
                        />
                        <Button variant="contained" color="primary">Start matching</Button>
                    </Grid>
                    <Grid container
                          direction="row"
                          justify="flex-start"
                          alignItems="center" item xs={9} className={classes.padding}>

                        <CardComponent cards={this.state.matched_users} handleEmail={this.handleShowEmail}/>
                        <SnackbarComponent open={this.state.open_snackbar} email_snackbar={this.state.email_snackbar}
                                           handleClose={this.handleCloseSnackbar}/>
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }

}

export default withStyles(matchingComponentStyles)(MatchingComponent);