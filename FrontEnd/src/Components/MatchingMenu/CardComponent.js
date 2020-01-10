import React from "react";
import {cardComponentStyles} from "./cardComponentStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";


const CardComponent = (props) => {

    const {classes} = props;
    if (props.noCards === true) {
        if (props.cards.length === 0) {
            return (<Card>
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">
                        No matching users found. Try to lower the threshold
                    </Typography>
                </CardContent>
            </Card>)
        } else {

            return props.cards.map(card => (

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => props.handleEmail(card.email)}>
                                Show email
                            </Button>
                        </CardActions>
                    </Card>


                )
            )
        }
    }else{
        return ("");
    }

};

export default withStyles(cardComponentStyles)(CardComponent)