import React from "react";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";


let incrementA = "a"
class MainComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
        }

    }

    onClickMyFunction = () =>{
        incrementA = incrementA + "a";
        this.setState({
            name: incrementA
        })
    };

    render() {
        return (
            <Container>
                <Button variant="contained" color="primary" onClick = {this.onClickMyFunction}>Press me</Button>
                <p>{this.state.name}</p>
            </Container>
        );
    }

}

export default MainComponent