import React from "react";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
import axiosInstance from "../Axios/AxiosInstance";
import ListComponent from "./ListComponent";
import TextField from '@material-ui/core/TextField';

let product_name = ""

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }

    }

    componentDidMount() {
        let nameParam = [];
        axiosInstance.get("product/").then(
            (res) => {
                res.data.forEach(element =>
                    nameParam.push(element.title)
                );
                this.setState({products: nameParam});
            }
        )
    }

    onClickMyFunction = () => {
        axiosInstance.put("product/save",{"title":{product_name}}).then(
            () => {
                let nameParam = [];
                axiosInstance.get("product/").then(
                    (res) => {
                        res.data.forEach(element =>
                            nameParam.push(element.title)
                        );
                        this.setState({products: nameParam});
                    }
                )

            }
        ).catch((error)=> {
            console.log(error)
          })
    };

    onChangeText = (event) => {
        product_name = event.target.value
    }


    render() {
        return (
            <Container>
                <Button variant="contained" color="primary" onClick={this.onClickMyFunction}>Press me</Button>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.onChangeText} />
                <p>{this.state.name}</p>
                <ListComponent caca = {this.state.products}></ListComponent>
            </Container>
        );
    }

}



export default MainComponent