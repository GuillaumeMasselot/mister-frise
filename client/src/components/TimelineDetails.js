import React, { Component } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SectionTitle from './SectionTitle';
import { parseDate } from '../utils/dateParser';

export default class TimelineDetails extends Component {
    render() {
        return (
            <div>
                <SectionTitle>évenements majeurs</SectionTitle>
                <Card>
                    <CardContent>
                        <br/>
                        <Timeline>
                        {
                            this.props.timelineSteps.map( (step, i) => {
                                return (
                                    <div id={i} key={i}>
                                        <Event interval={step.dateLabel || parseDate(step.start)} title={step.title} subtitle={step.subtitle}>
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