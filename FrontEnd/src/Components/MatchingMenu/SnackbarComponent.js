import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

class SnackbarComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.open}
                autoHideDuration={3000}
                message={this.props.email_snackbar}
                action={
                    <Button color="secondary" size="small" onClick={this.props.handleClose}>
                        Close
                    </Button>
                }/>
        )
    }
}

export default SnackbarComponent


