import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SectionTitle from './SectionTitle';
import { parseDateAlt } from '../utils/dateParser';

export default class InteractiveTimeline extends Component {

    componentDidMount() {
        if (!this.props.timelineUrl) {
            const { TL } = window;
            const { events: evts, _id: id } = this.props.article;
            const events = evts.map(event => {
                let tljsevent = {
                    start_date: parseDateAlt(event.start),
                    display_date: event.dateLabel,
                    text: {
                        headline: event.title,
                        text: event.subtitle || ''
                    },
                    group: event.group
                }
                if (event.end) {
                    tljsevent.end_date = parseDateAlt(event.end)
                }
                return tljsevent;
            })
            const timelineJson = {
                events: events
            }
            const options = {
                debug: true,
                language: 'fr',
                start_at_slide: 0,
                initial_zoom: "0"
            }
            const timeline = new TL.Timeline(id, timelineJson, options);
            timeline._timenav.fire("zoomtoggle", {zoom:"out", show:false})
        }
    }

    render() {
        return (
            <div>
                <SectionTitle>{this.props.title}</SectionTitle>
                <Card>
                    <CardContent>
                        {
                            this.props.timelineUrl ? (
                                <iframe 
                                    title={this.props.title}
                                    src={this.props.timelineUrl}
                                    width='100%' 
                                    height={400} 
                                    webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen frameBorder='0'>
                                </iframe>
                            ) : <div id={this.props.article._id} style={{width: '100%', height: 350}}></div>
                        }
                    </CardContent>
                </Card>
            </div>
        )
    }
}
