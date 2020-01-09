import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import axiosInstance from "../../Axios/AxiosInstance";
import {CREATE_RESOLUTION} from "../../APIConstants/ApiConstants";

let tags = "'";
let resolution = "";

class DialogAddNewResolution extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: true
        }
    }


    handleAdd = () => {
        axiosInstance.post(CREATE_RESOLUTION, {"tags": tags, "name": resolution, "id": 2}).then(() => {
            this.props.openModalChange();


        }).catch((err) => {
            console.log(err);
        })

    };


    handleResolution = (event) => {
        resolution = event.target.value;
    };

    handleTags = (event) => {
        tags = event.target.value;
    };

    render() {
        return (
            <Dialog open={this.props.openModal} onClose={this.openModalChange} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new resolution</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your new resolution and your desired tags for the resolution. Tags help us match
                        you
                        with other users so please introduce at least one
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Resolution"
                        type="text"
                        onChange={this.handleResolution}
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="tags"
                        label="Tags"
                        type="text"
                        m={4}
                        onChange={this.handleTags}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.openModalChange} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default DialogAddNewResolution