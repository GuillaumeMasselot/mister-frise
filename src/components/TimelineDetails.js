import React, { Component } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import { Card, CardContent, Typography } from '@material-ui/core';

export default class TimelineDetails extends Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h2">
                        Timeline
                    </Typography>
                    <br/>
                    <Timeline>
                    {
                        this.props.timelineSteps.map( (step, i) => {
                            return (
                                <div id={i}>
                                    <Event interval={step.date} title={step.title} subtitle={step.subtitle} key={i}>
                                        {step.content}
                                    </Event>
                                </div>
                            );
                        })
                    }
                    </Timeline>
                </CardContent>
            </Card>
        )
    }
}