import React, { Component } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Frise extends Component {
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
                                <Event interval={step.date} title={step.title} subtitle={step.subtitle} key={i}>
                                    {step.content}
                                </Event>
                            );
                        })
                    }
                    </Timeline>
                </CardContent>
            </Card>
        )
    }
}

export default Frise;