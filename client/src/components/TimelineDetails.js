import React, { Component } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import { Card, CardContent } from '@material-ui/core';
import SectionTitle from './SectionTitle';
import { parseDate } from '../utils/dateParser';

export default class TimelineDetails extends Component {
    render() {
        return (
            <div>
                <SectionTitle>Détails</SectionTitle>
                <Card>
                    <CardContent>
                        <br/>
                        <Timeline>
                        {
                            this.props.timelineSteps.map( (step, i) => {
                                return (
                                    <div id={i} key={i}>
                                        <Event interval={parseDate(step.start)} title={step.title} subtitle={step.subtitle}>
                                            {step.details}
                                        </Event>
                                    </div>
                                );
                            })
                        }
                        </Timeline>
                    </CardContent>
                </Card>
            </div>
        )
    }
}