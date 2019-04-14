import React, { Component } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export default class Introduction extends Component {
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
                    <Typography component="p">
                        {this.props.children}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}
