import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SectionTitle from './SectionTitle';

export default class InteractiveTimeline extends Component {

    componentDidMount() {
        if (!this.props.timelineUrl) {
            const { TL } = window;
            const { events: evts, _id: id } = this.props.article;
            const events = evts.map(event => {
                const date = new Date(event.start);
                return {
                    start_date: {
                        year: date.getFullYear(),
                        month: date.getMonth()+1,
                        day: date.getDate()
                    },
                    text: {
                        headline: event.title,
                        text: event.subtitle || ''
                    }
                }
            })
            const timelineJson = {
                events: events
            }
            const options = {
                debug: true,
                language: 'fr',
                start_at_slide: 1,
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
