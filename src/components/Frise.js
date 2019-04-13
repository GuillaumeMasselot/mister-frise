import React, { Component } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';

class Frise extends Component {
    render() {
        return (
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
        )
    }
}

export default Frise;