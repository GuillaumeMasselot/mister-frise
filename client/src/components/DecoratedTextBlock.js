import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class DecoratedText extends Component {
    render() {
        return (
            <Card>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    style={{objectFit: 'cover'}}
                    height="140"
                    image={this.props.imgUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography>
                        {this.props.children}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}
