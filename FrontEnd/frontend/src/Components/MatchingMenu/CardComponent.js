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
                            User
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Show email
                    </Button>
                </CardActions>
            </Card>
        )
    )
};

export default withStyles(cardComponentStyles)(CardComponent)