import React, { Component } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SectionTitle from './SectionTitle';
import { parseDate } from '../utils/dateParser';

import ReactHtmlParser from 'react-html-parser';

export default class TimelineDetails extends Component {

    getInterval(step) {
        if (step.dateLabel) {
            return step.dateLabel;
        }
        if (step.start) {
            if (step.end) {
                return `${parseDate(step.start)} - ${parseDate(step.end)}`
            }
            return parseDate(step.start);
        }
        return null;
    }

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
                                // const parsedDetails = htmlToReactParser.parse(step.details);
                                return (
                                    <div id={i} key={i}>
                                        <Event interval={this.getInterval(step)} title={step.title} subtitle={step.subtitle}>
                                            {ReactHtmlParser(step.details)}
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