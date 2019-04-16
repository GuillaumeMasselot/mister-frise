import React, { Component } from 'react';

import TimelineDetails from '../components/TimelineDetails';
import InteractiveTimeline from '../components/InteractiveTimeline';
import DecoratedTextBlock from '../components/DecoratedTextBlock';
import SimpleTextBlock from '../components/SimpleTextBlock';

class TimelineArticle extends Component {

    render() {
        return (
            <div>
                <DecoratedTextBlock imgUrl={this.props.imgUrl} title={this.props.title}>
                    {this.props.summary}
                </DecoratedTextBlock>
                <br/>
                    <InteractiveTimeline title="Timeline" timelineUrl={this.props.timelineUrl} />
                <br/>
                <TimelineDetails timelineSteps={this.props.timelineSteps} title="Timeline" />
                <br/>
                <SimpleTextBlock title="Notes">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </SimpleTextBlock>
                <br />
                <SimpleTextBlock title="Sources & liens">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </SimpleTextBlock>
            </div>
        )
    }
}

export default TimelineArticle;