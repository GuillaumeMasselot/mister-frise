import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class InteractiveTimeline extends Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <iframe 
                        title={this.props.title}
                        src={this.props.timelineUrl}
                        width='100%' 
                        height='450' 
                        webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'>
                    </iframe>
                </CardContent>
            </Card>
        )
    }
}