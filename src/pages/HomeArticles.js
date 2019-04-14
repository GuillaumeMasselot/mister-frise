import React, { Component } from 'react';
import InteractiveTimeline from '../components/InteractiveTimeline';
import Introduction from '../components/Introduction';

export default class HomeArticles extends Component {
    render() {
        return (
            <div>
                <Introduction title={this.props.title} imgUrl={this.props.imgUrl}>
                    Un petit résumé
                </Introduction>
                <br/>
                <InteractiveTimeline title="myFrise" timelineUrl={this.props.timelineUrl} />
                <br />
                <div>liste d'articles</div>
            </div>
        )
    }
}
