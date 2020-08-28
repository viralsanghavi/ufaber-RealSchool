import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ color }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea style={{ backgroundColor: color }}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography gutterBottom variant="h5" component="h2">
                    #3 Words in <br />
                        French
                     </Typography>
                <ArrowRightAltIcon className="arrowright" />
            </CardActions>
        </Card>
    );
}