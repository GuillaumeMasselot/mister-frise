import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Frise from '../components/Frise';

class TimelineArticle extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        style={{objectFit: 'cover'}}
                        height="140"
                        image={this.props.mainImg}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Rapide intro
                        </Typography>
                        <Typography component="p">
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent>
                        <iframe 
                            title="myfrise"
                            src={this.props.timelinejs}
                            width='100%' 
                            height='650' 
                            webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'>
                        </iframe>
                    </CardContent>
                </Card>
                <br/>
                <Frise timelineSteps={this.props.timelineSteps} />
            </div>
        )
    }
}

export default TimelineArticle;