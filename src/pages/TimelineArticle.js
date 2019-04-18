import React, { Component } from 'react';

import TimelineDetails from '../components/TimelineDetails';
import InteractiveTimeline from '../components/InteractiveTimeline';
import DecoratedTextBlock from '../components/DecoratedTextBlock';
import SimpleTextBlock from '../components/SimpleTextBlock';

//temp
import articlesList from '../data'

class TimelineArticle extends Component {

    state = {
        article: {}
    }

    componentWillMount () {
        const { id } = this.props.match.params;

        this.setState({
            article: articlesList.find( article => article.id === Number(id) )
        });
    }

    render() {
        const { imgUrl, title, intro, timelineUrl, events, notes, links, sources } = this.state.article;
        return (
            <div>
                <DecoratedTextBlock imgUrl={imgUrl} title={title}>
                    {intro}
                </DecoratedTextBlock>
                <br/>
                    <InteractiveTimeline title="Timeline" timelineUrl={timelineUrl} />
                <br/>
                <TimelineDetails timelineSteps={events} title="Timeline" />
                <br/>
                <SimpleTextBlock title="Notes">
                    {notes}
                </SimpleTextBlock>
                <br />
                <SimpleTextBlock title="Sources & liens">
                    {
                        sources.map( (source, index) => <a href={source} key={index}>{source}</a>)
                    }
                    <br/>
                    {
                        links.map( (link, index) => <a href={link} key={index}>{link}</a>)
                    }
                </SimpleTextBlock>
            </div>
        )
    }
}

export default TimelineArticle;