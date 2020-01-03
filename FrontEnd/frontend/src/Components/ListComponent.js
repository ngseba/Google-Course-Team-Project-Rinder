import React from "react";
import { ListItem , ListItemText } from "@material-ui/core";

let i = 0
const ListComponent  = (props) => {
    console.log(props);
    return props.caca.map((element) => (
        <ListItem button key = {i++}> 
            <ListItemText primary = { element } />
        </ListItem>
    ))
}

export default ListComponent