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


class MatchingComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () =>{
        window.location.href = "/main"
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar position="static">

                    <Toolbar>
                        <IconButton  size ="small" className ={classes.marginNegative}>
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

                        <CardComponent cards={["1", "2", "3", "4", "5", "6", "7", "8"]}/>
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }

}

export default withStyles(matchingComponentStyles)(MatchingComponent);