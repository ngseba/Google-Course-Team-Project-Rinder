import React from "react";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"

let i = 0;
const ListComponent = (props) => {
    return props.list.map(resolution => (
            <React.Fragment>
                <ListItem key={i++} button>
                    <Checkbox
                        checked={resolution.done}
                        onChange={() => props.handleChange(resolution.id)}
                        value="primary"
                    />
                    <ListItemText primary={resolution.name}
                                  secondary={resolution.tags.split(' ').map(tag => (tag = "#" + tag + " "))}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="update" onClick={() => props.updateResolution(resolution)}>
                            <EditIcon/>
                        </IconButton>

                        <IconButton edge="end" aria-label="delete" onClick={() => props.deleteResolution(resolution.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </React.Fragment>
        )
    )

};
export default ListComponent;