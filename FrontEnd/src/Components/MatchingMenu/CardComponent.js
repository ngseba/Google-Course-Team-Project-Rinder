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
    //todo
    const {classes} = props;

    return props.cards.map(card => (

            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {card.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick = {()=>props.handleEmail(card.email)}>
                        Show email
                    </Button>
                </CardActions>
            </Card>


        )
    )
};

export default withStyles(cardComponentStyles)(CardComponent)