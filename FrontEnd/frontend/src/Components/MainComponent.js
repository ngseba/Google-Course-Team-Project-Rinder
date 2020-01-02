import React from "react";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
import axiosInstance from "../Axios/AxiosInstance";



class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }

    }

    componentDidMount() {
        let nameParam = "";
        axiosInstance.get("products/").then(
            (res) => {
                res.data.forEach(element =>
                    nameParam = nameParam + element.title
                );
                this.setState({name: nameParam});
            }
        )
    }

    onClickMyFunction = () => {
        axiosInstance.post("save_product/","{'abc':'da'}").then(
            () => {
                console.log("Hello")
            }
        ).catch((error)=> {
            console.log(error)
          })
    };


    render() {
        return (
            <Container>
                <Button variant="contained" color="primary" onClick={this.onClickMyFunction}>Press me</Button>
                <p>{this.state.name}</p>
            </Container>
        );
    }

}

export default MainComponent