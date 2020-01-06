import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import axiosInstance from "../../Axios/AxiosInstance";
import {UPDATE_RESOLUTIONS_NAME} from "../../APIConstants/ApiConstants";


let tags = "'";
let resolution = "";
class DialogUpdateName extends React.Component {


    //TODO: Edit bug no change

    constructor(props) {
        super(props);
        this.state = {
            openModal: true
        }

    }


    handleUpdate = (id) => {
        axiosInstance.put(UPDATE_RESOLUTIONS_NAME + id, {"name": resolution, "tags": tags}).then(() => {
                this.props.openModalChange();
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )

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
                <DialogTitle id="form-dialog-title">Update your resolution</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update your resolution and your desired tags for the resolution. Tags help us match
                        you with other users so please introduce at least one
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Resolution"
                        type="text"
                        defaultValue = {this.props.texts.name}
                        onChange={this.handleResolution}
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="tags"
                        label="Tags"
                        type="text"
                        m={4}
                        defaultValue={this.props.texts.tags}
                        onChange={this.handleTags}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.openModalChange} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>this.handleUpdate(this.props.idUpdate)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default DialogUpdateName