import React, { Component } from 'react';

import TimelineDetails from '../components/TimelineDetails';
import InteractiveTimeline from '../components/InteractiveTimeline';
import Introduction from '../components/Introduction';

class TimelineArticle extends Component {

    render() {
        return (
            <div>
                <Introduction imgUrl={this.props.imgUrl} title={this.props.title}>
                    {this.props.summary}
                </Introduction>
                <br/>
                    <InteractiveTimeline title="myFrise" timelineUrl={this.props.timelineUrl} />
                <br/>
                <TimelineDetails timelineSteps={this.props.timelineSteps} />
            </div>
        )
    }
}

export default TimelineArticle;