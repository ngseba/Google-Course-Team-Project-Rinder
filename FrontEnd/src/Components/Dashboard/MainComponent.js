import React from "react";
import axiosInstance from "../../Axios/AxiosInstance";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListComponent from "./ListComponent";
import List from "@material-ui/core/List";
import {DELETE_RESOLUTION, GET_RESOLUTIONS, UPDATE_RESOLUTIONS_DONE} from "../../APIConstants/ApiConstants";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import {mainStyles} from "./mainStyles";
import {withStyles} from "@material-ui/core/styles";
import DialogAddNewResolution from "./DialogAddNewResolution";
import DialogUpdateName from "./DialogUpdateName";


class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resolutions: [],
            openModal: false,
            openModalEdit: {id: 0, open: false},
            resolutionEdit: {name: "", tags: ""},
        }

    }

    refreshValues = () => {
        let resolutionsAPI = [];
        axiosInstance.get(GET_RESOLUTIONS).then(
            (res) => {
                res.data.forEach(element =>
                    resolutionsAPI.push(element)
                );
                this.setState({resolutions: resolutionsAPI})
            }
        )
    };



    componentDidMount() {
        this.refreshValues();
    }


    handleChange = (id) => {
        axiosInstance.put(UPDATE_RESOLUTIONS_DONE + id).then(() => {

                //TODO: Do not call api, retain all the values of the checkboxes and negate them
                this.refreshValues();
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    };

    handleModal = () => {
        this.setState({
            openModal: true
        })
    };

    handleEditModal = () => {
        this.setState({
            openModalEdit: {open: false}
        });
        this.refreshValues();


    };

    changeModalState = () => {
        this.setState({
            openModal: !this.state.openModal
        });
        //TODO: Do not call api, append
        this.refreshValues();

    };

    updateResolution = (resolution) => {
        this.setState({
            openModalEdit: {id: resolution.id, open: true},
            resolutionEdit: {name: resolution.name, tags: resolution.tags}
        });
        this.refreshValues();
    };

    deleteResolution = (id) => {
        let resolutionsAPI = [];
        axiosInstance.delete(DELETE_RESOLUTION + id).then(() => {
            this.refreshValues()

        }).catch((err) => {
                console.log(err);
            }
        )
    };


    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Your resolutions
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListComponent list={this.state.resolutions}
                                   handleChange={this.handleChange}
                                   updateResolution={this.updateResolution}
                                   deleteResolution={this.deleteResolution}/>
                </List>
                <Fab className={classes.fab} color="primary" aria-label="add" variant="extended"
                     onClick={this.handleModal}>
                    <AddIcon/> &nbsp;
                    Add new resolution
                </Fab>
                <DialogAddNewResolution openModal={this.state.openModal} openModalChange={this.changeModalState}/>
                <DialogUpdateName openModal={this.state.openModalEdit.open} idUpdate={this.state.openModalEdit.id}
                                  openModalChange={this.handleEditModal}  texts = {this.state.resolutionEdit}/>

            </React.Fragment>
        )

    }

}


export default withStyles(mainStyles)(MainComponent)